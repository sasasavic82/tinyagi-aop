import { ChatCompletionRequestMessage } from "openai";

export enum Model {
    GPT3 = "gpt-3.5",
    GPT3TURBO = "gpt-3.5-turbo",
    GPT4 = "gpt-4"
}

export type PromptMessage = {
    role: string,
    content: string
}

export type AgiRequest = {
    messages: Array<ChatCompletionRequestMessage>,
    temperature: number,
    max_tokens: number,
    model: Model
}

export type PromptRequest<T> = AgiRequest & {
    expect: T
}

export type HealResponse = {
    arguments: string[];
    function: string;
}
