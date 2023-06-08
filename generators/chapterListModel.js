const path = require('path')
const fs = require('fs')
const library = process.env.LIBRARY || path.resolve(__dirname, "../library")

const videoFormats = ["mp4", "wmv", "avi", "mkv", "webm"]
const imageFormats = ["jpg", "jpeg", "png", "bmp"]

const chapterListModel = {
    generate: generate
}

function generate(title){
    const result={
        title: title,
        chapters: []
    }
    const titlePath = library + "/" + title
    const files =
        fs.readdirSync(titlePath, { withFileTypes: true })
        .filter(dirent => dirent.isFile() )
        .map(dirent => dirent.name)
        files.forEach((f,i)=>{
            if(isVideo(f)){
                result.chapters.push({
                    name: f, 
                    url: "/view/" + title + "/" + f,
                    filePath: encodeURI("/video/" + title + "/" + f),
                    id: i+1
                })
        }
        if(isImage(f)){
            result.portrait = encodeURI(`/${title}/portrait.jpg`)
        }
    })
    console.log(result)
    return result
}

function isVideo(filename){
    const extension = filename.split(".").pop()
    if(videoFormats.includes(extension)) return true
    return false
}

function isImage(filename){
    const extension = filename.split(".").pop()
    if(imageFormats.includes(extension)) return true
    return false
}

module.exports = chapterListModel; 