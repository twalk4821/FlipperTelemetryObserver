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

const columns: DataTableColumn<BaseTelemetryPayload>[] = [
  {
    key: 'appName'
  },
  {
    key: 'appVersion'
  },
  {
    key: 'mobilePlatformType'
  },
  {
    key: 'mobileOSVersion'
  },
  {
    key: 'mobileDeviceYearClass'
  },
  {
    key: 'mobileDeviceName'
  },
  {
    key: 'mobileDeviceManufacturer'
  },
  {
    key: 'mobileNetworkType'
  },
  {
    key: 'psnAccountId'
  },
  {
    key: 'psnAccountLanguage'
  },
  {
    key: 'psnAccountRegion'
  },
  {
    key: 'hashedPsnAccountId'
  },
  {
    key: 'signedIn'
  },
  {
    key: 'loggedIn'
  },
  {
    key: 'platformPrivacyWs1'
  },
  {
    key: 'ciiSampling'
  },
  {
    key: 'aaSampling'
  },
  {
    key: 'sbahnSampling'
  },
  {
    key: 'referrerApplicationName'
  },
  {
    key: 'referrerScene'
  },
  {
    key: 'referringInternalCampaignId'
  },
  {
    key: 'referringExternalCampaignId'
  },
  {
    key: 'timestamp'
  },
  {
    key: 'platformType'
  }
];

module.exports = createTablePlugin<BaseTelemetryPayload>({
  columns,
  method: 'telemetryPayload'
});
