
//All the main buttons:
document.getElementById('add_button').onclick = addTask;
document.querySelector('#delete_all_button').onclick = deleteAllTasks;
document.querySelector('#delete_selected').onclick = deleteSelectedTasks;

// When the enter is pressed in TaskInput, add the writed task.
document.querySelector("#task_input").addEventListener("keyup", event => {
    if(event.key === "Enter") document.querySelector("#add_button").click();; 
});

//It allows to delete all checked Task.
function deleteSelectedTasks(){
    let allTask = Array.from(document.querySelectorAll('.task')).filter(e => e.firstElementChild.checked == true);
    if(allTask.length === 0) return;
    for(let e of allTask){
        deleteTaskAnimation(e);
    }
    setTimeout(function() {//Using timeOut to remove the elemnts after the animations.
        for(let e of allTask){
            e.remove();
        }
    }, 500);
}

//It allow to delete all the tasks that were added.
function deleteAllTasks(){
    let tasks = Array.from(document.querySelectorAll('.task'));
    for(let e of tasks){
        deleteTaskAnimation(e);
    }
    setTimeout(function() {//Using timeOut to remove the elemnts after the animations.
        for(let e of tasks){
            e.remove();
        }
    }, 500);
}

//It allows to add a task.
function addTask(){
    let textTaskInput = document.getElementById('task_input');  //Get the text of the input.

    //If the text field is empty, then it will alert the user.
    if (textTaskInput.value.toString().trim().length === 0) {
        alert('There is no text in the input.');
        return;
    }

    let textContainer = document.getElementById('task_container');  //Get the content where the tasks are.

    //Create and configurate the task:

    //Create and configurate the li element:
    let newTask = document.createElement('li');
    newTask.setAttribute('class', 'task');
    
    //Create and configurate the input checkbox:
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox'
    checkBox.addEventListener('click', function(){
        checkBox.disabled=true;
        newTask.style.backgroundColor = "#36393a";
        newTask.style.color = '#e9e9e9';
    })

    //Creates the text element of the task:
    let textTask = document.createElement('p'); 
    textTask.setAttribute('class', 'text_task');
    let nodeText = document.createTextNode(textTaskInput.value.toString()); //Get the text.
    textTask.append(nodeText);      //The text is added to the 'p' element.
    newTask.appendChild(checkBox);  //The check box is added to the new Task element.
    newTask.appendChild(textTask);  //The text of the task is added to the new Task element.

    addTaskAnimation(newTask);  //Play the animation.
    textContainer.appendChild(newTask); //The element is added

    textTaskInput.value = "";   //Reset the text field.
}

//Animation when the user delete a task.
function deleteTaskAnimation(e){
    gsap.to(e, {
        opacity: 0,
        duration: 0.5,
        x: 200,
    })
}

//Animation when the user add a task
function addTaskAnimation(e){
    gsap.fromTo(e, {
        opacity: 0,
        x: -200,
    }, {
        opacity: 1,
        x: 0,
        duration: 0.5
    })
}