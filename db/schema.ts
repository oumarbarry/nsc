import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"

export const Movie = sqliteTable("Movie", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  director: text("director").notNull(),
  year: integer("year").notNull(),
  createdAt: integer("createdAt").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
})
