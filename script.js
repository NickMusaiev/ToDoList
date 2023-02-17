const inp = document.querySelector(".inp");
const addBtn = document.querySelector(".btn");
const clearBtn = document.querySelector(".clear");
const container = document.querySelector(".container");
let blockHeight = 200;
addBtn.addEventListener("click", function () {

    if (inp.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem("localItem"))
        if (localItems === null) {
            taskList = []

        } else {
            taskList = localItems;
        }
        taskList.push(inp.value)
        localStorage.setItem("localItem", JSON.stringify(taskList));
    }
    showItem()
    doneItems()
    inp.value = "";
})

function showItem() {
    let localItems = JSON.parse(localStorage.getItem("localItem"))
    if (localItems === null) {
        taskList = []

    } else {
        taskList = localItems;
    }


    let out = '';
    let itemShow = document.querySelector(".todoLists");
    taskList.forEach((item, index) => {

        out += `
    <div class="todoList">
    <p class="pText">${item}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">del</button>
    </div>
    `

    })
    itemShow.innerHTML = out;
    container.style.height = blockHeight + 50 * taskList.length + "px";
}
showItem()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem("localItem"))
    taskList.splice(index, 1)
    localStorage.setItem("localItem", JSON.stringify(taskList));
    showItem()
    doneItems()
}

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    showItem()
})
window.onload = doneItems();
function doneItems() {
    let divs_done = document.querySelectorAll(".todoList");
    divs_done.forEach(item => {
        item.onclick = () => {
            item.classList.toggle("done")
        }
    })

}
