import Link from 'next/link'
import Image from 'next/image'
import placeholderImg from '@/public/sliderImages/1.jpg'
import './cardNav.css'

export default function CardNav() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="flex col-span-4 m-4 card-shadow text-center justify-center aspect-square items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300">
          <Link
            href="#"
            className="w-full flex justify-center items-center flex-col">
            <Image
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-4 m-4 card-shadow text-center justify-center aspect-square items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300">
          <Link
            href="#"
            className="w-full flex justify-center items-center flex-col">
            <Image
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-4 m-4 card-shadow text-center justify-center aspect-square items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300">
          <Link
            href="#"
            className="w-full flex justify-center items-center flex-col">
            <Image
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-4 m-4 card-shadow text-center justify-center aspect-square items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300">
          <Link
            href="#"
            className="w-full flex justify-center items-center flex-col">
            <Image
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-4 m-4 card-shadow text-center justify-center aspect-square items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300">
          <Link
            href="#"
            className="w-full flex justify-center items-center flex-col">
            <Image
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-4 m-4 card-shadow text-center justify-center aspect-square items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300">
          <Link
            href="#"
            className="w-full flex justify-center items-center flex-col">
            <Image
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
