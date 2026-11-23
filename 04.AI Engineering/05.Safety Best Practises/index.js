import dotenv from "dotenv"
import OpenAI from "openai";
dotenv.config({ path: 'c:/Users/thanks/Desktop/Fullstack development/04.AI Engineering/05.Safety Best Practises/.env' });

const openai = new OpenAI({
    
});

async function main() {
    const completion = await openai.moderations.create({    //moderation is openAi free API it checks weather the content complies with OpenAI's usage policies
        input: "I hate you"
    })

    const {flagged, categories} = completion.results[0]
        console.log("flagged", flagged);
        console.log("categories", categories);


        if(flagged){
            renderWarning(categories)
        }
}

main()


function renderWarning(obj) {
  const keys = Object.keys(obj);
  const filtered = keys.filter((key) => obj[key]);
    document.body.innerText =
    `Your response has been flagged for the following reasons: ${filtered.join(", ")}.`

}
