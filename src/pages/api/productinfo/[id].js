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
        SELECT review.*, image.image_url, product.rating, product.details,
        product.description, product.description_title, product.description_image
        FROM review
        JOIN image ON image.product_id=$1 AND element='description'
        JOIN product ON product.id=$1
        WHERE review.product_id=$1;`,
      [req.query.id]
    );
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("something went wrong (reviews)");
  }
}
