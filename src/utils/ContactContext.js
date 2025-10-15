import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { sampleContacts } from '../data/contactsData';

const ContactContext = createContext();

export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactProvider');
  }
  return context;
};

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      } else {
        setContacts(sampleContacts);
        await AsyncStorage.setItem('contacts', JSON.stringify(sampleContacts));
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
      setContacts(sampleContacts);
    } finally {
      setLoading(false);
    }
  };

  const saveContacts = async (newContacts) => {
    try {
      await AsyncStorage.setItem('contacts', JSON.stringify(newContacts));
      setContacts(newContacts);
    } catch (error) {
      console.error('Error saving contacts:', error);
    }
  };

  const addContact = (contactData) => {
    const newContact = {
      id: Date.now().toString(),
      ...contactData,
      favorite: false,
    };
    const updatedContacts = [...contacts, newContact];
    saveContacts(updatedContacts);
  };

  const updateContact = (id, contactData) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, ...contactData } : contact
    );
    saveContacts(updatedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    saveContacts(updatedContacts);
  };

  const toggleFavorite = (id) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    );
    saveContacts(updatedContacts);
  };

  const value = {
    contacts,
    loading,
    addContact,
    updateContact,
    deleteContact,
    toggleFavorite,
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};
