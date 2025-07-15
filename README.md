# AI Use Case Generator

เว็บแอปพลิเคชันสำหรับช่วยสร้าง **Use Case Description** อัตโนมัติจากคำสั่ง (Prompt) ของผู้ใช้  
ออกแบบมาเพื่อช่วยนักพัฒนาซอฟต์แวร์และนักศึกษาให้สร้างเอกสาร Use Case ได้อย่างรวดเร็วและง่ายดาย

---

## ฟีเจอร์หลัก

- สร้าง Use Case Description อัตโนมัติจากคำสั่งผู้ใช้  
- รองรับการป้อนคำสั่งทั้งภาษาไทยและภาษาอังกฤษ  
- แสดงผลลัพธ์ด้วยการจัดรูปแบบ Markdown เพื่อให้อ่านง่าย  
- มีแผนการพัฒนาฟีเจอร์จัดการโปรเจกต์และเก็บประวัติ  
- ใช้งานร่วมกับ AI รุ่น Open Source อย่าง Groq หรือ Gemma2 ได้ง่าย

---

## เทคโนโลยีที่ใช้

- **Frontend:** HTML, CSS, Tailwind CSS, JavaScript (Fetch API)  
- **Backend:** Node.js กับ Express  
- **ฐานข้อมูล:** MySQL (วางแผนพัฒนาเพื่อเก็บข้อมูลโปรเจกต์และประวัติ)  
- **AI:** Groq API (หรือ AI Providers อื่นๆ เช่น OpenAI, Gemma2)

---

## ผู้ร่วมโปรเจ็ค

| Name | Position |
| ------------- |:-------------:|
| กรวิชญ์ อู่เงิน      | Project Owner / Developer     |
| ณัฏฐกิตติ์ กล่อมจิตต์      | Business Analysis / UX UI   |
| ชัยปรากานต์ ดวงแก้ว      | Business Analysis / Developer     |
| ชัยณรงค์ ศานตินนท์      | Business Analysis / UX UI     |

## วิธีใช้งาน

### สิ่งที่ต้องเตรียม

- Node.js (เวอร์ชัน 16 ขึ้นไปแนะนำ)  
- MySQL Server (ถ้าต้องการใช้ฐานข้อมูล)  
- API Key สำหรับใช้งาน Groq หรือ AI Provider ที่เลือก

### การติดตั้ง

1. โคลนโปรเจกต์:  
   ```bash
   git clone https://github.com/yourusername/AI-usecase-helper.git
   cd AI-usecase-helper
   ```
2. ติดตั้ง dependencies:
   ```bash
   npm install
   ```
3. สร้างไฟล์ .env ในโฟลเดอร์หลัก และใส่ API Key ของคุณลงไป:
   ```ini
   GROQ_API_KEY=your_api_key_here
   ```
4. รันเซิร์ฟเวอร์:
   ```bash
   node index.js
   ```
5. เปิดเว็บเบราว์เซอร์ที่ http://localhost:3000

## วิธีใช้งานบนเว็บ
1. พิมพ์คำอธิบายระบบหรือคำสั่งที่ต้องการในกล่องข้อความ
2. กดปุ่ม Submit
3. ระบบจะแสดง Use Case Description ที่ AI สร้างขึ้นพร้อมรูปแบบสวยงาม

## แผนพัฒนาในอนาคต
1. เพิ่มฟีเจอร์เก็บและจัดการโปรเจกต์ในฐานข้อมูล
2. ระบบล็อกอินและเก็บประวัติผู้ใช้
3. รองรับ AI รุ่นต่างๆ และฟีเจอร์ Fine-tune
4. ส่งออกไฟล์เอกสาร PDF หรือ Word


## โปรเจกต์ AI Usecase Helper

โปรเจกต์นี้เป็นเว็บแอปที่ใช้ API ของ Groq สำหรับสร้าง Use Case Description อัตโนมัติ

## License

โค้ดทั้งหมดในโปรเจกต์นี้ (ไม่รวม API ของ Groq) อยู่ภายใต้ [MIT License](LICENSE)
คุณสามารถใช้งานและแก้ไขโค้ดได้ตามเงื่อนไขของ MIT License

## การใช้ Groq API

โปรเจกต์นี้เรียกใช้ [Groq Generative AI API](https://console.groq.com/docs/models) ซึ่งอยู่ภายใต้ [Terms of Use ของ Groq](https://groq.com/terms-of-use)  
กรุณาปฏิบัติตามข้อกำหนดการใช้งานของ Groq ในการใช้ API

**หมายเหตุ:** เนื้อหาที่สร้างจาก AI เป็นความรับผิดชอบของผู้ใช้เอง และ Groq ไม่รับประกันความถูกต้องหรือความเหมาะสมของเนื้อหาที่ได้

---

ยินดีรับคำแนะนำและข้อเสนอแนะจากทุกคนครับ !

MIT License © Korrawit Aoo-ngern 
