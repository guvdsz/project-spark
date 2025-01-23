import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export async function getProject(list) {
  const stringTechList = list.join(", ");
  try {
    const result = await model.generateContent(`You are a project assistant that receives a list of technologies the user is proficient, that is ${stringTechList} in and suggests 3 super creative projects that can be done using those technologies. You need to use all the provided technologies. The suggested projects should include only the provided technologies but can include any dependencies of those. Format the response in markdown to facilitate rendering on the page. Respond as if you are speaking directly to the user. Provide the project ideas without any introductory text. The project ideas should be VERY detailed, guiding the user clearly. Do not include any introductory phrases like "Sure, I can suggest". Return the response with a good structure that can be translated with React Markdown`);
    return result.response.text;
  } catch (error) {
    console.error("Error fetching project ideas:", error);
    throw new Error("Failed to fetch project ideas. Please try again later.");
  }
}
