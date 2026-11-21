import OpenAI from 'https://esm.sh/openai';


const openai = new OpenAI({
    apiKey: '12345API_KEY',
    dangerouslyAllowBrowser: true
})



document.getElementById("submit-btn").addEventListener("click", () => {
    const prompt = document.getElementById("instruction").value
    generateImage(prompt)
})


async function generateImage(prompt) {

    const response = await openai.images.generate({

        model: 'gpt-image-2', // default dall-e-2
        prompt: prompt, //required
        n: 1, //default 1 
        size: '1024x1024', //default 1024x1024
        // style: 'vivid', //default vivid (other option: natural)
        // response_format: 'url' //default url
    })
    console.log(response)
    const imageBase64 = response.data[0].b64_json;
    const outputImg =document.getElementById('output-img')
    outputImg.innerHTML = `
        <img src="data:image/png;base64,${imageBase64}" 
             alt="Generated image">`
}

    

//A 16th-century woman with long brown hair standing in front of a green vista with cloudy skies. She's looking at the viewer with a faint smile on her lips.
