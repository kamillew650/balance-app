import { relations, sql } from "drizzle-orm";
import { varchar, timestamp, text, pgEnum } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { accounts } from "./accounts";
import { createId } from "@paralleldrive/cuid2";
import { balances } from "./balances";

export const userRoleEnum = pgEnum('user_role', ['user', 'orderer', 'admin']);

export const users = createTable("user", {
  id: text('id').notNull().primaryKey().$defaultFn(() => createId()),
  createdAt: timestamp("created_at", {
    mode: "date",
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: timestamp("email_verified", {
    mode: "date",
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar("image", { length: 255 }),
  role: userRoleEnum('role').default('user'),
});

export const usersRelations = relations(users, ({ many, one }) => ({
  accounts: many(accounts),
  balance: one(balances),
}));
