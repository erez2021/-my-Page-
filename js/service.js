'use strict'

var gProjs = [{
        id: "mine-sweeper",
        name: "mine-swipper",
        title: "MINE SWIPPER GAME",
        desc: "The first game that I  programmed",
        url: "projs/sokoban",
        publishedAt: 'jan 2021',
        category: 'Gaming',
    },
    {
        id: "book-shop",
        name: "book-shop",
        title: "BOOK SHOP PROJECT",
        desc: "the first APP that I programmed",
        url: "projs/sokoban",
        publishedAt:'jan 2021',
        category: 'Apps',
    },
]

function getProjById(projId) {
    var getProj = gProjs.find(function(proj) {
        return proj.id === projId
    })
    return getProj
}