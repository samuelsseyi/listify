
let toDo = [];


function arrayOperation() {

  cardDiv.innerHTML = toDo
  cardDiv.innerHTML = ""

  document.getElementById("cardDiv").style.display = "block"
  document.getElementById("errorDiv").style.display = "none"

  toDo.map((toDoActivity, theIndex) =>{
    cardDiv.innerHTML +=`
    <div class="card mx-auto my-3" >     
    <div class="card-body">
    <h5 class="card-title fs-4">${theIndex+1}. ${toDoActivity.userInput}</h5>
    <h5 class="card-title fs-5 ps-4">${toDoActivity.userDesp}</h5>
    <button class= "btn btn-outline-success btn-sm col-3 mx-1 ms-3" onclick="taskDone(${theIndex})">Task Done</button>
    <button class= "btn btn-warning btn-sm col-3 mx-1 " data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="editToDo(${theIndex})">Edit Task</button>  
    </div>
    </div>
    `
  })
}

const mainAddToDo = () => {
  let userInput = document.getElementById("mainToDoInput").value
  let userDesp = document.getElementById('floatingTextarea2').value
  if (userInput === "" || userDesp === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Enter ToDo Activity and Description"
  } else{
    let userTask = {userInput,userDesp}
    console.log(userTask);
    toDo.push(userTask)
    arrayOperation()
    document.getElementById("mainToDoInput").value = ""
    document.getElementById("floatingTextarea2").value = ""
  }
}


const taskDone = (theIndex) =>{
  let confirmation = window.confirm("This Action Will Remove The Task From The List")

  if (confirmation === true){
    toDo.splice(theIndex,1)
    arrayOperation()
  }
}

let getIndex;
const editToDo = (theIndex) =>{
  getIndex = theIndex
  

  document.getElementById("editModalInput").value = toDo[theIndex.userInput]
  document.getElementById("editModalInputDesp").value = toDo[theIndex.userDesp]
}


const editModal = () => {
  let userInput = document.getElementById("editModalInput").value
  let userDesp = document.getElementById("editModalInputDesp").value

  let userTask = {userInput, userDesp}
  toDo.splice(getIndex, 1, userTask)
  arrayOperation()

  document.getElementById("editModalInput").value = ""
  document.getElementById("editModalInputDesp").value = ""
}


const addToFirst = () =>{
  let userInput = document.getElementById("addFirstInput").value
  let userDesp = document.getElementById("addFirstInputDesp").value

  if (userInput === "" || userDesp === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Enter ToDo Activity and Description"
  } else{
    let userTask = {userInput, userDesp}
    toDo.unshift(userTask)
    arrayOperation()
    document.getElementById("addFirstInput").value = ""
    document.getElementById("addFirstInputDesp").value = ""
  }
}


const addToLast = () =>{
  let userInput = document.getElementById("addLastInput").value
  let userDesp = document.getElementById("addLastInputDesp").value

  if (userInput === "" || userDesp === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Enter ToDo Activity and Description"
  } else{
    let userTask = {userInput, userDesp}
    toDo.push(userTask)
    arrayOperation()
    document.getElementById("addLastInput").value = ""
    document.getElementById("addLastInputDesp").value = ""
  }
}


const deleteFirstTask = () => {
  if (toDo.length == 0){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "You Haven't Added Any Tasks"
  } else{
    let confirmation = window.confirm ("Are You Sure You Want To Delete The First Task?")

    if (confirmation === true){
      toDo.shift()
      arrayOperation()
    }
  }
}



const deleteLastTask = () => {
  if (toDo.length == 0){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "You Haven't Added Any Tasks"
  } else{
    let confirmation = window.confirm ("Are You Sure You Want To Delete The First Task?")

    if (confirmation === true){
      toDo.pop()
      arrayOperation()
    }
  }
}





const deleteAllTask = () => {
  if (toDo.length == 0){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "You Haven't Added Any Tasks"
  } else{
    let confirmation = window.confirm ("Are You Sure You Want To Delete All Tasks On Your List?")

    if (confirmation === true){
      toDo.splice(0, toDo.length)
      arrayOperation()
    }
  }
}
