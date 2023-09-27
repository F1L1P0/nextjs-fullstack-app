'use client'

import { useEffect, useState } from 'react'

export default function About() {
  const [dataResponse, setDataResponse] = useState([])
  const [newText, setNewText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [aboutText, setAboutText] = useState()

  useEffect(() => {
    async function getAboutData() {
      const apiUrlEndpoint = `http://localhost:3000/api/aboutText`
      const response = await fetch(apiUrlEndpoint)
      const res = await response.json()
      setDataResponse(res.aboutText)
      setIsLoading(false)
    }
    getAboutData()
  }, [])

  const addText = async () => {
    if (!newText) return
    const response = await fetch('http://localhost:3000/api/aboutText', {
      method: 'POST',
      body: JSON.stringify({ text: 'testovací text' }),
      headers: { 'Content-Type:': 'application.json' },
    })
    const data = await response
    console.log('my data are', response)
    setNewText(...aboutText, data)
  }
  return (
    <section className="container mx-auto px-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          {isLoading ? <p>Loading...</p> : <p>{dataResponse}</p>}
          <button
            className="p-2 bg-slate-600 rounded-2xl"
            onClick={() => addText}>
            ADD
          </button>
        </div>
      </div>
    </section>
  )
}
