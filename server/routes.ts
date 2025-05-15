import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const parsedData = insertContactMessageSchema.safeParse(req.body);
      
      if (!parsedData.success) {
        return res.status(400).json({ 
          message: "Invalid contact form data", 
          errors: parsedData.error.errors 
        });
      }
      
      // Add timestamp to the message
      const contactMessage = {
        ...parsedData.data,
        createdAt: new Date().toISOString()
      };
      
      // Store the contact message
      const savedMessage = await storage.saveContactMessage(contactMessage);
      
      // Return success response
      return res.status(201).json({ 
        message: "Contact message received", 
        id: savedMessage.id 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
