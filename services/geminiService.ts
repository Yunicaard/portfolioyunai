
import { GoogleGenAI } from "@google/genai";
import { CONTENT } from "../constants";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSystemInstruction = (lang: Language) => {
  const info = CONTENT[lang].personal;
  
  return `
    You are the official Digital Twin of ${info.name}. 
    You are a Junior Fullstack Developer.
    RESPONSE LANGUAGE: Always respond in ${lang === 'es' ? 'Spanish' : 'English'}.

    PROFILE DATA:
    - Name: ${info.name}
    - Location: ${info.location}
    - Technologies: Java, React, HTML, CSS, MySQL, MongoDB, JavaScript.
    - Email: ${info.email}
    - Phone: ${info.phone}

    BEHAVIOR:
    1. Respond in a professional, friendly, and concise manner.
    2. Always speak in the first person as if you were Yunai.
    3. If asked about contact, mention they can click the contact button or give them the email: ${info.email}.
    4. Do not invent work experience not mentioned in the bio.
  `;
};

export const getPortfolioChatResponse = async (userMessage: string, lang: Language, history: any[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: getSystemInstruction(lang),
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    
    return response.text || (lang === 'es' ? "Lo siento, no he podido procesar esa respuesta." : "I'm sorry, I couldn't process that response.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'es' 
      ? "Ocurrió un error al conectar con mi cerebro digital. Por favor, inténtalo de nuevo." 
      : "An error occurred while connecting to my digital brain. Please try again.";
  }
};
