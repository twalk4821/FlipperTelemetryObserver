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
    appName: '',
    appVersion: '',
    mobilePlatformType: '',
    mobileOSVersion: '',
    mobileDeviceYearClass: '',
    mobileDeviceName: '',
    mobileDeviceManufacturer: '',
    mobileNetworkType: '',
    psnAccountId: '',
    psnAccountLanguage: '',
    psnAccountRegion: '',
    hashedPsnAccountId: '',
    signedIn: true,
    loggedIn:false,
    platformPrivacyWs1: '',
    ciiSampling: 1,
    aaSampling: 1,
    sbahnSampling: 1,
    referrerApplicationName: '',
    referrerScene: '',
    referringInternalCampaignId: '',
    referringExternalCampaignId: '',
    timestamp: new Date(),
    platformType: ''
  };

  return (
    <SafeAreaView>
      <Button title="Click Me!" onPress={() => dispatch(mockPayload)} />
    </SafeAreaView>
  );
};

export default App;
