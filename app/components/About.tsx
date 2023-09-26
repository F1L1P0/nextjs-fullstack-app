'use client'

import { useEffect, useState } from 'react'

export default function About() {
  const [dataResponse, setDataResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getAboutData() {
      const apiUrlEndpoint = `http://localhost:3000/api/aboutText`
      const response = await fetch(apiUrlEndpoint)
      const res = await response.json()
      setDataResponse(res[0].about)
      setIsLoading(false)
    }
    getAboutData()
  }, [])

  return (
    <section className="container mx-auto px-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          {isLoading ? <p>Loading...</p> : <p>{dataResponse}</p>}
        </div>
      </div>
    </section>
  )
}
