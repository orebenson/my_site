const homePage = document.getElementById("homeLink")
const aboutLink = document.getElementById("aboutLink")
const projectsLink = document.getElementById("projectsLink")


function setActive (active_div, other_divs) {
    active_div.className = "active";
    for (const div of other_divs) {
        div.className = "inactive";
    }
}

homePage.addEventListener('click', (e) => {
    setActive(homePage, [aboutLink, projectsLink])
})
aboutLink.addEventListener('click', (e) => {
    setActive(aboutLink, [homePage, projectsLink])
})
projectsLink.addEventListener('click', (e) => {
    setActive(projectsLink, [aboutLink, homePage])
})



