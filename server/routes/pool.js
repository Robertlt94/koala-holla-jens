const pg = require( 'pg' );

const pool = new pg.Pool({
	// select database
	database: 'koala_db',
	// host 
	host: 'localhost',
	// typical Postgres port is 5432
	port: 5432,
	// max number of connections
	max: 12,
	// times out after specified amount
	idleTimeoutMillis: 30000
});

module.exports = pool;