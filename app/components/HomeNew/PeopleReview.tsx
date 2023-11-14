import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

const reviews = [
    {
        name: "สวิกา กาญจนสำราญวงศ์",
        // avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Students",
        comment:
            " คุณครูสอนดีและเข้าใจง่ายค่ะ น้องเรียนกับครูจากอ่านไม่ออก ตอนนี้น้องสะกดแบบ phonics เป็นแล้วค่ะ กล้าอ่านภาษาอังกฤษ มากขึ้น รู้เรื่องไวยากรณ์ และคำศัพท์มากขึ้น แม่ไม่ต้องเหนื่อยมาติวให้น้องอีก ต้องขอบคุณครูโบว์ด้วยค่ะที่ทำให้น้องได้เกรด 4 มาแปะสมุดพก ^  "
    },
    {
        name: "vasinee pohom",
        // avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        profession: "Students",
        comment:
            "ครูโบใจดีมาก ลูกชายขอเรียนกับครูโบตั้งแต่ป.1 จนตอนนี้ป.6 ไม่เคยขอเปลี่ยนครู จากเริ่มเรียนไม่มีพื้นฐานภาษาอังกฤษเลย จนตอนนี้ แนะนำน้าเรื่องverb เพื่อเตรียมสอบก.พ. ได้ค่ะ"
    },
    {
        name: "Chamai Decha",
        // avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        profession: "Students ",
        comment:
            "คอปเตอร์เรียนกับครูมา 1 ปี ครูโบว์สอนดีมาก ใจดี น่ารัก ช่วยกระตุ้นเด็กให้กล้าตอบ เรียนถาษาอังกฤษที่เป็นไวยากรณ์แบบสนุก ….คณิตศาตร์กับครูพี่บิ๊ก ก็สนุกมาก จากเด็ก ป1 ที่วิเคราะห์โจทย์ปัญหา หาตัวไม่ทราบค่า ไม่ได้ จนตอนนี้สบายมาก ทำคะแนนในห้องเรียน ได้ดีมาก ตลอดการสอบทุกๆครั้ง …เรียนออนไลน์ก็้เก่งได้…"
    },
    {
        name: "Wuttichai Kongtavorn",
        // avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        profession: "Students",
        comment:
            "ครูโบว์สอนเข้าใจง่าย สอนสนุก ไม่เครียดเด็กๆชอบเรียนมาก มีเทคนิคทำ เด็กๆสามารถจดจำ และ สามารถสะกดคำภาษาอังกฤษ ได้ถูกต้องและมั่นใจ ทำให้น้องใบบุญสนใจการเรียนภาษาอังกฤษมากขึ้นเยอะเลย ถึงแม้จะเป็นการเรียนออนไลน์ ก็สามารถทำให้น้องใบบุญสนใจได้ขนาดนี้ต้องขอบคุณครูโบมากครับ",
    },
    {
        name: "Supichaya Sainanta",
        // avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        profession: "Stundents",
        comment:
            "คุณครูเป็นกันเองมาก สอนเข้าใจง่าย ดูแลเอาใจใส่นักเรียนทุกคนเลยค่ะ ก่อนเรียนอ่านไม่ออก พูดไม่ได้ ไม่เข้าใจวิธีการพูด แต่หลังจากเรียนกับครูโบว์ตอนนี้ อ่านออก เข้าใจวิธีการพูดค่ะ ขอบคุณมากนะค่ะ",
    },
    {
        name: "อภิญญา ยุทธเก่ง ",
        // avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        profession: "Students",
        comment:
            "ครูโบว์น่ารักมากๆค่ะ สอนสนุกมีความเอาใจใส่เด็กๆ คลาสโฟนิกส์จากที่น้องๆอ่านไม่ค่อยได้ ตอนนี้จะจบคลาสแล้วน้องเริ่มอ่านเก่งขึ้นเยอะ มีความมั่นใจมีความกล้าออกเสียงภาษาอังกฤษมากกว่าแต่ก่อน",
    },
];


const settingPeopleSay = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // className: 'notes-slider',
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            },
        },
    ]
}



const PeopleReview = () => {
    return (
        <>
            <div className="w-full bg-[#6440FB] p-10 pb-20">
                <div className="w-full">
                    <p className="text-[#00FF84] text-center font-bold text-[30px] mt-10" data-aos="fade-down" >What People Say</p>
                    <p className="text-white text-center text-sm mb-16" data-aos="fade-down" ></p>
                </div>
                <div className="w-full flex gap-3 justify-center" data-aos="fade-down" >
                    <div className="max-w-[90%] m-auto">
                        <Slider {...settingPeopleSay}>
                            {
                                reviews.map(({ name, profession, comment }) => <PeopleReviewCard {...({ name, profession, comment })} />)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}


function PeopleReviewCard({ name, profession, comment }: any) {
    return (
        <div className="relative min-h-[380px] md:max-w-[376px] md:min-h-[330px] bg-[#fff] rounded-xl p-8 drop-shadow-md ">
            {/* <div className="text-[20px] font-bold text-[#6440FB] mb-8 ">Perfect Job</div> */}
            <div className="text-black font-Poppins">
                {comment}
            </div>
                <div className='absolute bottom-3 w-[70%]'>
                    <hr className="mt-5 w-[100%]" />
                    <div className="flex mt-3 items-center w-[100%]">
                        <div>
                            <Image
                                src={'/assests/avatar.png'}
                                width={60}
                                height={60}
                                alt=""
                                className="object-contain "
                            />
                        </div>
                        <div className="pl-7">
                            <div className="text-md font-semibold text-black">{name}</div>
                            <div className="text-xs text-black">{profession}</div>
                        </div>
                    </div>
                </div>


        </div>
    )
}


export default PeopleReview