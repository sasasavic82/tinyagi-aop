import * as dotenv from 'dotenv';
import fs from 'fs'
import YAML from 'yaml'

dotenv.config();

import { callOpenAI, promptOpenAI, AgentPromptGenerator, PromptRequest, PromptPart } from "./agi"

const config = YAML.parse(fs.readFileSync('tests.yml', 'utf8'));

(function() {
    config.prompts.forEach((prompt: PromptRequest<any>) => {
        callOpenAI(prompt)
            .then((response) => {
                
                try {
                    return response ? JSON.parse(response) : undefined
                } catch(e) {
                    return response;
                }
            })
            .then((response) => {
                if(!response)
                    throw "No response"
                    
                console.log(`\n=== [ ${prompt.name} ] ===`);
                console.log("Received Response:\n", JSON.stringify(response, null, 2))
                console.log("Expected Response:\n", prompt.expect)
            })
            .catch(console.error)
    });

    let _agentX = new AgentPromptGenerator("You are the world's greatest poet.");

    let _newPrompt: string = _agentX
        .addPromptPart(PromptPart.OBJECTIVE, "write a beautiful love poem")
        .addPromptPart(PromptPart.LIMITATION, "poems must be in style of Shakespeare")
        .addPromptPart(PromptPart.LIMITATION, "no more than 6 lines")
        .generate();

    
    promptOpenAI(_newPrompt)
        .then((response) => {
            console.log(`\n=== [ Poet ] ===`);
            console.log(response);
        })
        .catch(console.error);

})();
