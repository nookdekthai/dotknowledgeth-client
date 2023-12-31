"use client"
import Image from 'next/image'
import React from 'react'

const item = [
    {
        title: ' 01. Learn',
        icon: '/online-learning.png',
        message: 'การเรียนการสอนมีทั้งเเบบ Online เเละ Offline รวมทั้งยังมีคลาสสอน Zoom เเละคลาสวีดีโอ',
    },
    {
        title: '02. Expert',
        icon: '/online-course.png',
        message: 'เรามีผู้เชี่ยวชาญที่มีความชำนาญเเยกรายวิชา',
    },
    {
        title: '03. Work',
        icon: '/computer.png',
        message: 'ปูพื้นฐานพร้อมฝึกตะลุยโจทย์ไปพร้อมกัน',
    },
]

const WhyLearnCourse = () => {
    return (
        <>
            <div className="w-full bg-[#1A064F] p-10 pb-20 ">
                <div className="w-full" data-aos="fade-down" data-aos-delay="500">
                    <p className="text-white text-center font-bold text-[30px] mt-10">Why learn with our courses?</p>
                    <p className="text-white text-center text-sm mb-16">เรียนกับเราดียังไง</p>
                </div>
                <div className='flex flex-col md:flex-row gap-8 justify-center items-center text-black' data-aos="fade-down" data-aos-delay="1000" >
                    {
                        item.map(ele => <div key={ele.title} className="max-w-[376px] backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] shadow-sm dark:shadow-inner h-[330px] bg-[#1A064F] rounded-xl text-white p-10 hover:bg-white hover:text-black">
                            <div className="flex mt-3 items-center justify-center flex-col gap-4">
                                <div>
                                    <Image
                                        src={ele.icon}
                                        width={100}
                                        height={100}
                                        alt=""
                                        className="object-contain "
                                    />
                                </div>
                                <p className='font-bold text-2xl'>
                                    {ele.title}
                                </p>
                                <p className='text-center'>
                                    {ele.message}
                                </p>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </>
    )
}

export default WhyLearnCourse