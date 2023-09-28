'use client'
import Image from 'next/image'
import '@/app/globals.css'
import Link from 'next/link'
import ServerUploadPage from './components/addFile'
import { useEffect, useState } from 'react'

export default function Page() {
  const [scissorsData, setScissorsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const apiUrlEndpoint = 'http://localhost:3000/api/categories/scissors'

  const getPageData = async () => {
    try {
      const response = await fetch(apiUrlEndpoint)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const res = await response.json()
      setScissorsData(res)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPageData()
  }, [])

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-center text-2xl font-bold">Name of category</h1>
      {scissorsData.map((item) => (
        <div
          key={item.id}
          className="a border-solid border-green-800 border-2 rounded-xl mb-6 flex">
          <div className="w-[15%] object-contain grid place-items-center">
            <Image
              src={item.image}
              alt={`Image ${item.id}`}
              width={50}
              height={30}
            />
          </div>
          <div className="w-[85%] flex flex-col gap-2">
            <p>{item.name}</p>
            <p>{item.text}</p>
            <div className="flex gap-2 w-full justify-between items-center">
              <Link className="file-btn w-1/3" href={`/scissors/${item.id}`}>
                About product
              </Link>
              <Link className="file-btn w-1/3" href="/pdf.pdf">
                Brožura
              </Link>
              <Link className="green-btn w-1/3" href="#">
                contact us
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/* <ServerUploadPage /> */}
    </div>
  )
}
