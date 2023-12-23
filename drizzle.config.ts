import type { Config } from "drizzle-kit"

export default {
  schema: "./db/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: "file:./data.db",
  },
  verbose: true,
  strict: true,
} satisfies Config
