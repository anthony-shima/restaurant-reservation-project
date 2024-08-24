/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgresql://dev_pk3a_user:8Swe8DDB9GRwCc6qdg4jVIqX3ujA1T53@dpg-cr4h58tsvqrc73b0hfi0-a.oregon-postgres.render.com/dev_pk3a?ssl=true",
  DATABASE_URL_DEVELOPMENT = "postgresql://dev_pk3a_user:8Swe8DDB9GRwCc6qdg4jVIqX3ujA1T53@dpg-cr4h58tsvqrc73b0hfi0-a.oregon-postgres.render.com/dev_pk3a?ssl=true",
  DATABASE_URL_TEST = "postgresql://dev_pk3a_user:8Swe8DDB9GRwCc6qdg4jVIqX3ujA1T53@dpg-cr4h58tsvqrc73b0hfi0-a.oregon-postgres.render.com/dev_pk3a?ssl=true",
  DATABASE_URL_PREVIEW = "postgresql://dev_pk3a_user:8Swe8DDB9GRwCc6qdg4jVIqX3ujA1T53@dpg-cr4h58tsvqrc73b0hfi0-a.oregon-postgres.render.com/dev_pk3a?ssl=true",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"), // Updated path
    },
    seeds: {
      directory: path.join(__dirname, "back-end", "src", "db", "seeds"), // Updated path if needed
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"), // Updated path
    },
    seeds: {
      directory: path.join(__dirname, "back-end", "src", "db", "seeds"), // Updated path if needed
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"), // Updated path
    },
    seeds: {
      directory: path.join(__dirname, "back-end", "src", "db", "seeds"), // Updated path if needed
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "back-end", "src", "db", "migrations"), // Updated path
    },
    seeds: {
      directory: path.join(__dirname, "back-end", "src", "db", "seeds"), // Updated path if needed
    },
    debug: !!DEBUG,
  },
};
