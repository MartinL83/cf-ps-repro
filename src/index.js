import postgres from 'postgres';

const sql = postgres('postgresql://u:p@host:port/database?sslmode=require');

export default {
  async fetch(request, env, ctx) {
    const result = await sql`
      SELECT *
      FROM table_name
      WHERE thing = 'stuff'
      LIMIT 1;
    `;

    const response = Response.json({
      result,
    });

    return response;
  },
};
