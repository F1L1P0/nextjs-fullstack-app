import getScissorsData from '@/app/lib/getScissorsData'
import Image from 'next/image'

export default async function page({
  params,
}: {
  params: { product: number }
}) {
  const data = await getScissorsData(params.product)
  if (!data?.id && data.id !== 0) return <p>Product not found</p>

  return (
    <>
      <div className="flex justify-center flex-col items-center ">
        <div className="bg-cyan-200 w-full text-center min-h-[200px]">
          <h1 className="font-bold text-xl underline">Podobné zboží</h1>
          <div className="flex justify-center gap-4">
            <Image src="/sliderImages/1.jpg" height={100} width={100} alt="" />
            <Image src="/sliderImages/1.jpg" height={100} width={100} alt="" />
          </div>
        </div>
        <div className="w-full bg-lime-400 text-center min-h-[200px]">
          <h1 className="font-bold text-xl underline">Číslo zboží {data.id}</h1>
        </div>
        <div className="bg-yellow-200 w-full text-center min-h-[200px]">
          <p>Název:{data.name}</p>
        </div>
        <div className="bg-red-200 w-full text-center min-h-[200px]">
          <p>{data.text}</p>
        </div>
      </div>
    </>
  )
}
