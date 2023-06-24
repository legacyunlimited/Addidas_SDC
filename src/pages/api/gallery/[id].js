// import express from "express";
// import dotenv from "dotenv";
import pg from "pg";
// import cors from "cors";
// import compression from "compression";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const client = pool;

export default async function handler(req, res) {
  try {
    let response = await client.query(
      `SELECT * FROM image WHERE product_id=$1
          AND element='you may also like'
          OR element='others also bought'
          OR element='recently viewed items'
          OR element = 'complete the look';`,
      [req.query.id]
    );

    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("something went wrong (carousel)");
  }
}
