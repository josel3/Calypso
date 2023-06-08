const fs = require("fs");
const path = require("path");
const mustache = require("mustache");

const CVG = {
    generate: generate
}     

function generate(content){
    const chapterViewTemplate = 
        fs.readFileSync(path.resolve(__dirname, "../templates/chapterViewTemplate.html"))
        .toString()
    
    return mustache.render(chapterViewTemplate, content)
}

module.exports = CVG