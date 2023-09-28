'use client'

import { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/store'

export default function About() {
  const [isLoading, setIsLoading] = useState(true)
  const [aboutText, setAboutText] = useState([])
  const [newAboutText, setNewAboutText] = useState('')
  const { isAdmin } = useGlobalContext()

  async function getAboutData() {
    const apiUrlEndpoint = `http://localhost:3000/api/aboutText`
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json()
    setAboutText(res)
    setIsLoading(false)
  }
  useEffect(() => {
    getAboutData()
  }, [])

  const changeText = async () => {
    const response = await fetch('http://localhost:3000/api/aboutText', {
      method: 'PUT',
      body: JSON.stringify({
        newAboutText: newAboutText,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 200) {
      // After successfully updating the text, fetch the updated data
      await getAboutData() // Assuming you have a function to fetch the data
    }
  }

  return (
    <section className="container mx-auto px-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            aboutText.map((text) => (
              <div key={text._id}>
                <p>
                  {text.aboutText}
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
                        onClick={() => changeText()}>
                        Změnit
                      </button>
                    </div>
                  )}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
