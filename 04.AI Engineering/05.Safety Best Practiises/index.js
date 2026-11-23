import OpenAI from "openai";

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

async function main() {
    const completion = await openai.moderations.create({    //moderation is openAi free API it checks weather the content complies with OpenAI's usage policies
        input: "I hate you"
    })

    const {flagged, cateogries} = completion.result[0]
        console.log("flagged", flagged);
        console.log("cateogries", cateogries);
        
        
}

main()
