const homePage = document.getElementById("homeLink")
const projectsPage = document.getElementById("projectsLink")

const aboutLink = document.getElementById("aboutLink")
const skillsLink = document.getElementById("skillsLink")
const contactLink = document.getElementById("contactLink")

const project1Link = document.getElementById("project1Link")
const project2Link = document.getElementById("project2Link")
// const project3Link = document.getElementById("project3Link")

function setActive (active_div, div2, div3=null) {
    active_div.className = "active"
    div2.className = "inactive"
    div3.className = "inactive"
}

homePage.addEventListener('click', (e) => {
    setActive(homePage, projectsPage)
    // setActive(project1Link, project2Link, project3Link)
})

projectsPage.addEventListener('click', (e) => {
    setActive(projectsPage, homePage)
    // setActive(project1Link, project2Link, project3Link)
})

aboutLink.addEventListener('click', (e) => {
    setActive(aboutLink, skillsLink, contactLink)
})

skillsLink.addEventListener('click', (e) => {
    setActive(skillsLink, aboutLink, contactLink)
})

contactLink.addEventListener('click', (e) => {
    setActive(contactLink, skillsLink, aboutLink)
})

project1Link.addEventListener('click', (e) => {
    setActive(project1Link, project2Link)
    // setActive(project1Link, project2Link, project3Link)
})

project2Link.addEventListener('click', (e) => {
    setActive(project2Link, project1Link)
    // setActive(project2Link, project1Link, project3Link)
})

// project3Link.addEventListener('click', (e) => {
//     setActive(project3Link, project1Link, project2Link)
// })

