const libraryModel = require('../generators/libraryModel.js')
const SPG = require('../generators/searchPageGenerator.js')

const searchController = {
    search: search
}

function search(req, res){
    console.log(req.body);
    const query = req.body.q
    const rendered = renderedPage(query)
    res.send(rendered);
}

function renderedPage(query){
    const model = libraryModel.generate()
    const searchResult = model.filter(e=>e.toLowerCase().includes(query.toLowerCase()))
    console.log('scont', query, model, searchResult); 
    return SPG.generate(searchResult)    
}

module.exports = searchController 
