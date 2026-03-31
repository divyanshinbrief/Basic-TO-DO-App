//  This is a new feature and I am adding (New Change) it to the project in Feature2 branch.

// Dom manipulation for Todo App


let list = [];
let button = document.querySelector("button");
let input = document.querySelector("input");
let listContainer = document.getElementById("listContainer");

//Filter Button And Select Input 
let filterButton = document.querySelector("#filter button");
let selectedFilter = document.querySelector("#Filter");



// event input + enter key
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
//event for addTask button 
button.addEventListener("click", addTask);
// event for Filter Button
filterButton.addEventListener("click", function(){
    if(selectedFilter.value=="All") showlists();
    else if(selectedFilter.value=="Completed") showCompletedList();
    else if(selectedFilter.value=="notCompletedYet") showNotCompletedList();
});


 
function addTask() {
    if (input.value == "") return;
    let taskPair=[input.value,0]
    list.push(taskPair)
    input.value = "";
    showlists();
}

function handleCheck(index, checkbox) {
    list[index][1] = checkbox.checked ? 1 : 0;
    console.log(`Task ${index + 1} status updated: ${list[index][1]}`);
}

function editItem(index) {
    const currentValue = list[index];
    const newValue = prompt("Edit your task:");
    console.log("User input:", newValue); // See what’s actually captured

    if (newValue !== null && newValue.trim() !== "") {
        list[index][0] = newValue.trim();
        showlists();
    }
}





// Dynamically Printing the list 
function showlists() {
    listContainer.innerHTML = "";
    list.map((item, i) => {
        listContainer.insertAdjacentHTML("beforeend",
            `<div class="item" id="${i}">
                <p id="para">${item[0]}</p>
                <div class="actions">
                    <input type="checkbox" class="check" ${item[1] ? 'checked' : ''} onchange="handleCheck(${i}, this)">
                    <button onclick="editItem(${i})">Edit</button>
                </div>
            </div>`);


    })
}

function showCompletedList(){
    listContainer.innerHTML = "";
    list.map((item, i) => {
       if(item[1]==1){
        listContainer.insertAdjacentHTML("beforeend",
            `<div class="item" id="${i}">
                <p id="para">${item[0]}</p>
                <div class="actions">
                    <input type="checkbox" class="check" ${item[1] ? 'checked' : ''} onchange="handleCheck(${i}, this)">
                    <button onclick="editItem(${i})">Edit</button>
                </div>
            </div>`);
       }
    })
}

function showNotCompletedList(){
    listContainer.innerHTML = "";
    list.map((item, i) => {
        if(item[1]==0){
         listContainer.insertAdjacentHTML("beforeend",
             `<div class="item" id="${i}">
                 <p id="para">${item[0]}</p>
                 <div class="actions">
                     <input type="checkbox" class="check" ${item[1] ? 'checked' : ''} onchange="handleCheck(${i}, this)">
                     <button onclick="editItem(${i})">Edit</button>
                 </div>
             </div>`);
        }
     })
}






