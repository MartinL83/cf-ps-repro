import { Hono } from 'hono';
import { Client } from 'pg'

const app = new Hono();

app.get('/', async (c) => {
  const client = new Client("postgresql://<user>:<password>@<host>:<port>/<db>?sslmode=require")
  await client.connect()

  return c.json({ response: 'result' })

})

export default app;
