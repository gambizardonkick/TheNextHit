// Storage interface for future backend implementation
// Currently not used as this is a client-side prediction tool

export interface IStorage {
  // Add storage methods here if needed
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize storage if needed
  }
}

export const storage = new MemStorage();
