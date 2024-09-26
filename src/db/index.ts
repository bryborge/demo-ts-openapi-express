export interface DatabaseAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  getDb(): any;
}
