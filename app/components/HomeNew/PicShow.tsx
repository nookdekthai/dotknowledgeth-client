import Image from 'next/image';
import React from 'react'
import { Fade } from "react-slideshow-image";

const zoomOutProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    // indicators: true,
    scale: 0.4,
    arrows: true
};


const images = [
    '/pic-online/Screenshot 2023-11-10 at 18.41.16.png',
    '/pic-online/Screenshot 2023-11-11 at 08.26.18.png',
    '/pic-online/Screenshot 2023-11-11 at 11.19.23.png',
    '/pic-online/Screenshot 2023-11-12 at 10.13.52.png',
    '/pic-online/Screenshot 2023-11-12 at 11.07.37.png',
]

const images2 = [
    '/pic-onsite/IMG_0462.jpg',
    '/pic-onsite/IMG_0762.jpg',
    '/pic-onsite/IMG_0859.jpg',
    '/pic-onsite/IMG_0903.jpg',
    '/pic-onsite/IMG_0914.jpg',
]


const PicShow = () => {
    return (
        <>
            <div className="w-full  ">
                <p className="text-black text-center font-bold text-[30px] dark:text-white md:text-[36px] font-Poppins mt-20 mb-10">บรรยากาศการเรียนออนไซต์</p>
                <div className="slide-container text-center">
                    <Fade {...zoomOutProperties} canSwipe={true} pauseOnHover={false}>
                        {images2.map((each, index) => (
                            <Image src={each} key={index} height={200} width={1500} alt="" />
                        ))}
                    </Fade>
                </div>
            </div>
            <div className="w-full  ">
                <p className="text-black text-center font-bold text-[30px] dark:text-white md:text-[36px] font-Poppins mt-20 mb-10">บรรยากาศการเรียนออนไลน์</p>

                <div className="slide-container text-center">
                    <Fade {...zoomOutProperties} canSwipe={true} pauseOnHover={false}>
                        {images.map((each, index) => (
                            <Image src={each} key={index} height={200} width={1500} alt="" />
                        ))}
                    </Fade>
                </div>
            </div>
            <div className="w-full mb-10">
                <p className="text-black text-center font-bold text-[30px] dark:text-white md:text-[36px] font-Poppins mt-20 mb-10">ติมตามเราได้ที่</p>

                <div className="flex gap-4 justify-center">
                    <div className="w-[363px] md:w-[500px] h-[10rem] md:h-[23rem] bg-red-100 relative">
                        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/follow/IMG_0961.png")' }} />
                        <div className="opacity-0 hover:opacity-100 duration-300 bg-[#0000009c] absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                            <a href={'https://www.tiktok.com/@dotknowledge.ayutthaya'}
                                target="_blank"
                                type="button" data-te-ripple-init data-te-ripple-color="light" className="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#6a76ac' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4">
                                    <path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                </svg>

                                &nbsp;Tik Tok
                            </a>
                        </div>
                    </div>
                    <div className="w-[363px] md:w-[500px] h-[10rem] md:h-[23rem] bg-red-100 relative">
                        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/follow/IMG_6908.png")' }} />
                        <div className="opacity-0 hover:opacity-100 bg-[#0000009c] duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                            <a
                                href={'https://web.facebook.com/dotknowledge'}
                                target="_blank"
                                type="button" data-te-ripple-init data-te-ripple-color="light" className="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" style={{ backgroundColor: '#1877f2' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                                facebook
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PicShow