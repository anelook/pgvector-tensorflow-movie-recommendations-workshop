// Step 2. Access Postgres database

require('dotenv').config();
const pg = require('pg');
const moviePlots = require("./movie-plots.json");

const config = {
    user: process.env.PG_NAME,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('./ca.pem').toString(),
    },
};

const client = new pg.Client(config);
await client.connect();
try {
    const pgResponse = await client.query(`SELECT count(*) FROM movie_plots`);
    console.log(pgResponse.rows);
} catch (err) {
    console.error(err);
} finally {
    await client.end();
}
