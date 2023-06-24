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
      `
        SELECT 
        product.rating, product.price, product.discounted_price,
        size.size, size.stock
        FROM product
        JOIN size ON size.product_id=$1
        WHERE product.id=$1`,
      [req.query.id]
    );
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("something went wrong (sidebar)");
  }
}
