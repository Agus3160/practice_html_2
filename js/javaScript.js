
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


function addTask(){
    let textTaskInput = document.getElementById('task_input');

    if (textTaskInput.value.toString().trim().length === 0) {
        alert('There is no text in the input.');
        return;
    }

    let textContainer = document.getElementById('task_container');

    let newTask = document.createElement('li');
    newTask.setAttribute('class', 'task');

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox'

    checkBox.addEventListener('click', function(){
        checkBox.disabled=true;
        newTask.style.backgroundColor = "#36393a";
        newTask.style.color = '#e9e9e9';
    })

    let textTask = document.createElement('p');
    textTask.setAttribute('class', 'text_task');
    let nodeText = document.createTextNode(textTaskInput.value.toString());
    textTask.append(nodeText);

    newTask.appendChild(checkBox);
    newTask.appendChild(textTask);

    addTaskAnimation(newTask);

    textContainer.appendChild(newTask);

    textTaskInput.value = "";
}

function deleteTaskAnimation(e){
    gsap.to(e, {
        opacity: 0,
        duration: 0.5,
        x: 200,
    })
}

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