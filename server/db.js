const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "@Emmy1992..kom",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
