import { MongoClient, Db } from 'mongodb';
import { DatabaseAdapter } from './index';

export class MongoAdapter implements DatabaseAdapter {
  private client: MongoClient;
  private db: Db | null = null;
  private uri: string;
  private dbName: string;

  /**
   * Initializes a new instance of the MongoAdapter class.
   * 
   * @param uri - The connection URI for the MongoDB instance.
   * @param dbName - The name of the database to use.
   */
  constructor(uri: string, dbName: string) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = new MongoClient(this.uri, {});
  }
  
  /**
   * Connects to the MongoDB database. If the database connection is already
   * established, this call is a no-op.
   */
  async connect(): Promise<void> {
    if (!this.db) {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log(`Connected to MongoDB: ${this.dbName}`);
    }
  }

  /**
   * Disconnects from the MongoDB database. If the database connection is
   * already disconnected, this call is a no-op.
   */
  async disconnect(): Promise<void> {
    if (this.db) {
      await this.client.close();
      this.db = null;
      console.log('Disconnected from MongoDB');
    }
  }
  
  /**
   * Gets the MongoDB database client.
   *
   * Throws an error if the database client is not connected.
   *
   * @returns {Db | null} The MongoDB database client or null if not connected.
   */
  getDb(): Db | null {
    if (!this.db) {
      throw new Error('MongoDB is not connected');
    }
    return this.db;
  }
}
