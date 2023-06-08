const CVG = require("../generators/chapterViewGenerator.js");
const chapterListModel = require("../generators/chapterListModel.js");

const chapterViewController = {
    getChapterView: getChapterView
}

function getChapterView(req, res) {
    const chapterList = chapterListModel.generate(req.params.title).chapters
    const chapter = chapterList.find(c=>c.name===req.params.chapter)
    if(!chapter){
        res.sendStatus(404)
    }
    else{
        const renderedPage = renderPage(req.params.title, chapter, chapterList)
        res.send(renderedPage)
    }
    
}

function renderPage(title, chapter, chapterList){
    const next = nextChapter(chapter.name, chapterList)
        const prev = prevChapter(chapter.name, chapterList)
        const idx = chapterIndex(chapter.name, chapterList)
        
        const content = {
            title: title,
            id: idx,
            video: chapter.filePath,
            chapterList: "/chapterList/"+title
        }
        if(next) content.next = next.url
        if(prev) content.prev = prev.url
    
    return CVG.generate(content)
}

function nextChapter(chapterName, chapterList){
    const currentIndex = chapterList.findIndex(c=>c.name === chapterName)
    return chapterList[currentIndex+1]
}

function prevChapter(chapterName, chapterList){
    const currentIndex = chapterList.findIndex(c=>c.name === chapterName)
    return chapterList[currentIndex-1]
}

function chapterIndex(chapterName, chapterList){
    return chapterList.findIndex(c=>c.name === chapterName)
}

module.exports = chapterViewController