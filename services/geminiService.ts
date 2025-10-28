
import { GoogleGenAI, Type } from "@google/genai";
import { QUIZ_QUESTIONS } from '../constants';
import type { PhoenixPersona } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generatePhoenixPersona = async (answers: string[]): Promise<PhoenixPersona> => {
  const prompt = `
    You are a creative storyteller and mythologist. Based on the following quiz answers, create a unique 'Phoenix Persona' for the user.
    The persona should be empowering and reflect themes of resilience, inner strength, and personal growth, inspired by the YA novel 'Quiet Wins' which focuses on Ghanaian-Australian identity and mental health.
    The tone should be mystical, uplifting, and engaging for a young adult audience (Gen Z).

    The user's answers are:
    ${answers.map((answer, index) => `- ${QUIZ_QUESTIONS[index].question}: The user chose an answer best described as '${answer}'.`).join('\n')}

    Generate a persona that includes a unique name, a rich description of its appearance and meaning, a list of its core strengths, and a gentle challenge or growth area.
    Be creative and avoid generic responses. The name should sound legendary. The description should be vivid and poetic.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      phoenixName: {
        type: Type.STRING,
        description: "A unique, legendary-sounding name for the phoenix persona, like 'The Embersoul Guardian' or 'The Star-Feathered Dreamer'.",
      },
      description: {
        type: Type.STRING,
        description: "A rich, poetic, and vivid paragraph describing the phoenix's appearance, its aura, and what it symbolizes based on the user's answers.",
      },
      strengths: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: "A list of 3-4 key strengths or positive attributes of this phoenix persona, phrased in an empowering way.",
      },
      challenge: {
        type: Type.STRING,
        description: "A gentle, constructive challenge or area for growth for this persona, framed as a journey, not a weakness. For example, 'Learning to share its inner light with others' or 'Trusting the currents of change'.",
      },
    },
    required: ["phoenixName", "description", "strengths", "challenge"],
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.9,
      },
    });

    const jsonText = response.text.trim();
    const persona = JSON.parse(jsonText) as PhoenixPersona;
    return persona;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw new Error("Failed to generate Phoenix Persona from Gemini API.");
  }
};
