import { varchar, index, integer, timestamp } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { users } from "./users";

export const balances = createTable("balance", {
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id).primaryKey(),
  value: integer("value").notNull().default(0),
  updatedAt: timestamp('updated_at').defaultNow(),
},
  (balance) => ({
    userIdIdx: index("balance_user_id_idx").on(balance.userId),
  })
);


