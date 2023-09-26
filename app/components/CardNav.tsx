import Link from 'next/link'
import Image from 'next/image'
import placeholderImg from '@/public/sliderImages/1.jpg'
import './cardNav.css'

export default function CardNav() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-12 max-w-[768px] mx-auto place-items-center">
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300 min-w-[230px] aspect-square">
          <Link
            href="#"
            className="w-full h-full flex justify-center items-center flex-col">
            <Image
              className="object-cover w-[100px] h-[100px]"
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300 min-w-[230px] aspect-square">
          <Link
            href="#"
            className="w-full h-full flex justify-center items-center flex-col">
            <Image
              className="object-cover w-[100px] h-[100px]"
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300 min-w-[230px] aspect-square">
          <Link
            href="#"
            className="w-full h-full flex justify-center items-center flex-col">
            <Image
              className="object-cover w-[100px] h-[100px]"
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300 min-w-[230px] aspect-square">
          <Link
            href="#"
            className="w-full h-full flex justify-center items-center flex-col">
            <Image
              className="object-cover w-[100px] h-[100px]"
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300 min-w-[230px] aspect-square">
          <Link
            href="#"
            className="w-full h-full flex justify-center items-center flex-col">
            <Image
              className="object-cover w-[100px] h-[100px]"
              src={placeholderImg}
              alt="product image"
              width={200}
              height={200}
            />
            <p>Name</p>
          </Link>
        </div>
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-105 ease-in-out transition-all duration-300 min-w-[230px] aspect-square">
          <Link
            href="#"
            className="w-full h-full flex justify-center items-center flex-col">
            <Image
              className="object-cover w-[100px] h-[100px]"
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
