const todo = ["Go Gym", "Go Class"];

function addTodo(){
    if(document.querySelector("input").value === "") return true;
    todo.push(document.querySelector("input").value);
    render();
    document.querySelector("input").value = "";
}

function deleteList(num){
    todo.splice(num, 1);
    render();
}

function render(){
    document.querySelector("ol").innerHTML = "";
    for(let i = 0; i < todo.length; i++){
        const element = createTodoComponent(todo[i], i);
        document.querySelector("ol").appendChild(element);
    }
}

function createTodoComponent(todos, num){
    const newElement = document.createElement("li");
    newElement.id = `work${num}`;
    newElement.innerHTML = `
        <span>${todos}</span>
        <button onclick="deleteList(${num})"><img src="delete.png" alt="Delete Image" width="20px" /></button>
    `;

    return newElement;
}