
import Home from "./components/HomeNew/Home";
export const metadata = {
  title: 'Studying English: Online Course สอนภาษาอังกฤษ สำหรับทุกคน',
  description: 'สอนภาษาอังกฤษวัยเด็ก วัยทำงาน ปูพื้นฐาน ติวสอบทุกสนาม TOEIC ราชการ กพ เข้ามหาวิทยาลัย มีทั้งคลาสสด และออนไลน์. ผู้สอนมีประสบการณ์. ปูพื้นฐานนักเรียนไม่มีพื้นฐานให้เก่งได้ ',
  openGraph: {
    title: 'Studying English: Online Course สอนภาษาอังกฤษ สำหรับทุกคน',
    description: 'สอนภาษาอังกฤษวัยเด็ก วัยทำงาน ปูพื้นฐาน ติวสอบทุกสนาม TOEIC ราชการ กพ เข้ามหาวิทยาลัย มีทั้งคลาสสด และออนไลน์. ผู้สอนมีประสบการณ์. ปูพื้นฐานนักเรียนไม่มีพื้นฐานให้เก่งได้',
    url: 'https://dotknowledgeth.vercel.app',
    siteName: 'dotknowledgeth',
    images: [
      {
        url: 'https://dotknowledgeth.com/wp-content/uploads/2020/06/97496214_261523775036041_1655514634804789248_n.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'th-TH',
    type: 'website',
  },
  twitter: {
    card: 'Studying English: Online Course สอนภาษาอังกฤษ สำหรับทุกคน',
    title: 'สอนภาษาอังกฤษวัยเด็ก วัยทำงาน ปูพื้นฐาน ติวสอบทุกสนาม TOEIC ราชการ กพ เข้ามหาวิทยาลัย มีทั้งคลาสสด และออนไลน์. ผู้สอนมีประสบการณ์. ปูพื้นฐานนักเรียนไม่มีพื้นฐานให้เก่งได้',
    description: 'สอนภาษาอังกฤษวัยเด็ก วัยทำงาน ปูพื้นฐาน ติวสอบทุกสนาม TOEIC ราชการ กพ เข้ามหาวิทยาลัย มีทั้งคลาสสด และออนไลน์. ผู้สอนมีประสบการณ์. ปูพื้นฐานนักเรียนไม่มีพื้นฐานให้เก่งได้ ',
    images: ['https://dotknowledgeth.com/wp-content/uploads/2020/06/97496214_261523775036041_1655514634804789248_n.jpg'],
  },
}


export const revalidate = 180

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log('porcess env =>',process.env.NEXT_PUBLIC_SERVER_URI);
  
  const pmBanner = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`, {})
  const pmCategory = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`, {})
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory])
  const banner = await resBanner.json()
  const category = await resCategory.json()
  


  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || []
  }

  return (
    <Home webInfo={webInfo} />
  );
};

export default Page;
