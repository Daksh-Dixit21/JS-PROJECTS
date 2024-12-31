const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");
function addTask(){
    if(inputBox.value === ''){
        alert("You didn't enter anything");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//cross icon
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
    inputBox.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          document.getElementById('add-button').click();
          addButton.classList.add('temp-color');
          setTimeout(function() {
            addButton.classList.remove('temp-color');
          }, 150);
        }
      });
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();