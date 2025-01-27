import { GoogleGenerativeAI } from "@google/generative-ai"

// WARNING: DO NOT HARDCODE API KEYS LIKE THIS IN PRODUCTION CODE!
const apiKey = "AIzaSyCkFDQZ4GU2jFZCq3xy0zn2QVTCx3Y3nSU"
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({ model: "gemini-pro" })

const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
}

async function run(prompt) {
  // console.log("Gemini run function called with prompt:", prompt)

  try {
    // console.log("Sending request to Gemini API...")
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    // console.log("Received response from Gemini:", text)
    return text
  } catch (error) {
    console.error("Error in Gemini API call:", error)
    throw error
  }
}

export default run

