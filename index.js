require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1", // <- use Groq's base URL
});

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gemma2-9b-it", // or "llama3-8b-8192"
      messages: [
        { role: "system", content: "You are an expert in software engineering. Generate use case descriptions based on user input." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    });

    const output = response.choices[0].message.content;
    res.json({ result: output });

  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
