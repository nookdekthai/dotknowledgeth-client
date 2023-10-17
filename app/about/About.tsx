import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Dot-Knowledgth</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Dot knowledge สถาบันสอนพิเศษที่ต้องการให้นักเรียนทุกคน
          สามารถเชื่อมโยงความรู้และนำไปใช้งานได้จริง
          <br />
          <br />
          วางแผนการเรียน แบบเรียน และแบบฝึกหัด เป็นขั้นตอน
          เพื่อให้นักเรียนสามารถทำตาม และทำซ้ำได้ด้วยตัวเอง
          ทุกวิชาสอนโดยอาจารย์ที่มีความเชี่ยวชาญในแต่ละวิชา - คณิต อังกฤษ ไทย วิทย์
          เรียนรู้ด้วยกันได้ฟรีๆ ในช่อง Tiktok ที่มีผู้ติดตามเกือบ 2 แสนคน

          <br />
          <br />
          <br />
          นักเรียนสามารถเดินทางมาเรียนได้ที่สถาบัน 
          เรียนผ่านโปแกรม ZOOM ออนไลน์จากบ้าน หรือเรียนผ่านวีดีโอคลิปในเว็บไซต์
          <br />
          <br />
          หากนักเรียนต้องการเรียนรู้ด้วยกันอย่างละเอียด สามารถทักสอบถามเพิ่มเติมได้ทาง
          <br /><br />



        
          <br />

        </p>
        <br />
        <span className="text-[22px]">Dot-Knowledgth&apos;s</span>
        <br />
        <br />
        <h5 className="text-[18px] font-Poppins">
          Line Id : 
          <br />
          <br />
          เบอร์โทรติดต่อ : 


        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
