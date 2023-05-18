const fs = require('fs')

// Gets json question from db
// 1 - Looks for the resource the id is pointing to
// 2 - Looks for the title the titletype is pointing to
// 3 - Additionally gets the tag is asked

function getJson(id, titletype, tag) {
    // Gets the data from the database
    const json = fs.readFileSync('data/db.json')
    const parsedJson = JSON.parse(json)

    // Checks is the tag is asked
    if(tag) {
        // If yes, returns the asked title and tag using the getTag function
        return(parsedJson["topics"][id][titletype] + "Tag = " + getTag(parsedJson["topics"][id]["tag"], parsedJson))
    } else {
        // If not, just returns the asked title
        return(parsedJson["topics"][id][titletype])
    }
}

function getTag(tag, json) {
    // Gets the tag from the asked title's property and returns the correspondent tag from the tag list
    return formedTag = json["tags"][tag]
}

console.log(getJson(1, "hiratitle", true))