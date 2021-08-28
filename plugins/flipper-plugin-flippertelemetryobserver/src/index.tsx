import React from 'react';
import {PluginClient, DataTableColumn, createTablePlugin, usePlugin, createState, useValue, Layout} from 'flipper-plugin';

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
  timestamp: string;
  type: string;
  platformType: string;
  mobileFeatureArea: string;
  locationScene: string;
}

type BaseTelemetryPayload = 
  AppInfo & 
  MobileInfo & 
  UserInfo & 
  ReferrerInfo & 
  SamplingInfo & 
  MiscellaneousInfo

const columns: DataTableColumn<BaseTelemetryPayload>[] = [
  {
    key: 'timestamp'
  },
  {
    key: 'type'
  },
  {
    key: 'locationScene'
  },
  {
    key: 'mobileFeatureArea'
  },
  {
    key: 'platformType',
    visible: false
  },
  {
    key: 'appName',
    visible: false
  },
  {
    key: 'appVersion',
    visible: false
  },
  {
    key: 'mobilePlatformType'
  },
  {
    key: 'mobileOSVersion',
    visible: false

  },
  {
    key: 'mobileDeviceYearClass',
    visible: false
  },
  {
    key: 'mobileDeviceName',
    visible: false
  },
  {
    key: 'mobileDeviceManufacturer',
    visible: false
  },
  {
    key: 'mobileNetworkType',
    visible: false
  },
  {
    key: 'psnAccountId',
    visible: false
  },
  {
    key: 'psnAccountLanguage',
    visible: false
  },
  {
    key: 'psnAccountRegion',
    visible: false
  },
  {
    key: 'hashedPsnAccountId',
    visible: false
  },
  {
    key: 'signedIn',
    visible: false
  },
  {
    key: 'loggedIn',
    visible: false
  },
  {
    key: 'platformPrivacyWs1',
    visible: false
  },
  {
    key: 'ciiSampling',
    visible: false
  },
  {
    key: 'aaSampling',
    visible: false
  },
  {
    key: 'sbahnSampling',
    visible: false
  },
  {
    key: 'referrerApplicationName',
    visible: false
  },
  {
    key: 'referrerScene',
    visible: false
  },
  {
    key: 'referringInternalCampaignId',
    visible: false
  },
  {
    key: 'referringExternalCampaignId',
    visible: false
  }
];

module.exports = createTablePlugin<BaseTelemetryPayload>({
  columns,
  method: 'telemetryPayload'
});
