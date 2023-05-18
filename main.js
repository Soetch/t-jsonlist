const fs = require('fs/promises')

async function getJson(id, titletype) {
    const json = await fs.readFile('data/db.json')
    const parsedJson = JSON.parse(json)

    console.log(parsedJson["topics"][id][titletype])
}

getJson(1, "hiratitle")