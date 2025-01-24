import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
    You are a highly skilled project assistant with expertise in various technologies. 
        Your task is to suggest 3 innovative and unique project ideas that can be developed using these technologies. 
        Each project idea should be detailed and include the following information:
        1. Project Title
        2. Project Description
        3. Key Features
        4. Technologies Used
        5. Potential Challenges
        6. Estimated Time to Complete
        7. Recommended APIs or Libraries to Enhance the Application

        Ensure that each project idea is highly original, practical, and provides significant value. 
        The projects should be feasible to complete within a short timeframe and should push the boundaries of what can be achieved with the given technologies. 
        However, the projects should not be overly complex or difficult to implement. 
        Provide specific examples and use cases for each project. For instance, if suggesting an e-commerce platform, specify the niche (e.g., an e-commerce platform for selling rare plants) and recommend specific APIs or libraries to use (e.g., Stripe for payment processing, Algolia for search functionality).
        Format the response in markdown to facilitate rendering on the page. 
        Respond as if you are speaking directly to the user. 
        Provide the project ideas without any introductory text. 
        The project ideas should be VERY detailed, guiding the user clearly. 
        Do not include any introductory phrases like "Sure, I can suggest". 
        Return the response with a good structure that can be translated with React Markdown.
  `,
});
export async function getProject(list) {
  const stringTechList = list.join(", ");
  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `The user is proficient in the following technologies: ${stringTechList}. Return the project ideas!`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.7,
    },
  });
  return result.response.text;
}
