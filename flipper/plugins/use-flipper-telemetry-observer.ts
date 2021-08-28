import React, {useEffect, useRef, useCallback, useState} from 'react';
import { addPlugin } from 'react-native-flipper';

type AppInfo = {
  appName: string;
  appVersion: string    
}

type MobileInfo = {
  mobilePlatformType: string;
  mobileOSVersion: string;
  mobileDeviceYearClass: string;
  mobileDeviceName: string;
  mobileDeviceManufacturer: string;
  mobileNetworkType: string;
}

type UserInfo = {
  psnAccountId: string;
  psnAccountLanguage: string;
  psnAccountRegion: string;
  hashedPsnAccountId: string;
  signedIn: boolean;
  loggedIn: boolean;
  platformPrivacyWs1: string;
}

type SamplingInfo = {
  ciiSampling: number;
  aaSampling: number;
  sbahnSampling: number;
}

type SubscriptionState = {
  subscriptionType: string;
  subscriptionStatus: string;
}

type SubscriptionInfo = SubscriptionState[]

type ReferrerInfo = {
  referrerApplicationName: string;
  referrerScene: string;
  referringInternalCampaignId: string;
  referringExternalCampaignId: string;
}

type MiscellaneousInfo = {
  timestamp: Date;
  platformType: string;
}

type BaseTelemetryPayload = 
  AppInfo & 
  MobileInfo & 
  UserInfo & 
  ReferrerInfo & 
  SamplingInfo & 
  MiscellaneousInfo

const getBaseTelemetryPayload: (telemetryEvent: any) => BaseTelemetryPayload = telemetryEvent => ({
  appName: telemetryEvent.appName,
  appVersion: telemetryEvent.appVersion,
  mobilePlatformType: telemetryEvent.mobilePlatformType,
  mobileOSVersion: telemetryEvent.mobileOSVersion,
  mobileDeviceYearClass: telemetryEvent.mobileDeviceYearClass,
  mobileDeviceName: telemetryEvent.mobileDeviceName,
  mobileDeviceManufacturer: telemetryEvent.mobileDeviceManufacturer,
  mobileNetworkType: telemetryEvent.mobileNetworkType,
  psnAccountId: telemetryEvent.psnAccountId,
  psnAccountLanguage: telemetryEvent.psnAccountLanguage,
  psnAccountRegion: telemetryEvent.psnAccountRegion,
  hashedPsnAccountId: telemetryEvent.hashedPsnAccountId,
  signedIn: telemetryEvent.signedIn,
  loggedIn: telemetryEvent.loggedIn,
  platformPrivacyWs1: telemetryEvent.platformPrivacyWs1,
  ciiSampling: telemetryEvent.ciiSampling,
  aaSampling: telemetryEvent.aaSampling,
  sbahnSampling: telemetryEvent.sbahnSampling,
  referrerApplicationName: telemetryEvent.referrerApplicationName,
  referrerScene: telemetryEvent.referrerScene,
  referringInternalCampaignId: telemetryEvent.referringInternalCampaignId,
  referringExternalCampaignId: telemetryEvent.referringExternalCampaignId,
  timestamp: telemetryEvent.timestamp,
  platformType: telemetryEvent.platformType
});

const useFlipperClientConnection = () => {
  const _connection = useRef();
  useEffect(() => {
    addPlugin({
      getId() { 
        return 'FlipperTelemetryObserver'; 
      },
      runInBackground() { 
        return false; 
      },
      onConnect(connection) {
        _connection.current = connection;
      },
      onDisconnect() {
        _connection.current = undefined;
      }
    })
  }, []);
  return _connection;
}

export default () => {
  const _connection = useFlipperClientConnection();

  const _dispatch = useCallback(telemetryEvent => {
    if (_connection.current) {
      const baseTelemetryPayload = getBaseTelemetryPayload(telemetryEvent);

      _connection.current.send('telemetryPayload', baseTelemetryPayload)
    }
  });

  return {dispatch: _dispatch};
}