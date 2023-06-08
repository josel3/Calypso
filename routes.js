const express = require('express'),
    router = express.Router(),
    searchController = require('./controllers/searchController.js'),
    chapterListController = require('./controllers/chapterListController.js'),
    chapterViewController = require('./controllers/chapterViewController.js'),
    videoController = require('./controllers/videoController.js')

router.post('/search', searchController.search)
router.get('/chapterList/:title', chapterListController.getChapterList)
router.get('/view/:title/:chapter', chapterViewController.getChapterView)
router.get('/video/:title/:chapter', videoController.getVideo)

module.exports = router