import {commonServerMetaData, Environment} from './environment.common';

export const environment: Environment = {
  production: true,
  serverMetaData: {
    protocol: 'http',
    hostName: 'localhost',
    portNumber: '8080',
    ...commonServerMetaData
  }
};