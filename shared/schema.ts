import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(), // Lucide icon name
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  role: text("role").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });

export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;

export type TeamMember = typeof teamMembers.$inferSelect;
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
