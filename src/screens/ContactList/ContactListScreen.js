import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatContactName, searchContacts } from '../../data/contactsData';
import { Colors, Fonts, Spacing } from '../../styles/globalStyles';
import { useContacts } from '../../utils/ContactContext';

const ContactListScreen = ({navigation}) => {
  const {contacts, loading} = useContacts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = searchContacts(contacts, searchTerm);

  const renderContact = ({item}) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => navigation.navigate('ContactDetails', {contact: item})}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>
          {item.firstName?.[0]}{item.lastName?.[0]}
        </Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{formatContactName(item)}</Text>
        {item.phone && <Text style={styles.contactPhone}>{item.phone}</Text>}
        {item.company && <Text style={styles.contactCompany}>{item.company}</Text>}
      </View>
      {item.favorite && (
        <Icon name="favorite" size={20} color={Colors.error} />
      )}
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading contacts...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color={Colors.text.secondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search contacts..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <FlatList
        data={filteredContacts}
        renderItem={renderContact}
        keyExtractor={item => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddContact')}>
        <Icon name="add" size={24} color={Colors.text.light} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.secondary,
    margin: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: Spacing.md,
    paddingLeft: Spacing.sm,
    fontSize: Fonts.size.md,
    color: Colors.text.primary,
  },
  list: {
    flex: 1,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
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
    fontSize: Fonts.size.md,
    fontWeight: 'bold',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: Fonts.size.md,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  contactPhone: {
    fontSize: Fonts.size.sm,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  contactCompany: {
    fontSize: Fonts.size.sm,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: Fonts.size.md,
    color: Colors.text.secondary,
  },
});

export default ContactListScreen;
