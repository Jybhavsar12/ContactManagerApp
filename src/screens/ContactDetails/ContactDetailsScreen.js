import React from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatContactName } from '../../data/contactsData';
import { Colors, Fonts, Spacing } from '../../styles/globalStyles';
import { useContacts } from '../../utils/ContactContext';

const ContactDetailsScreen = ({ navigation, route }) => {
  const { contact } = route.params;
  const { deleteContact, toggleFavorite } = useContacts();

  const handleCall = () => {
    if (contact.phone) {
      Linking.openURL(`tel:${contact.phone}`);
    }
  };

  const handleMessage = () => {
    if (contact.phone) {
      Linking.openURL(`sms:${contact.phone}`);
    }
  };

  const handleEmail = () => {
    if (contact.email) {
      Linking.openURL(`mailto:${contact.email}`);
    }
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Contact',
      `Are you sure you want to delete ${formatContactName(contact)}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteContact(contact.id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleToggleFavorite = () => {
    toggleFavorite(contact.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {contact.firstName?.[0]}{contact.lastName?.[0]}
            </Text>
          </View>
          <Text style={styles.name}>{formatContactName(contact)}</Text>
          {contact.company && (
            <Text style={styles.company}>{contact.company}</Text>
          )}
        </View>

        <View style={styles.actionButtons}>
          {contact.phone && (
            <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
              <Icon name="phone" size={24} color={Colors.primary} />
              <Text style={styles.actionText}>Call</Text>
            </TouchableOpacity>
          )}
          {contact.phone && (
            <TouchableOpacity style={styles.actionButton} onPress={handleMessage}>
              <Icon name="message" size={24} color={Colors.primary} />
              <Text style={styles.actionText}>Message</Text>
            </TouchableOpacity>
          )}
          {contact.email && (
            <TouchableOpacity style={styles.actionButton} onPress={handleEmail}>
              <Icon name="email" size={24} color={Colors.primary} />
              <Text style={styles.actionText}>Email</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.details}>
          {contact.phone && (
            <View style={styles.detailItem}>
              <Icon name="phone" size={20} color={Colors.text.secondary} />
              <Text style={styles.detailText}>{contact.phone}</Text>
            </View>
          )}
          {contact.email && (
            <View style={styles.detailItem}>
              <Icon name="email" size={20} color={Colors.text.secondary} />
              <Text style={styles.detailText}>{contact.email}</Text>
            </View>
          )}
          {contact.company && (
            <View style={styles.detailItem}>
              <Icon name="business" size={20} color={Colors.text.secondary} />
              <Text style={styles.detailText}>{contact.company}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleToggleFavorite}>
          <Icon
            name={contact.favorite ? 'favorite' : 'favorite-border'}
            size={24}
            color={contact.favorite ? Colors.error : Colors.text.secondary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('AddContact', { contact })}>
          <Icon name="edit" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Icon name="delete" size={24} color={Colors.error} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  avatarText: {
    color: Colors.text.light,
    fontSize: Fonts.size.xxl,
    fontWeight: 'bold',
  },
  name: {
    fontSize: Fonts.size.xl,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  company: {
    fontSize: Fonts.size.md,
    color: Colors.text.secondary,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  actionButton: {
    alignItems: 'center',
    padding: Spacing.md,
  },
  actionText: {
    fontSize: Fonts.size.sm,
    color: Colors.primary,
    marginTop: Spacing.xs,
  },
  details: {
    padding: Spacing.lg,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  detailText: {
    fontSize: Fonts.size.md,
    color: Colors.text.primary,
    marginLeft: Spacing.md,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Spacing.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  favoriteButton: {
    padding: Spacing.md,
  },
  editButton: {
    padding: Spacing.md,
  },
  deleteButton: {
    padding: Spacing.md,
  },
});

export default ContactDetailsScreen;
