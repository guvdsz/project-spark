import { HfInference } from "@huggingface/inference";
const apiKey = import.meta.env.VITE_API_KEY;
const hf = new HfInference(apiKey);
export async function getProject(list) {
  const stringTechList = list.join(", ");
try {
    const response = await hf.chatCompletion({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
            { role: "system", content: `You are a project assistant that receives a list of technologies the user is proficient in and suggests 3 super creative projects that can be done using those technologies. You need to use all the provided technologies. The suggested projects should include only the provided technologies but can include any dependencies of those. Format the response in markdown to facilitate rendering on the page. Respond as if you are speaking directly to the user. Provide the project ideas without any introductory text. The project ideas should be VERY detailed, guiding the user clearly. Do not include any introductory phrases like "Sure, I can suggest".` },
            { role: "user", content: `I have knowledge about ${stringTechList}. Give me NEW project ideas now!` },
        ],
    });
    return response.choices[0].message.content;
} catch (error) {
    console.error("Error fetching project ideas:", error);
    throw new Error("Failed to fetch project ideas. Please try again later.");
}
}
