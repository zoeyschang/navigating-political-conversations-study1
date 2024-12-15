
const OpenAI = require('openai');
const openai = new OpenAI
    ({apiKey: //insert own openai API key

    });


async function getOpenAIResponse() {
	try{
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {role: 'system', content: "Generate 30 user personas of different people living in the United States who are politically independent. What are their beliefs? Where do they live? What are their main political concerns? Put this data into a CSV file for me to download."},
                {role: 'user', content: 'Independent'},
            ]// your user and system prompts go here (see below)
        });
    console.log(response.choices[0]["message"]["content"]);
    } catch (error){ // this is just to catch any errors
    		console.error("Error with OpenAI API: ", error);
    }
    
}

getOpenAIResponse();
