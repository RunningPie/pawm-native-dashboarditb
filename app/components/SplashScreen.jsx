import React from 'react';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = ({ isVisible, onFinish }) => {
  if (!isVisible) return null; // Avoid rendering when the splash screen is not needed

  return (
    <SafeAreaView className="h-full">
        <LottieView
          source={require('../../assets/lottie_files/lottie-splash.json')}
          style={{ width: 'auto', height: '100%' }}
          autoPlay
          loop={false}
          resizeMode='cover'
          onAnimationFinish={onFinish} // Pass the callback function directly
        />
    </SafeAreaView>
  );
};

export default SplashScreen;
