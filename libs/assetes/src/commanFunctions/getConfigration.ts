import 'dotenv/config';

import { svcNameObjects } from './svcNames';

interface ServiceConfig {
  port: number;
  host: string;
  proto: string;
}

export function getServiceConfig(servicePrefix: string): ServiceConfig {
  const envPrefix = servicePrefix;

  if (!envPrefix) {
    console.error(`Service prefix "${servicePrefix}" not found.`);
    return {
      port: 0,
      host: '0.0.0.0',
      proto: '30000',
    };
  }
  const PROT = process.env[`${envPrefix}_PROT`];
  const HOST = process.env[`${envPrefix}_HOST`];
  const PROTO = process.env[`${envPrefix}_PROTO`];

  if (!PROT || !HOST || !PROTO) {
    console.error(`Missing environment variables for ${servicePrefix}.`);
    return {
      port: 0,
      host: '0.0.0.0',
      proto: '30000',
    };
  }

  return {
    port: Number(PROT),
    host: HOST,
    proto: PROTO,
  };
}

export function getAllSVC() {
  const allSVC = svcNameObjects.svcName;
  return allSVC;
}

export function getTYPEORM(servicePrefix: string) {
  const envPrefix = servicePrefix;

  const DBHOST = process.env[`${envPrefix}_DB_HOST`];
  const DBPORT = process.env[`${envPrefix}_DB_PORT`] ;
  const DBUSERNAME = process.env[`${envPrefix}_DB_USER`];
  const DBPASSWORD = process.env[`${envPrefix}_DB_PASSWORD`];
  const DBNAME = process.env[`${envPrefix}_DB_NAME`];

  return {
    DBHOST,
    DBPORT:DBPORT,
    DBUSERNAME,
    DBPASSWORD,
    DBNAME,
  };
}
