// Gesture Handler configuration for React Native
// This file helps resolve build issues with gesture handler on Android

module.exports = {
  // Enable native module linking
  enableNativeModuleLinker: true,
  
  // Configure Android build properties
  android: {
    // Ensure proper Java compilation
    compileOptions: {
      sourceCompatibility: 'VERSION_11',
      targetCompatibility: 'VERSION_11',
    },
    // Configure Gradle options
    lintOptions: {
      disable: ['MissingDimensionActivityCreator'],
    },
  },
};
