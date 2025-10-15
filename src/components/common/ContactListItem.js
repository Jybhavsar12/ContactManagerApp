import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Fonts, Spacing } from '../../styles/globalStyles';

const ContactListItem = ({
  contact,
  onPress,
  onFavoritePress,
  onCallPress,
  onMessagePress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(contact)}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Contact ${contact.firstName} ${contact.lastName}`}>
      
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>
          {contact.firstName?.[0]}{contact.lastName?.[0]}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {contact.firstName} {contact.lastName}
        </Text>
        {contact.company && (
          <Text style={styles.company}>{contact.company}</Text>
        )}
        {contact.phone && (
          <Text style={styles.phone}>{contact.phone}</Text>
        )}
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => onFavoritePress(contact.id)}
          style={styles.actionButton}>
          <Icon
            name={contact.favorite ? 'favorite' : 'favorite-border'}
            size={20}
            color={contact.favorite ? Colors.error : Colors.text.secondary}
          />
        </TouchableOpacity>

        {contact.phone && (
          <TouchableOpacity
            onPress={() => onCallPress(contact.phone)}
            style={styles.actionButton}>
            <Icon name="call" size={20} color={Colors.primary} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    backgroundColor: Colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  avatarText: {
    color: Colors.text.light,
    fontSize: Fonts.size.lg,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: Fonts.size.md,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  company: {
    fontSize: Fonts.size.sm,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  phone: {
    fontSize: Fonts.size.sm,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: Spacing.sm,
    marginLeft: Spacing.xs,
  },
});

export default ContactListItem;