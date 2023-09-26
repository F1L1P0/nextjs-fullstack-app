import Image from "next/image";
import "@/app/globals.css"
import Link from "next/link";

function page() {
  const data = [
    {
      id:0,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/sliderImages/1.jpg",
    },
    {
      id:1,
      name: "Jane Smith",
      text: "Sed ac odio vitae urna faucibus commodo. Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus.",
      image: "/sliderImages/1.jpg",
    },
    {
      id:2,
      name: "Alice Johnson",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus.",
      image: "/sliderImages/1.jpg",
    },
    {
      id:3,
      name: "Bob Thompson",
      text: "Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus.Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus.",
      image: "/sliderImages/1.jpg",
    },
    {
      id:4,
      name: "Emily Davis",
      text: "Vestibulum nec diam vel metus bibendum laoreet et nec elit. Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus.",
      image: "/sliderImages/1.jpg",
    },
  ];


  return (
    <div className="container mx-auto my-8">
      <h1 className="text-center text-2xl font-bold">Name of category</h1>
      {data.map((item) => (
        <div key={item.id} className="a border-solid border-green-800 border-2 rounded-xl mb-6 flex">
          <div className="w-[15%] object-contain grid place-items-center">
          <Image src={item.image} alt={`Image ${item.id}`} width={50} height={30} />
          </div>
          <div className="w-[85%] flex flex-col gap-2">
          <p>{item.name}</p>
          <p>{item.text}</p>
          <div className="flex gap-2 w-full justify-between items-center">

          <Link className="file-btn w-1/3" href="#">adhbiaw</Link>
          <Link className="file-btn w-1/3" href="#">sergsgseg</Link>
          <Link className="green-btn w-1/3" href="#">contats is</Link>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page
