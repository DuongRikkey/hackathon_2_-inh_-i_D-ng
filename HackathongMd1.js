
// const projectdb = JSON.parse(localStorage.getItem("Project")) || []
const techhakathon = document.getElementById("Tech-Hackathon");
const ALL = document.getElementById("All");
const Projectmain = document.getElementById('Project');

function renderSkill() {
    stringHTML = ``
    const skilldb = JSON.parse(localStorage.getItem("Skill")) || [];
    for (let i = 0; i < skilldb.length; i++) {
        stringHTML +=
            `   <li>
                    <a  class="imga" href="" title="${skilldb[i].name}">
                        <img  width="60px";  src="${skilldb[i].image}">
                    </a>
                </li>
       `
    }
    techhakathon.innerHTML = stringHTML;
}
renderSkill();


function renderProfile() {

    let stringProfine = ``
    const projectdb = JSON.parse(localStorage.getItem("Project")) || [];
    for (let j = 0; j < projectdb.length; j++) {
        stringProfine +=

            `  <ul class="Project-Main" id="Project">
            <li class="Project-Details">
                    <img width="375px" height="260px"
                        src="${projectdb[j].image}" alt="full-hd">
                </li>
                <li class="Project-Description">
                    <ul class="PD-child">
                        <li>
                            <p>Project Tile goes here</p>
                        </li>
                        <li class="">
                            <p>${projectdb[j].des}</p>
                        </li>
                        <li>
                            <p>Tech stack : <span> ${projectdb[j].tech} </span></p>
                        </li>
                        <li>
                            <ul class="Project-icon">
                                <li> <a href="${projectdb[j].link}"> <img width="20px" height="20px" src="./akar-icons_link-chain.png" alt="">
                                    <a href="">Live Preview</a>  
                                </li>
                                <li>
                                <li> <a href="${projectdb[j].link}"> <img width="20px" height="20px" src="./akar-icons_github-fill.png" alt="">
                                    <a href="">Viewcode</a> </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                     </ul>   
                 `
    }
    ALL.innerHTML = stringProfine;


}
renderProfile();