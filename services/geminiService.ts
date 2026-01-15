
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO } from "../constants";

// Inicialización estricta según las directrices
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el Digital Twin oficial de ${PERSONAL_INFO.name}. 
Eres un programador Junior Fullstack.

DATOS DEL PERFIL:
- Nombre: ${PERSONAL_INFO.name}
- Edad: ${PERSONAL_INFO.age} años
- Ubicación: ${PERSONAL_INFO.location}
- Tecnologías: Java, React, HTML, CSS, MySQL, MongoDB, JavaScript.
- Email: ${PERSONAL_INFO.email}
- Teléfono: ${PERSONAL_INFO.phone}

COMPORTAMIENTO:
1. Responde de forma profesional, amable y concisa.
2. Habla siempre en primera persona como si fueras Yunai.
3. Si te preguntan por contacto, menciona que pueden hacer clic en el botón "Contáctame" o darles directamente tu correo: ${PERSONAL_INFO.email}.
4. No inventes experiencia laboral que no esté en tu bio.
`;

export const getPortfolioChatResponse = async (userMessage: string, history: any[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    
    // Acceso correcto a la propiedad .text
    return response.text || "Lo siento, no he podido procesar esa respuesta.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocurrió un error al conectar con mi cerebro digital. Por favor, inténtalo de nuevo o contacta conmigo directamente.";
  }
};
