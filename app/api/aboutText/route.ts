import clientPromise from '@/app/lib/mongodb'
import { ObjectId } from 'mongodb'
import { NextResponse, NextRequest } from 'next/server'

export async function GET() {
  const client = await clientPromise
  const collection = client.db('ostraticky').collection('titlePage')
  try {
    const aboutText = await collection.find({}).toArray()
    return NextResponse.json(aboutText, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const client = await clientPromise
  const collection = client.db().collection('titlePage')
  const { text } = await req.json()

  try {
    const aboutText: any = { text: text }
    await collection.insertOne(aboutText)
    return new NextResponse(aboutText, { status: 201 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  const { id, text }: any = await req.json()
  const client = await clientPromise
  const collection = client.db().collection('titlePage')
  try {
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: { text } })
    return NextResponse.json(
      { message: 'Text sucesfully updated' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}

export default async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  const client = await clientPromise
  const collection = client.db().collection('titlePage')
  try {
    await collection.deleteOne({ _id: new ObjectId(id) })
    return NextResponse.json({ message: 'successfully deleted' })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
