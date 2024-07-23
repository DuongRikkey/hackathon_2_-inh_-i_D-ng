const newproduct = document.getElementById("newproduct");
const createbtn = document.getElementsByClassName("create-btn");
const cancel = document.getElementById("cancel");
const creat = document.getElementById("crate");
const noneover = document.getElementById("noneover");
const listcategory = document.getElementsByClassName("list-category");


const namesprojectinput = document.getElementById("namesprojectinput")
const imginput = document.getElementById("imginput")
const techinput = document.getElementById("techinput")
const linkinput = document.getElementById("linkinput")
const desinput = document.getElementById("desinput")
const error1 = document.getElementById("error1")
const error2 = document.getElementById("error2")
const error3 = document.getElementById("error3")
const error4 = document.getElementById("error4")
const error5 = document.getElementById("error5")
const texttotal = document.getElementById("text-total")
let idUpdateGlobal = "add";
let idUd = 0;


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
    const projectname = namesprojectinput.value.trim()
    const projectimg = imginput.value.trim()
    const projecttech = techinput.value.trim()
    const projectlink = linkinput.value.trim()
    const projectdes = desinput.value.trim()
    const projectdb = JSON.parse(localStorage.getItem("Project")) || []
    if (!projectname) {
        error1.innerHTML = "Không để trống vui lòng nhập dữ liệu"
        error1.style.color = "red"
        return;
    }
    // const vitriname = projectdb.findIndex((element) => {
    //     return element.name.toLowerCase() == projectname.toLowerCase()
    // })
    // if (vitriname != -1) {
    //     error1.innerHTML = "Đã trùng tên dự án vui lòng thử lại"
    //     error1.style.color = "red"
    //     return;
    // }

    if (!projectimg) {
        error2.innerHTML = "Không để trống vui lòng nhập dữ liệu"
        error2.style.color = "red"
        return;

    }
    if (!projectlink) {
        error3.innerHTML = "Không để trống vui lòng nhập dữ liệu"
        error3.style.color = "red"
        return;

    }
    if (!projecttech) {
        error4.innerHTML = "Không để trống vui lòng nhập dữ liệu"
        error4.style.color = "red"
        return;

    }
    if (!projecttech) {
        error5.innerHTML = "Không để trống vui lòng nhập dữ liệu"
        error5.style.color = "red"
        return;

    }

    let id = 1;
    if (projectdb.length > 0) {
        id = projectdb[projectdb.length - 1].id + 1
    }
    if (idUpdateGlobal == "add") {

        const smart = {
            id: id,
            name: projectname,
            image: projectimg,
            tech: projecttech,
            link: projectlink,
            des: projectdes,


        };
        projectdb.push(smart)

        localStorage.setItem("Project", JSON.stringify(projectdb));


    }
    else {
        let idUpdateGlobalindex = projectdb.findIndex(e => e.id === idUd);
        projectdb[idUpdateGlobalindex].name = namesprojectinput.value;
        projectdb[idUpdateGlobalindex].image = imginput.value;
        projectdb[idUpdateGlobalindex].tech = techinput.value;
        projectdb[idUpdateGlobalindex].link = linkinput.value;
        projectdb[idUpdateGlobalindex].des = desinput.value;
        idUpdateGlobal = "add";
        localStorage.setItem("Project", JSON.stringify(projectdb))
        namesprojectinput.value = ""
        imginput.value = ""
        techinput.value = ""
        linkinput.value = ""
        desinput.value = ""
        error1.style.display = "none"


    }
    overlay.style.display = "none";
    newproduct.style.display = "none";
    texttotal.innerHTML = "Thêm dự án mới ";
    creat.innerHTML = "Thêm"
    renderProject();
}
function renderProject() {
    const projectdb = JSON.parse(localStorage.getItem("Project")) || []
    let stringProject = "";
    for (let i = 0; i < projectdb.length; i++) {
        stringProject += `
                      <tr>
                      <td>${i + 1}</td>
                      <td>  ${projectdb[i].name}</td>
                      <td>
                        <a href=" ${projectdb[i].link}" >
                        <img  width="60px"
                        src="${projectdb[i].image}"alt="">
                        </a
                    >
                      </td>
                      <td>  ${projectdb[i].tech}</td>
                      <td class="actions">
                        <button onclick = "enterEdit(${projectdb[i].id})" type="button" class="creat-btn">Sửa</button>
                        <button   onclick = "deletecategory(${projectdb[i].id})" type="button" class="delete-btn">Xóa</button>
                      </td>
                    </tr>
        `;

    }
    listcategory[0].innerHTML = stringProject;
}
renderProject()
function deletecategory(idDelete) {
    if (confirm("Bạn có chắc xóa hay không")) {
        const projectdb = JSON.parse(localStorage.getItem("Project")) || []
        let vitri = projectdb.findIndex(element => element.id == idDelete)
        projectdb.splice(vitri, 1)
        localStorage.setItem("Project", JSON.stringify(projectdb))

    }
    renderProject()
}



function enterEdit(idcanedit) {
    const projectdb = JSON.parse(localStorage.getItem("Project")) || []
    let giatri = projectdb.find(function (element) {
        return element.id === idcanedit;
    })
    namesprojectinput.value = giatri.name;
    imginput.value = giatri.image;
    techinput.value = giatri.tech;
    linkinput.value = giatri.link;
    desinput.value = giatri.des;
    idUd = idcanedit;
    idUpdateGlobal = "update"
    overlay.style.display = "block";
    newproduct.style.display = "block";
    texttotal.innerHTML = "Sửa sản phẩm"
    creat.innerHTML = "Sửa"
    return;
}
