import mysql from 'mysql2/promise'
import { NextRequest, NextResponse } from 'next/server'

async function dbConn() {
  'use server'
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

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data = await dbConn()
    return new Response(JSON.stringify(data))
  } catch (err) {
    console.log('ERROR APPEARED LOL')
    return new Response('An error occurred', { status: 500 })
  }
}
