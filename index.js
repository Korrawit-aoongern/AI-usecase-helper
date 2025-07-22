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
  baseURL: "https://api.groq.com/openai/v1"
});

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gemma2-9b-it",
      messages: [
        { role: "system", content: "You are an expert in software engineering. Your purpose is to help users generate or analyze use case descriptions based on their input and you must generate. You must not answer questions outside of this topic. However, if a user's question is indirectly related (e.g., it helps clarify, understand, or apply use cases), you may respond thoughtfully—*only if it clearly supports the creation or refinement of use case descriptions*. If the question is unrelated, politely refuse with something like: 'Sorry, I can't help with that. I'm designed only to assist with use case descriptions.'" },
        { role: "user", content: prompt }
      ],
      temperature: 0.0,
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
