const fs = require('fs');
const path = require('path')
const library = process.env.LIBRARY || path.resolve(__dirname, "../library")

const videoController = {
    getVideo: getVideo
}

function getVideo(req, res) {
    console.log(req.headers)
    const range = req.headers.range 
    const videoPath = path.resolve(library, req.params.title, req.params.chapter)
    const videoSize = fs.statSync(videoPath).size
    const chunkSize = 1 * 1e6;
    const start = Number(range.replace(/\D/g, ""))  
    console.log(start + " start")
    const end = Math.min(start + chunkSize, videoSize - 1)
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206, headers)
    const stream = fs.createReadStream(videoPath, {
        start,
        end
    })
    stream.pipe(res)
}

module.exports = videoController;