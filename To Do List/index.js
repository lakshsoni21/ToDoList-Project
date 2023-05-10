
function update(){

    title = document.getElementById("title").value;
    desc = document.getElementById("description").value;

    if(localStorage.getItem("itemsJson") == null){

        itemsJsonArray = [];

        if(title != ""){
            itemsJsonArray.push([title, desc]);
        }

        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else{
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
        
        if(title != ""){
            itemsJsonArray.push([title, desc]);
        }

        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }

    // Populate the table
    let tableBody = document.getElementById("body");
    let str = "";

    itemsJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        
        <td><button class="btn-primary btn-sm" onclick="deleted(${index})">Delete</button></td>
      </tr>
        `;
    });

    tableBody.innerHTML = str;

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

let add = document.getElementById("add");
let title;
let desc;

add.addEventListener("click", update);
update();

function deleted(index){
    itemsJsonArrayStr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    itemsJsonArray.splice(index, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
    update();
}
function clearStorage(){
    localStorage.clear();
    update();
}