export const sampleContacts = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (555) 123-4567',
    email: 'john.doe@email.com',
    company: 'Tech Corp',
    favorite: false,
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '+1 (555) 987-6543',
    email: 'jane.smith@email.com',
    company: 'Design Studio',
    favorite: true,
  },
  {
    id: '3',
    firstName: 'Mike',
    lastName: 'Johnson',
    phone: '+1 (555) 456-7890',
    email: 'mike.johnson@email.com',
    company: 'Marketing Inc',
    favorite: false,
  },
];

export const formatContactName = (contact) => {
  return `${contact.firstName} ${contact.lastName}`.trim();
};

export const searchContacts = (contacts, searchTerm) => {
  if (!searchTerm) return contacts;
  
  const term = searchTerm.toLowerCase();
  return contacts.filter(contact => 
    contact.firstName.toLowerCase().includes(term) ||
    contact.lastName.toLowerCase().includes(term) ||
    contact.phone.includes(term) ||
    contact.email.toLowerCase().includes(term) ||
    (contact.company && contact.company.toLowerCase().includes(term))
  );
};
