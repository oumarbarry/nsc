import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"
import * as schema from "./schema"

const client = createClient({ url: "file:./data.db" })

export const db = drizzle(client, { schema })
