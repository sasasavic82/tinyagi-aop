
import { PromptPart } from "./types";

export class AgentPromptGenerator {

    private _whoAreYou: string = "";
    private _data: string = "";
    private _objectives: string[] = [];
    private _limitations: string[] = [];
    private _actions: string[] = [];
    private _resources: string[] = [];
    private _responseSchema: string = ""

    constructor(whoAreYou: string) {
        this._whoAreYou = whoAreYou;
    }

    private _format = (list: string[]): string => list.map((item, i) => `${i + 1}. ${item}`).join("\n");
    
    public addPromptPart = (part: PromptPart, text: string): AgentPromptGenerator => {
        switch(part) {
            case PromptPart.DATA: this._data = text;
            case PromptPart.OBJECTIVE: this._objectives.push(text);
            case PromptPart.LIMITATION: this._limitations.push(text);
            case PromptPart.ACTION: this._actions.push(text);
            case PromptPart.RESOURCE: this._resources.push(text);
            case PromptPart.RESPONSE: this._responseSchema = text;
        }

        return this;
    }

    public generate = () => {
        return `
            ${this._whoAreYou != "" ? this._whoAreYou + "\n\n" : ""}
            ${this._data != "" ? `DATA:\n` + this._data + "\n\n" : ""}
            ${this._objectives.length > 0 ? `OBJECTIVES:\n` + this._format(this._objectives) + "\n\n" : ""}
            ${this._limitations.length > 0 ? `LIMITATIONS:\n` + this._format(this._limitations) + "\n\n" : ""}
            ${this._actions.length > 0 ? `ACTIONS:\n` + this._format(this._actions) + "\n\n" : ""}
            ${this._resources.length > 0 ? `RESOURCES:\n` + this._format(this._resources) + "\n\n" : ""}
            ${this._responseSchema != "" ? `RESPONSE SCHEMA:\n` + this._responseSchema + "\n\n" : ""}
        `
    }
}