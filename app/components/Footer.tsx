import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border border-[#0000000e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Our Story
                </Link>
              </li>
             
              <li>
                <Link
                  href="/faq"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Courses
                </Link>
              </li>
            
           
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Social Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.youtube.com/@dotknowledgework3344"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/dotknowledge"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Instagram
                </Link>
              </li>
           
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] text-black dark:text-white pb-3">Contact Info</h3>
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
            Tel. : 084-660-1580
            </p>
           
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
            Email : dotknowledgework@gmail.com
            </p>
         
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white  pb-2">
            Line Id : 
            </p>
            <div className='bg-white max-w-[160px] p-2'>
              <Image
                src={'/lineQr.png'}
                height={200}
                width={200}
                alt=''
              />
            </div>
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white">
          Copyright © 2023 dotknowledge | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  )
}

export default Footer