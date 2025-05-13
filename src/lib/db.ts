import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { DATABASE_URL } from '$env/static/private';
import type { DB } from './kysely-types';

export const pool = new Pool({
	connectionString: DATABASE_URL
});

export const db = new Kysely<DB>({
	dialect: new PostgresDialect({
		pool
	})
});
