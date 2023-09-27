import Link from 'next/link'
import Image from 'next/image'
import placeholderImg from '@/public/sliderImages/1.jpg'
import './cardNav.css'

export default function CardNav() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-12 max-w-[500px] md:max-w-[992px] lg:max-w-[1200px] mx-auto place-items-center sm:gap-6">
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-[1.02] ease-in-out transition-all duration-300 min-w-[225px] lg:min-w-[250px] xl:min-w-[330px] aspect-square">
          <Link
            href="/scissors"
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
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-[1.02] ease-in-out transition-all duration-300 min-w-[225px] lg:min-w-[250px] xl:min-w-[350px] aspect-square">
          <Link
            href="/scissors"
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
        <div className="flex col-span-12 sm:col-span-6 md:col-span-4 m-4 card-shadow text-center justify-center items-center rounded-3xl hover:scale-[1.02] ease-in-out transition-all duration-300 min-w-[225px] lg:min-w-[250px] xl:min-w-[350px] aspect-square">
          <Link
            href="/scissors"
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
