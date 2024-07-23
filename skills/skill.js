const newproduct = document.getElementById("newproduct");
const createbtn = document.getElementsByClassName("create-btn");
const cancel = document.getElementById("cancel");
const creat = document.getElementById("crate");
const noneover = document.getElementById("noneover");
const listcategory = document.getElementsByClassName("list-category");


const nameskillinput = document.getElementById("nameskillinput")
const imginput = document.getElementById("imginput")
const error1 = document.getElementById("error1")
const error2 = document.getElementById("error2")



createbtn[0].onclick = function () {
    overlay.style.display = "block"
    newproduct.style.display = "block"
}
cancel.onclick = function () {
    overlay.style.display = "none"
    newproduct.style.display = "none"
}
noneover.onclick = function () {
    overlay.style.display = "none"
    newproduct.style.display = "none"
}
creat.onclick = function () {
    const skillyname = nameskillinput.value.trim()
    const imginputname = imginput.value.trim()
    const skilldb = JSON.parse(localStorage.getItem("Skill")) || []
    if (!skillyname) {
        error1.innerHTML = "Mời bạn nhập lại"
        return;

    }
    if (!imginputname) {
        error2.innerHTML = "Mời bạn nhập lại"
        return;

    }
    const vitri = skilldb.findIndex((element) => {
        return element.name.toLowerCase() === skillyname.toLowerCase()
    })
    if (vitri !== -1) {
        error1.innerHTML = "Đã có kỹ năng này";
        return;
    }
    let id = 1;
    if (skilldb.length > 0) {
        id = skilldb[skilldb.length - 1].id + 1
    }
    const smart = {
        id: id,
        name: nameskillinput.value,
        image: imginput.value,
        date: skillDate()

    };
    skilldb.push(smart)
    localStorage.setItem("Skill", JSON.stringify(skilldb));
    document.getElementById("nameskillinput").value = "";
    document.getElementById("imginput").value = ""

    renderSkills()


    overlay.style.display = "none";
    newproduct.style.display = "none";

}

function skillDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedTime = dd + '/' + mm + '/' + yyyy;
    return formattedTime;
}

function renderSkills() {
    const skilldb = JSON.parse(localStorage.getItem("Skill")) || []
    let stringHTML = "";
    for (let i = 0; i < skilldb.length; i++) {
        stringHTML += `
                 <tr>
                 
                      <td>${i + 1}</td>
                      <td>${skilldb[i].name}</td>
                      <td>
                       <a  href="${skilldb[i]}">
                        <img
                          width="60px";
                          src="${skilldb[i].image}"
                          alt=""
                        />
                        </a>
                      </td>
                      <td>${skilldb[i].date}</td>
                      <td class="actions">
                        <button onclick="deletecategory(${skilldb[i].id})"
                          type="button"
                          class="delete-btn"
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
        `;

    }
    listcategory[0].innerHTML = stringHTML;
}
renderSkills()
function deletecategory(idDelete) {
    if (confirm("Bạn có chắc xóa hay không")) {
        const skilldb = JSON.parse(localStorage.getItem("Skill")) || []
        let vitri = skilldb.findIndex(element => element.id == idDelete)
        skilldb.splice(vitri, 1)
        localStorage.setItem("Skill", JSON.stringify(skilldb))
        onclick = "deletecategory(${productdb[i].id})"
    }
    renderSkills()
}