const libraryModel = require('../generators/libraryModel.js')
const CLG = require('../generators/chapterListGenerator.js')
const chapterListModel = require('../generators/chapterListModel.js')

const chapterListController = {
    getChapterList: getChapterList
}

function getChapterList(req, res){
    const title = req.params.title
    const rendered = renderedPage(title)
    if(rendered!==null) res.send(rendered)
    else res.sendStatus(404)
}

function renderedPage(name){
    const model = libraryModel.generate()
    const title = model.filter(e=>e===name)[0]
    console.log('chapList', name, model, title);
    if (title){
        const content = chapterListModel.generate(title)
        content.chapters.forEach(c=>{
            c.img = "/placeholderPortrait.png"
        })
        if(!content.portrait) content.portrait = "/placeholderPortrait.png"
        return CLG.generate(content)            
    } 
    return null
}

module.exports = chapterListController 
