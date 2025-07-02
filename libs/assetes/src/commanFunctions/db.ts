import { Pool } from 'pg';
import * as fs from 'fs';
import 'dotenv/config';
import { svcNameObjects } from './svcNames';
import * as path from 'path';

// Function to get the database name dynamically based on the service
const getDatabaseName = (serviceName: string): string | null => {
  const svcKey =
    svcNameObjects.svcName[serviceName as keyof typeof svcNameObjects.svcName];
  if (!svcKey) return null;

  return process.env[`${svcKey}_DB_NAME`] || null;
};

// Function to dynamically load entity files
const loadEntities = (serviceName: string): Function[] => {
  const entitiesDir = `${process.env.ENTITY_PATH}\\${svcNameObjects.svcName[serviceName]}`;
  const entities: Function[] = [];

  if (fs.existsSync(entitiesDir)) {
    const files = fs
      .readdirSync(entitiesDir)
      .filter((file) => file.endsWith('.ts') || file.endsWith('.js'));

    // (0, common_1.Inject)(common_2.CommonService)(target, 'commonService');


    files.forEach((file) => {
      const entityPath = `${entitiesDir}\\${file}`;
    });
  } else {
    console.warn(
      `⚠️ No entity directory found for ${serviceName}: ${entitiesDir}`,
    );
  }

  return entities;
};

// Singleton connection manager
class Database {
  private static instances: Record<string, Pool> = {};

  static getPool(serviceName: string): Pool | null {
    if (!this.instances[serviceName]) {
      const dbName = getDatabaseName(serviceName);
      if (!dbName) {
        console.error(`Database name not found for service: ${serviceName}`);
        return null;
      }

      const entities = loadEntities(serviceName);

      this.instances[serviceName] = new Pool({
        user: process.env[`${serviceName}_DB_USER`],
        password: process.env[`${serviceName}_DB_PASSWORD`],
        host: process.env[`${serviceName}_DB_HOST`],
        port: process.env[`${serviceName}_DB_PORT`],
        database: dbName,
        entities: entities,
      });

      console.log(`✅ Connected to ${serviceName} database`);
    }

    return this.instances[serviceName];
  }
}

export default Database;
