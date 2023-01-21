import test from "ava"
import { Kysely, PostgresDialect } from "kysely"
import { KyselyDatabaseInstance } from "../src"
import { Pool } from "pg"

test("quick type test", async (t) => {
  const pool = new Pool({
    connectionString:
      "postgresql://readstuff:readstuff@github-db/postgres?sslmode=no-verify",
  })
  const db: KyselyDatabaseInstance = new Kysely({
    dialect: new PostgresDialect({ pool }),
  })

  const pr = await db
    .selectFrom("pull_requests")
    .selectAll()
    .executeTakeFirstOrThrow()

  t.truthy(pr.assignee)
})
