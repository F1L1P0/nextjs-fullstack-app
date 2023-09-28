import Slider from './components/Slider'
import CardNav from './components/CardNav'
import About from './components/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ostraticky',
  description: 'já jsem popisek',
}
export default function Home() {
  return (
    <>
      <Slider />
      <CardNav />
      <About />
    </>
  )
}
