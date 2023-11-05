
import Home from "./components/HomeNew/Home";
export const metadata = {

  title: 'Dot-Knowledgeth สถาบันสอนภาษาอังกฤษ',
  description: 'สอนภาษาอังกฤษวัยเด็ก วัยทำงาน ปูพื้นฐาน ติวสอบทุกสนาม TOEIC ราชการ กพ เข้ามหาวิทยาลัย มีทั้งคลาสสด และออนไลน์. ผู้สอนมีประสบการณ์. ปูพื้นฐานนักเรียนไม่มีพื้นฐานให้เก่งได้',
  keywords : 'English , คอร์สสอนภาษาอังกฤษ , คอร์สเรียนภาษาอังกฤษ ',
  
  openGraph: {
    title: 'Studying English: Online Course สอนภาษาอังกฤษ สำหรับทุกคน',
    description: 'สอนภาษาอังกฤษวัยเด็ก วัยทำงาน ปูพื้นฐาน ติวสอบทุกสนาม TOEIC ราชการ กพ เข้ามหาวิทยาลัย มีทั้งคลาสสด และออนไลน์. ผู้สอนมีประสบการณ์. ปูพื้นฐานนักเรียนไม่มีพื้นฐานให้เก่งได้',
    url: 'https://www.dotknowledgeth.com',
    siteName: 'dotknowledgeth',
    images: [
      {
        url: 'https://res.cloudinary.com/doqbge8fv/image/upload/v1699175466/t40jdignsubict1mxd9g.jpg',
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
    images: ['https://res.cloudinary.com/doqbge8fv/image/upload/v1699175466/t40jdignsubict1mxd9g.jpg'],
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
