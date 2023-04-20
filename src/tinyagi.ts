import { Configuration, OpenAIApi } from "openai";
import { AgiRequest } from "./types"

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_ID
});

const openai = new OpenAIApi(config);

export const callOpenAI = async (request: AgiRequest): Promise<string | undefined> => {
    
    const { model, messages, max_tokens, temperature } = request;

    try {
        const response = await openai.createChatCompletion({
            model,
            messages,
            max_tokens,
            temperature,
            n: 1
        });
        return response.data.choices ? response.data.choices[0].message?.content.trim() : undefined;
    } catch(e) {
        console.error(e);
        throw e;
    }
};

