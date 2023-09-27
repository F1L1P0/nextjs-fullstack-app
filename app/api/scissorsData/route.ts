import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const data = [
    {
      id: 0,
      name: 'John Doe',
      text: 'text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit. esbf beshfb brsiebf text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit.text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/sliderImages/1.jpg',
    },
    {
      id: 1,
      name: 'Jane Smith',
      text: 'text  random  ffneasufbbaefa :Sed ac odio vitae urna faucibus commodo. Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus. text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit. text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/sliderImages/1.jpg',
    },
    {
      id: 2,
      name: 'Alice Johnson',
      text: 'text  random  ffneasufbbaefa :Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus. text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit.text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/sliderImages/1.jpg',
    },
    {
      id: 3,
      name: 'Bob Thompson',
      text: 'text  random  ffneasufbbaefa :Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus.Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus. text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit. text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit. text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/sliderImages/1.jpg',
    },
    {
      id: 4,
      name: 'Emily Davis',
      text: 'text  random  ffneasufbbaefa :Vestibulum nec diam vel metus bibendum laoreet et nec elit. Fusce in ipsum condimentum, dignissim tellus vel, ultrices purus. ufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit. text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit. text  random  ffneasufbbaefa :Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/sliderImages/1.jpg',
    },
  ]

  try {
    return new Response(JSON.stringify(data))
  } catch (err) {
    console.log('ERROR APPEARED LOL')
  }
}
