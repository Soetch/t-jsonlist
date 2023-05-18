const fs = require('fs/promises')

async function getJson() {
    const json = await fs.readFile('data/db.json')
    const parsedJson = JSON.parse(json)

    console.log(parsedJson.word)
}

getJson()