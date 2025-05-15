import { 
  users, 
  type User, 
  type InsertUser, 
  type ContactMessage, 
  type InsertContactMessage 
} from "@shared/schema";

// Interface for storage methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactMessage(message: InsertContactMessage & { createdAt: string }): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private userCurrentId: number;
  private messageCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactMessage(insertMessage: InsertContactMessage & { createdAt: string }): Promise<ContactMessage> {
    const id = this.messageCurrentId++;
    const message: ContactMessage = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    console.log("Contact message saved:", message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
