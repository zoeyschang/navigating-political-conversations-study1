# navigating-political-conversations-study1
## Introduction
For our CS366 final research project, we used the OpenAI Javascript node.js package and OpenAI API to generate user personas for our Study 1 as part of a three-part study. 

To use the 'study1.js' file, put your own OpenAI API key in place of the comment "insert your own OpenAI API key here" to initialize the variable "openai". Each user has a unique, secret OpenAI key that cannot be shared.

For our prompt, we put this phrase "Generate 30 user personas of different people living in the United States who are politically left/independent/right. What are their beliefs? Where do they live? What are their main political concerns? Put this data into a CSV file for me to download." for the three political leanings. OpenAI then generated a separate CSV file for each of the three leanings. 

## Running this code on your Device
1. Open Visual Studio Code from your desktop and open a new Javascript file. If you don’t have VS code, download it [here](https://code.visualstudio.com/download).
2. You will also need to install 'Node.js' for your personal computer [here](https://nodejs.org/en/download/package-manager). Make sure to put the 'node_modules' folder in the same folder as your 'study1.js'.
3. Download 'study1.js' file from this repository. You can customize your own prompt in the 'content' in the 'messages' array.

## Installation
To begin, you will need an OpenAI API key. 
1. You can obtain one on the [OpenAI website](https://platform.openai.com/docs/api-reference/introduction). You will need an OpenAI account.
2. Next, go to "Settings" and find "API Keys". Generate a key.
3. Copy and save this key into your JavaScript file in VSCode immediately because you can only access it here once and it is unique to your account. 

After installing 'Node.js', you can also install the openai library by running the following command in the Terminal: 'npm install openai'

Then, check the node version by running this command: 'node -v'. It should show 'v22.11.0'. 

Now you are ready to generate content through OpenAI using your own prompts!
