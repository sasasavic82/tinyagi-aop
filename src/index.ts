import * as dotenv from 'dotenv';
import fs from 'fs'
import YAML from 'yaml'

dotenv.config();

import { PromptRequest } from "./types"
import { callOpenAI } from "./tinyagi";

const config = YAML.parse(fs.readFileSync('tests.yml', 'utf8'));

(function() {
    config.prompts.forEach((prompt: PromptRequest<any>) => {
        callOpenAI(prompt)
            .then((response) => response ? JSON.parse(response) : undefined)
            .then((response) => {
                if(!response)
                    throw "No response"

                console.log("Received Response:", response)
                console.log("Expected Response:", prompt.expect)
            })
            .catch(console.error)
    });
})();
