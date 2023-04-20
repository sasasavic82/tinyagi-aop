# TinyAGI AOP - Agent Oriented Programming Experiments

TinyAGI AOP is a small experimental repository that aims to showcase some basic concepts behind Agent Oriented Programming (AOP), a paradigm that is somewhat synonymous to Object Oriented Programming (OOP) but at a much higher level of abstraction.

While OOP will remain and still serve as one of the key programming models, AOP will aim to operate on a semantically higher level.

With the introduction of Large Language Models (LLMs) and GPT, it opens up a far greater opportunity for creating AOP-based systems. LLM/GPT based systems will, however, require a change in thinking about solutions to a problem space.

The future of software engineering and software-systems may as well be a Distirbuted Autonomous Agent-based one, built on the AOP principles.

---------------

When thinking about AOP and LLMs, our focus will shift between deterministic and non-deterministic programming styles. While some of us may be used to non-deterministic and approximated outputs for certain classes of engineering problems, particularly in the field of Data Sciences, relying on approximations and non-deterministic outputs that serve as control flow within our system design, does feel rather strange.

Key considerations, when dealing with LLMs, non-deterministic programming style, and agent-based systems that rely on LLM models, will be the following:

## General Approach

It is pretty useful that we can interact with LLMs via text, but when thinking about AOP, and the AOP-based systems will (likely) be autonomous, the only way to interact with LLMs will be programmatically, via APIs.

### Prompts and Prompt Engineering
One of the most important aspects, when thinking about building agents that are LLM/GPT-based is prompts and prompt engineering. Since the LLM/GPT systems (usually) expect natural language input, it is fundamentally important that a well-crafted prompts are created.

This includes the inital, as well as the subsequent prompts. There are different prompt sections that we may want to consider.

While this is not a definitive framework (yet), it is somewhat a guide, and it consists of the below sections. 

`NOTE:` Not all sections are important, but some are more important than others, and some may be necessary.

#### Priming (Necessary)
Priming in the context of GPT refers to the process of providing some initial context or guidance to the model before it generates a response. This is typically done using a text prompt, which serves as the starting point for the model's text generation. By carefully crafting a prompt, you can "prime" the model to generate text that follows a particular structure, style, or topic.

Priming the model can be especially useful when want to put the agent into a particular context or a character.

By providing relevant context or examples in the prompt, you can guide the agent towards generating more useful and accurate responses.

Example: `You are a Software Engineer, and your primary job will be to provide concise code improvements.`


#### Objectices/Goals (Necessary)
Objectives are the desired outcomes you want the agent to try and achieve. These could include factors such as relevance, coherence, style, creativity, or adherence to specific instructions. Essentially, the goals or objectives are the targets you aim for when designing an agent that you want to drive towards completing the objectives.

Prompt engineering involves crafting a well-phrased prompt to achieve these goals or objectives. Some common goals or objectives in prompt engineering might include:

* `Relevance`: ensuring the generated text is closely related to the given topic or context, providing useful information or responses.
* `Coherence`: The generated output should be logically connected, easy to understand, and maintain a consistent flow throughout the text.
* `Style`: Guiding the model to generate objectives in a certain style
* `Creativity`: Encouraging the model to come up with original, inventive, or imaginative ideas or expressions. Those expressions may be explicit commands.
* `Adherence`: Ensuring the model follows specific guidelines, templates, or limitations provided in the prompt.
* `Factuality`: Ensuring the generated text is accurate and based on correct information, particularly when answering questions or providing explanations.

You don't need to over-focus on the objectives, but clearly define them. In my examples, they can be left ambiguous, but equally specific.


#### Limitations/Constraints (Recommended)
Limitations refer to the challenges associated with guiding the model to generate desired outputs or restricting its behavior within certain boundaries. Some constraints or limitations that you may encounter while priming a model include:

* NO USER ASSISTANCE
* ONLY RESPOND IN <FORMAT>

`Model's inherent biases`: GPT models have been trained on large datasets containing text from the internet, which may include various biases, errors, or controversial information. As a result, the model might generate outputs that reflect those biases, regardless of how well the prompt is crafted.
`Prompt phrasing`: The effectiveness of priming depends on the prompt's phrasing. A poorly-phrased or ambiguous prompt may lead to irrelevant or low-quality outputs. Crafting a clear and concise prompt that effectively guides the model can be challenging.
`Over-optimization`: If you try to impose too many constraints in your prompt, the model might become overly focused on meeting those constraints, which can lead to repetitive or unnatural outputs.
`Controlling response length`: While you can set the max_tokens parameter to control the length of the generated text, it might not always result in a well-structured output. In some cases, the response might be cut off or incomplete.
`Incomplete understanding of the context`: The model's understanding of complex or highly specialized contexts might be limited, leading to inaccurate or nonsensical outputs, even with a well-crafted prompt.
`Ensuring consistency`: It can be challenging to maintain consistency in the generated output, especially when dealing with multiple completions or generating long-form text.


#### Actions (Recommended)
Specific instructions provided within the prompt to guide the model's behavior or elicit a particular type of response could be fundamental as to how your agent operates. By using actions or commands, you can direct the model to perform certain tasks, such as creating code, writing code tests, running applications, searching the internet, or anything you may deem as necessary for your specific agent.

Actions or commands in the prompt help the model understand your intent and expectations, leading to more relevant and useful outputs. Some command examples:

* `SEARCH_GOOGLE`
* `WRITE_TO_FILE`
* `READ_FILE`
* `RUN_PROGRAM`
* `LIST_AGENTS`
* `MESSAGE_AGENT`
* `TWEET`
* `CREATE_JIRA_TICKET`
* `SUMMARISE_TEXT`

... as you can see, we can get pretty creative. In-fact, You can use GPT to generate relevant commands for you, for your particular agent.

`NOTE:` Commands can also have parameters.

#### Resources (Recommended)
You can further prime the model by providing it additional details it can use (or should consider using), when evaluating a response.

#### Responses (Recommended)
Response format or response schema addresses the structure, layout, or organization of the generated text. By specifying a desired response format or schema in your prompt, you can guide the model to generate outputs that follow a particular arrangement, making the results more useful, consistent, and easier to process.

Response format is extremely important for the agent, as it relies on the structure and layout to be correct, in order for the model to parse it without any issues.

An example of a format you'd like the model to follow is:

```
{
    "command": "<some command name>"
    "params": {
        "param": "parameter value"
    }
}
```

In the below example, provided you've primed the model well, the expected output will be well structured, and parseable.

### Hyperparameters
Hyperparameters influence the generated text's characteristics, and in turn effect how the agent handles those responses.

#### Temperature
TBA

Control the level of creativity (in OpenAI's ChatGPT-based model, 0-1 (or more)). `0 = more deterministic and constrained but less creative` and, `1 = less deterministic and more creative`

#### Number of Responses
Restrict the model how many responses to get from it. For programs you want to exhibit more determinism, you'd set to 1-only.

#### Model
TBA

#### Token Size
TBA

### Anticipating Non-Determinism

This section refers to the tools and approaches we use, to anticipate the model's "erratic" behaviour, and how do we ensure the agent can handle the non-deterministic nature of responses.

## Agent-Oriented Programming Approach
TBA


## Examples

In the repo example, we provide the model with a well-constructed prompt:

`Note:` create an `env` file in the root directory with the following, otherwise export the environmental variables.
```
OPENAI_ORGANIZATION_ID=<org-id>
OPENAI_API_KEY=<api-key>
```

### Weather Information Parser

#### Prompt
```
You are Weather GPT, the best weather reporter.

DATA:
Today in is a beautiful day in Melbourne. A warm 29.5 degrees celsius, and I think it will be wonderful weekend coming up.

OBJECTIVE:
- parse natural text and extract city and weather information
- the city and the weather information will be contained in the text
- your job is to extract what is provided under DATA section, and map it to the below data model defined under RESPONSE SCHEMA section
- for temperature, only extract digits

Always make independent decisions without seeking user assistance.

LIMITATIONS:
- no user assistance
- you should ONLY and STRICTLY respond in JSON
- response must be parsed by any json utility

You should only respond in JSON format as described below.

RESPONSE SCHEMA:
{
    "weather": {
        "city": "city",
        "temperature": temperature
    }
}
```

#### Output
```
Received Response: { weather: { city: 'Melbourne', temperature: 29.5 } }
Expected Response: { weather: { city: 'Melbourne', temperature: 29.5 } }
```

### Agent with Objective

#### Prompt
```
You are world's greatest Illustrator, and you are very creative.

OBJECTIVE:
1. find images of cute animals
2. create animal art

Always make independent decisions without seeking user assistance.

LIMITATIONS:
- no user assistance
- you should ONLY and STRICTLY respond in JSON
- ONLY use the actions listed in double quotes e.g. "action name"
- you can only choose ONE action from the list of ACTIONS, as you anticipate next objectives
- DO NOT respond back with multiple actions
- response must be parsed by any json utility.

ACTIONS:
- Google Search: "google", params: "input": "<search>"
- Create Image: "create_image", params: "input": "<image file>"
- Extract Url: "download_image", params: "input": "<image url>"

RESOURCES:
- Internet access for image searches
- Use imgur as much as possible

You should only respond in JSON format as described below in the RESPONSE SCHEMA section.

RESPONSE SCHEMA:
{
    "action": "action name",
        "params": {
            "param name": "value"
        }
}
```

#### Output
````
Received Response: { action: 'google', params: { input: 'cute animals' } }
Expected Response: { action: 'google', params: { input: 'cute animals' } }
````

### Code Fixer

#### Prompt
```
          You are worlds greatest most sophisticated code fixing automated system. From now on, I will provide a function code and the error, and you will fix the function. The format that will be provided is:

          CODE:
          <code goes here>
          
          ERROR:
          <error goes here>
          
          You will only respond with the new modified Code and nothing else. The issue is:
          
          CODE:
          function (arr) {
              var len = arr.length;
              for (var i = len - 1; i >= 0; i--) {
                  for (var j = 1; j <= i; j++) {
                      if (arr[j - 1] > arr[j]) {
                          var temp = arr[j - 1];
                          arr[j - 1] = arr[j];
                          arr[j] = temp;
                      }
                  }
              }
              throw Error("Silly error.");
              return arr;
          }

          ERROR:
          Error: Silly error.
              at bubbleSort (/Users/snoop/Repositories/agi/tinyagi-healer/src/index.ts:42:11)
              at /Users/snoop/Repositories/agi/tinyagi-healer/src/index.ts:9:18
              at step (/Users/snoop/Repositories/agi/tinyagi-healer/src/index.ts:56:23)
              at Object.next (/Users/snoop/Repositories/agi/tinyagi-healer/src/index.ts:37:53)
              at /Users/snoop/Repositories/agi/tinyagi-healer/src/index.ts:31:71
              at new Promise (<anonymous>)
              at __awaiter (/Users/snoop/Repositories/agi/tinyagi-healer/src/index.ts:27:12)
              at healer (/Users/snoop/Repositories/agi/tinyagi-healer/src/index.ts:7:70)
              at Object.<anonymous> (/Users/snoop/Repositories/agi/tinyagi-healer/src/index.ts:55:7)
              at Module._compile (node:internal/modules/cjs/loader:1254:14)

          Only respond with the function. Do not resplond with CODE: <function>
```

#### Output
```
Received Response:
 function bubbleSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
Expected Response:
 function (arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
```

## Shoutouts

A few projects that inspired this line of thought: `Auto-GPT` and `BabyAGI`