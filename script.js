
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
    <h5 class="card-title">${theIndex+1}. ${toDoActivity}</h5>
    <button class= "btn btn-outline-success btn-sm col-3 mx-1 ms-3" onclick="deleteToDo(${theIndex})">Done Task</button>
    <button class= "btn btn-warning btn-sm col-3 mx-1 " data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="editToDo(${theIndex})">Edit Task</button>  
    </div>
    </div>
    `
  })
}

const mainAddToDo = () => {
  let userinput = document.getElementById("mainToDoInput").value

  if (userinput === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Enter ToDo Activity"
  } else{
    toDo.push(userinput)
    document.getElementById("mainToDoInput").value = ""
    arrayOperation()
  }

}


const deleteToDo = (theIndex) =>{
  let confirmation = window.confirm("This Action Will Remove Task From The List")

  if (confirmation === true){
    toDo.splice(theIndex,1)
    arrayOperation()
  }
}

let getIndex;
const editToDo = (theIndex) =>{
  getIndex = theIndex
  let taskToEdit = toDo[theIndex] 

  document.getElementById("editModalInput").value = taskToEdit
}

const editModal = () => {
  let userInput = document.getElementById("editModalInput").value
  toDo.splice(getIndex, 1, userInput)
  arrayOperation()
}


const addToFirst = () =>{
  let userinput = document.getElementById("addFirstInput").value

  if (userinput === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Enter ToDo Activity"
  } else{
    toDo.unshift(userinput)
    document.getElementById("addFirstInput").value = ""
    arrayOperation()
  }
}


const addToLast = () =>{
  let userinput = document.getElementById("addLastInput").value

  if (userinput === ""){
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Enter ToDo Activity"
  } else{
    toDo.push(userinput)
    document.getElementById("addLastInput").value = ""
    arrayOperation()
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
