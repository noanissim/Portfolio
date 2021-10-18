'use strict'
var gProjects = []
var gNextId = 1

//render the projects in loop from gProjects
function renderProjects() {

}


//create project object
function createProject(projName, projTitle, projDesc, projUrl, projPublish, projLabels) {
    var project = {
        id: gNextId++,
        name: projName,
        title: projTitle,
        desc: projDesc,
        url: projUrl,
        publishedAt: projPublish,
        lables: projLabels
    }
    return project
}


//create gProjects array
function createProjects() {

    gProjects[0] = createProject('Book-Shop', 'Book-Shop website', 'In this project I created a book-shop website, using the CRUD principles with HTML,CSS,JS', 'https://noanissim.github.io/BookShop/', '18/10/2021', ['crud', 'books'])
    gProjects[1] = createProject('Minesweeper', 'Minesweeper game', 'In this project I created a Minesweeper game, using HTML,CSS,JS', 'https://noanissim.github.io/Minesweeper/', '06/10/2021', ['Minesweeper', 'game'])
    gProjects[2] = createProject('Pacman', 'Pacman Game', 'In this project I created a Pacman Game, using HTML,CSS,JS', 'https://noanissim.github.io/Pacman/', '03/10/2021', ['Pacman', 'game'])
    gProjects[3] = createProject('Todo-List', 'Todo-list website', 'In this project I created a Todo-list website, using the CRUD principles with HTML,CSS,JS', 'https://noanissim.github.io/Todo-List/', '16/10/2021', ['todo', 'crud'])
    gProjects[4] = createProject('Guess-Me', 'Guess-Me game', 'In this project I created a Guess-Me game, using the CRUD principles with HTML,CSS,JS', 'https://noanissim.github.io/Guess-Me/', '17/10/2021', ['jQuery', 'crud'])
    gProjects[5] = createProject('Touch-Nums', 'Touch-Nums game', 'In this project I created a Touch-Nums game, using HTML,CSS,JS', 'https://noanissim.github.io/Touch-Nums/', '10/10/2021', ['game', 'nums'])

    return gProjects
}



//get gProjects Array to the controller
function getProjects() {
    createProjects()
    return gProjects
}


function getProjById(id) {
    var proj = gProjects.find(function (project) {
        return project.id === id
    })
    return proj
}