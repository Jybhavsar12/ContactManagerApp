import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Fonts, Spacing } from '../../styles/globalStyles';

const CustomInput = ({
  label,
  value,
  onChangeText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  placeholder,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon && (
          <Icon name={leftIcon} size={20} color={Colors.text.secondary} style={styles.leftIcon} />
        )}
        <TextInput
          style={[styles.input, leftIcon && styles.inputWithLeftIcon]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.text.secondary}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
            <Icon name={rightIcon} size={20} color={Colors.text.secondary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: Fonts.size.sm,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    backgroundColor: Colors.background.primary,
  },
  input: {
    flex: 1,
    padding: Spacing.md,
    fontSize: Fonts.size.md,
    color: Colors.text.primary,
  },
  inputWithLeftIcon: {
    paddingLeft: Spacing.sm,
  },
  leftIcon: {
    marginLeft: Spacing.md,
  },
  rightIcon: {
    padding: Spacing.md,
  },
});

export default CustomInput;
