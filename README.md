# Contact Manager App

A comprehensive React Native contact management application with full CRUD functionality, search capabilities, and accessibility compliance.

## 📱 Screenshots

| Contact List | Contact Details | Add/Edit Contact |
|--
------------|-----------------|------------------|
|![answer 2025-10-15 at 1 35 46 PM](https://github.com/user-attachments/assets/ef5f5b87-6a30-499f-b73e-c41f56f81680)| ![answer 2025-10-15 at 1 08 37 PM](https://github.com/user-attachments/assets/9dab2361-ff58-44c9-8bba-1c8b7d41d645)
 | ![answer 2025-10-15 at 1 07 57 PM](https://github.com/user-attachments/assets/45b8501e-4fca-42c3-8501-3fc50f2adb9d) |


## ✨ Features

### Core Functionality
- ✅ **Contact List**: View all contacts with search and filtering
- ✅ **Add/Edit Contacts**: Full form validation and error handling
- ✅ **Contact Details**: Comprehensive contact information display
- ✅ **Delete Contacts**: Safe deletion with confirmation dialogs
- ✅ **Favorites**: Mark contacts as favorites with visual indicators
- ✅ **Communication**: Direct call, SMS, and email integration

### Technical Features
- ✅ **Data Persistence**: AsyncStorage for offline data storage
- ✅ **Search & Filter**: Real-time contact search functionality
- ✅ **Form Validation**: Comprehensive input validation with error feedback
- ✅ **Navigation**: Stack navigation with proper screen transitions
- ✅ **Performance**: Optimized FlatList rendering and React.memo
- ✅ **Accessibility**: Full screen reader and keyboard navigation support
- ✅ **Vector Icons**: Material Design icons throughout the app

## 🚀 Quick Start

### Prerequisites
- Node.js (>= 18)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jybhavsar12/ContactManagerApp.git
   cd ContactManagerApp
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the application**
   ```bash
   # For Android
   npm run android
   
   # For iOS
   npm run ios
   ```

## 📁 Project Structure

```
src/
├── components/
│   └── common/
│       ├── CustomButton.js      # Reusable button component
│       ├── CustomInput.js       # Form input component
│       ├── ContactListItem.js   # Contact list item component
│       └── LoadingSpinner.js    # Loading indicator
├── screens/
│   ├── ContactList/
│   │   └── ContactListScreen.js # Main contact list with search
│   ├── ContactDetails/
│   │   └── ContactDetailsScreen.js # Contact details and actions
│   └── AddContact/
│       └── AddContactScreen.js  # Add/edit contact form
├── navigation/
│   └── AppNavigator.js          # Stack navigation setup
├── utils/
│   └── ContactContext.js        # Global state management
├── data/
│   └── contactsData.js          # Sample data and utilities
└── styles/
    └── globalStyles.js          # Global styling constants
```

## 🛠️ Tech Stack

- **Framework**: React Native 0.82.0
- **Navigation**: React Navigation 6
- **State Management**: Context API + AsyncStorage
- **Icons**: React Native Vector Icons (Material Design)
- **Storage**: AsyncStorage for data persistence
- **Platform**: iOS & Android

## 🎯 Key Features Demo

### Contact Management
- **Add Contact**: Complete form with validation
- **Edit Contact**: Pre-filled form with existing data
- **Delete Contact**: Confirmation dialog for safety
- **Search**: Real-time filtering by name, phone, email, company

### Communication Integration
- **Call**: Direct phone calls via device dialer
- **SMS**: Open messaging app with contact number
- **Email**: Launch email client with contact address

### User Experience
- **Favorites**: Toggle favorite status with visual feedback
- **Accessibility**: Screen reader support and keyboard navigation
- **Performance**: Smooth scrolling with optimized rendering

## 🧪 Testing

### Manual Testing Checklist
- [ ] Add new contact with all fields
- [ ] Edit existing contact information
- [ ] Delete contact with confirmation
- [ ] Search contacts by various criteria
- [ ] Toggle favorite status
- [ ] Test call, message, email functionality
- [ ] Validate form inputs (empty fields, invalid formats)
- [ ] Test accessibility with screen reader
- [ ] Verify keyboard navigation

### Performance Testing
- [ ] Smooth scrolling with 100+ contacts
- [ ] Fast search response time
- [ ] Memory usage optimization
- [ ] App startup time

## 🔧 Configuration

### Vector Icons Setup
The app uses Material Design icons. They're automatically configured for iOS via CocoaPods. For Android, the configuration is already included in `android/app/build.gradle`.

### AsyncStorage
Data persistence is handled automatically. The app will create sample contacts on first launch and maintain them between sessions.

## 🚨 Troubleshooting

### Common Issues

**Icons not showing on Android:**
```bash
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

**Metro bundler issues:**
```bash
npx react-native start --reset-cache
```

**iOS build issues:**
```bash
cd ios && pod install && cd ..
```

**Dependency conflicts:**
```bash
npm install --legacy-peer-deps
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👨‍💻 Author

**Jyot Harshadkumar Bhavsar**
- GitHub: [@Jybhavsar12](https://github.com/Jybhavsar12)




---

