const mustache = require('mustache')
const fs = require('fs')
const path = require('path')
const library = process.env.LIBRARY || path.resolve(__dirname,"/library")

const SPG = {
    generate: generate
}

function generate(searchResult){
    const searchPageTemplate =
        fs.readFileSync(path.resolve(__dirname, "../templates/searchPageTemplate.html"))
        .toString()
        
        const bookList = []
    searchResult.forEach(e => {
        const bookPath = `/${encodeURI(e)}`
        //si hay una imagen "portrait.jpg" en la carpeta la usa como portada
        //si no usa un placeholder
        const imgPath = fs.existsSync(`${library}/${e}/portrait.jpg`) ?
                bookPath + "/portrait.jpg" : "/placeholderPortrait.png" 
        const book = {path: bookPath, title: e, image: imgPath}
        bookList.push(book)
    });
    
    console.log('spg booklist',bookList)
    return mustache.render(searchPageTemplate, {bookList: bookList}) 
    
}

module.exports = SPG