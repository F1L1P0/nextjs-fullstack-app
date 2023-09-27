import mysql from 'mysql2/promise'
import { NextRequest, NextResponse } from 'next/server'

async function dbConn() {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  })

  const query = 'SELECT about FROM frontPage'
  const values: [] = []
  const [data] = await dbconnection.execute(query, values)
  dbconnection.end()

  return data
}

dbConn()

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    return new Response(JSON.stringify(await dbConn()))
  } catch (err) {
    console.log('ERROR APPEARED LOL')
  }
}
