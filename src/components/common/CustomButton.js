import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Fonts, Spacing } from '../../styles/globalStyles';

const CustomButton = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  size = 'medium', // 'small' | 'medium' | 'large'
  leftIcon,
  rightIcon,
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[`${variant}Button`], styles[`${size}Button`]];
    if (disabled || loading) {
      baseStyle.push(styles.disabledButton);
    }
    if (style) {
      baseStyle.push(style);
    }
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.buttonText, styles[`${variant}Text`], styles[`${size}Text`]];
    if (disabled || loading) {
      baseStyle.push(styles.disabledText);
    }
    if (textStyle) {
      baseStyle.push(textStyle);
    }
    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{disabled: disabled || loading}}
      {...props}>
      <View style={styles.buttonContent}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={variant === 'primary' ? Colors.text.light : Colors.primary}
            style={styles.loadingIndicator}
          />
        ) : (
          <>
            {leftIcon && (
              <Icon
                name={leftIcon}
                size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
                color={variant === 'primary' ? Colors.text.light : Colors.primary}
                style={styles.leftIcon}
              />
            )}
            <Text style={getTextStyle()}>{title}</Text>
            {rightIcon && (
              <Icon
                name={rightIcon}
                size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
                color={variant === 'primary' ? Colors.text.light : Colors.primary}
                style={styles.rightIcon}
              />
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Variants
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  // Sizes
  smallButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    minHeight: 36,
  },
  mediumButton: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    minHeight: 48,
  },
  largeButton: {
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xl,
    minHeight: 56,
  },
  // Text styles
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  primaryText: {
    color: Colors.text.light,
  },
  secondaryText: {
    color: Colors.text.light,
  },
  outlineText: {
    color: Colors.primary,
  },
  smallText: {
    fontSize: Fonts.small,
  },
  mediumText: {
    fontSize: Fonts.medium,
  },
  largeText: {
    fontSize: Fonts.large,
  },
  // Disabled states
  disabledButton: {
    opacity: 0.6,
  },
  disabledText: {
    opacity: 0.8,
  },
  // Icons
  leftIcon: {
    marginRight: Spacing.sm,
  },
  rightIcon: {
    marginLeft: Spacing.sm,
  },
  loadingIndicator: {
    marginRight: Spacing.sm,
  },
});

export default CustomButton;