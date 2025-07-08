# MoodBro App - Font Usage Guide

## Font Hierarchy

### Primary Brand Font
- **Songbird** (`FONTS.SONGBIRD`) - Custom decorative font from DaFont
  - Used for: Main titles, brand elements, quotes
  - Examples: App titles, quote text, welcome headings

### Secondary System Font
- **Plus Jakarta Sans** (`FONTS.JAKARTA_*`) - Modern, clean system font
  - Used for: Body text, buttons, form elements, navigation

## Font Usage by Screen

### Splash Screens
- **SplashScreen.jsx**: 
  - Quote text: `FONTS.SONGBIRD` (Songbird)
- **FetchingDataScreen.jsx**: 
  - Percentage text: `FONTS.JAKARTA_BOLD`
- **QuoteScreen.jsx**: 
  - Quote text: `FONTS.SONGBIRD` (Songbird)
  - Author text: `FONTS.JAKARTA_SEMIBOLD`

### Onboarding Screens
- **Onboarding1.jsx**: 
  - Welcome title: `FONTS.SONGBIRD` (Songbird)
  - Description: `FONTS.JAKARTA_MEDIUM`
  - Button text: `FONTS.JAKARTA_BOLD`
  - Footer text: `FONTS.JAKARTA_REGULAR`
- **Onboarding2-5.jsx**: 
  - Titles: `FONTS.JAKARTA_BOLD`

### Login Screens
- **SignInScreen.jsx**:
  - App title: `FONTS.SONGBIRD` (Songbird)
  - Subtitle: `FONTS.JAKARTA_ITALIC`
  - Button text: `FONTS.JAKARTA_BOLD`
  - Input labels: `FONTS.JAKARTA_SEMIBOLD`
  - Input text: `FONTS.JAKARTA_REGULAR`
  - Links: `FONTS.JAKARTA_MEDIUM`

- **SignUpScreen.jsx**:
  - Titles: `FONTS.JAKARTA_BOLD`
  - Body text: `FONTS.JAKARTA_REGULAR`
  - Buttons: `FONTS.JAKARTA_SEMIBOLD`
  - Labels: `FONTS.JAKARTA_MEDIUM`

- **ForgotPasswordScreen.jsx**:
  - Title: `FONTS.JAKARTA_BOLD`
  - Body text: `FONTS.JAKARTA_REGULAR`
  - Button: `FONTS.JAKARTA_SEMIBOLD`

## Font Constants Reference

```javascript
// Available font constants from src/constants/fonts.js

// Jakarta Sans family
FONTS.JAKARTA_REGULAR = 'PlusJakartaSans-Regular'
FONTS.JAKARTA_BOLD = 'PlusJakartaSans-Bold'
FONTS.JAKARTA_LIGHT = 'PlusJakartaSans-Light'
FONTS.JAKARTA_MEDIUM = 'PlusJakartaSans-Medium'
FONTS.JAKARTA_SEMIBOLD = 'PlusJakartaSans-SemiBold'
FONTS.JAKARTA_EXTRABOLD = 'PlusJakartaSans-ExtraBold'
FONTS.JAKARTA_EXTRALIGHT = 'PlusJakartaSans-ExtraLight'

// Jakarta Sans Italic
FONTS.JAKARTA_ITALIC = 'PlusJakartaSans-Italic'
FONTS.JAKARTA_BOLD_ITALIC = 'PlusJakartaSans-BoldItalic'
FONTS.JAKARTA_LIGHT_ITALIC = 'PlusJakartaSans-LightItalic'
FONTS.JAKARTA_MEDIUM_ITALIC = 'PlusJakartaSans-MediumItalic'
FONTS.JAKARTA_SEMIBOLD_ITALIC = 'PlusJakartaSans-SemiBoldItalic'
FONTS.JAKARTA_EXTRABOLD_ITALIC = 'PlusJakartaSans-ExtraBoldItalic'
FONTS.JAKARTA_EXTRALIGHT_ITALIC = 'PlusJakartaSans-ExtraLightItalic'

// Custom fonts
FONTS.SONGBIRD = 'Songbird'
```

## Design Principles

1. **Songbird** for emotional/brand moments (titles, quotes, welcome messages)
2. **Jakarta Sans Bold/SemiBold** for headings and important buttons
3. **Jakarta Sans Medium** for labels and secondary text
4. **Jakarta Sans Regular** for body text and inputs
5. **Jakarta Sans Italic** for subtitles and emphasized text

## Implementation Status

✅ All screens updated to use font constants
✅ Songbird font properly linked for Android and iOS
✅ Font test screen available for debugging
✅ Consistent font hierarchy established

## Testing

- Navigate to FontTest screen to verify all fonts are working
- Check each screen to ensure proper font rendering
- Test on both Android and iOS devices
