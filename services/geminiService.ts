import { GoogleGenAI } from "@google/genai";

export const getAutomationAdvice = async (businessType: string, problem: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      You are a senior automation consultant for "Googol Plex Tech", a software company.
      A potential client runs a "${businessType}" and is facing issues with "${problem}".
      
      Provide a concise, professional, and convincing response (max 150 words) explaining how 
      custom software or automation can solve their specific problem. 
      Focus on efficiency, cost-saving, and peace of mind.
      End with a call to action to contact our team.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Our AI consultant is currently busy. Please contact us directly!";
  } catch (error) {
    console.error("Error fetching AI advice:", error);
    return "Unable to generate advice at this moment. Please reach out to our team via the contact form.";
  }
};