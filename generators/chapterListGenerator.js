const mustache = require('mustache')
const fs = require('fs')
const path = require('path')

const CLG = {
    generate: generate
}

function generate(content){
    
    const chaptersListTemplate = 
        fs.readFileSync(path.resolve(__dirname, "../templates/chapterListTemplate.html"))
        .toString()
    
    return mustache.render(chaptersListTemplate, content)
}

module.exports = CLG