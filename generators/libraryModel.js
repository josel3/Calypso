const path = require('path')
const fs = require('fs')
const library = process.env.LIBRARY || path.resolve(__dirname, "../library")

const libraryModel = {
    generate: generate
} 

function generate(){
    const result =
        fs.readdirSync(library, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    console.log(result)
    return result
}

module.exports = libraryModel; 