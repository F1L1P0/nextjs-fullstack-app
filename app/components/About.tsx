'use client'
import { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/store'

export default function About() {
  const [isLoading, setIsLoading] = useState(true)
  const [aboutText, setAboutText] = useState([])
  const [newAboutText, setNewAboutText] = useState('')
  const { isAdmin } = useGlobalContext()

  const apiUrlEndpoint = 'http://localhost:3000/api/aboutText'

  const getAboutData = async () => {
    try {
      const response = await fetch(apiUrlEndpoint)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const res = await response.json()
      setAboutText(res)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const changeText = async () => {
    try {
      const response = await fetch(apiUrlEndpoint, {
        method: 'PUT',
        body: JSON.stringify({
          newAboutText: newAboutText,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        await getAboutData()
      } else {
        throw new Error('Failed to update data')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAboutData()
  }, [])

  return (
    <section className="container mx-auto px-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          {isLoading ? (
            <p>Loading...</p>
          ) : aboutText.length > 0 ? (
            aboutText.map((text) => (
              <div key={text._id}>
                <p>{text.aboutText}</p>
                {isAdmin && (
                  <div className="my-4 flex gap-2">
                    <textarea
                      cols={30}
                      rows={10}
                      value={newAboutText}
                      className="border-solid border-2 p-2"
                      placeholder="Zde napiš nový text"
                      onChange={(e) =>
                        setNewAboutText(e.target.value)
                      }></textarea>
                    <button
                      className="rounded-xl bg-slate-600 p-2.5 text-lg"
                      onClick={changeText}>
                      Změnit
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>
    </section>
  )
}
