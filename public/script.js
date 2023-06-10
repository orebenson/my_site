const homePage = document.getElementById("homeLink")
const skillsLink = document.getElementById("skillsLink")
const contactLink = document.getElementById("contactLink")
const projectsLink = document.getElementById("projectsLink")


function setActive (active_div, other_divs) {
    active_div.className = "active";
    for (const div of other_divs) {
        div.className = "inactive";
    }
}

homePage.addEventListener('click', (e) => {
    setActive(homePage, [skillsLink, contactLink, projectsLink])
})
skillsLink.addEventListener('click', (e) => {
    setActive(skillsLink, [homePage, contactLink, projectsLink])
})
contactLink.addEventListener('click', (e) => {
    setActive(contactLink, [skillsLink, homePage, projectsLink])
})
projectsLink.addEventListener('click', (e) => {
    setActive(projectsLink, [skillsLink, contactLink, homePage])
})



