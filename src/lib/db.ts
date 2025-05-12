import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { PGPORT, PGPASSWORD, PGUSER, PGDATABASE } from '$env/static/private';

export const pool = new Pool({
	host: 'localhost',
	port: Number(PGPORT),
	user: PGUSER,
	password: PGPASSWORD,
	database: PGDATABASE
});

export const db = new Kysely({
	dialect: new PostgresDialect({
		pool
	})
});
