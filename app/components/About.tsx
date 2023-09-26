'use client'

import { Suspense, useEffect, useState } from 'react'
export default function About() {
  const [dataResponse, setDataResponse] = useState([])
  useEffect(() => {
    async function getAboutData() {
      const apiUrlEndpoint = `http://localhost:3000/api/aboutText`
      const response = await fetch(apiUrlEndpoint)
      const res = await response.json()
      setDataResponse(res[0].about)
    }
    getAboutData()
  }, [])

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Suspense fallback={<p>Loading...</p>}>
            <p>{dataResponse}</p>
          </Suspense>
        </div>
      </div>
    </section>
  )
}
