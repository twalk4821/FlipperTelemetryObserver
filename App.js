/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useCallback, useState} from 'react';
import {
  SafeAreaView,
  Button
} from 'react-native';
import useFlipperTelemetryObserver from './flipper/plugins/use-flipper-telemetry-observer';

const App = () => {
  const { dispatch } = useFlipperTelemetryObserver();

  const mockPayload = {
    appName: 'psapp',
    appVersion: '21.9.0',
    mobilePlatformType: 'iOS',
    mobileOSVersion: '14.4',
    mobileDeviceYearClass: '-1',
    mobileDeviceName: 'iPhone Simulator',
    mobileDeviceManufacturer: 'Apple',
    mobileNetworkType: 'wifi',
    psnAccountId: '1234567890',
    psnAccountLanguage: 'en',
    psnAccountRegion: 'us',
    hashedPsnAccountId: '1234567890',
    signedIn: true,
    loggedIn: false,
    platformPrivacyWs1: 'exempt',
    ciiSampling: 1,
    aaSampling: 1,
    sbahnSampling: 1,
    referrerApplicationName: 'psapp',
    referrerScene: 'play',
    timestamp: new Date(),
    type: 'Navigation',
    platformType: 'mobile',
    mobileFeatureArea: 'store tabs',
    locationScene: 'store:featured'
  };

  return (
    <SafeAreaView>
      <Button title="Click Me!" onPress={() => dispatch(mockPayload)} />
    </SafeAreaView>
  );
};

export default App;
