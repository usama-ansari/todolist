window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert('Please Enter the Task');
            return;
        }
        else{
            const task_el = document.createElement("div");
            task_el.classList.add("task");
            
            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
            
            
            const taskInputEl = document.createElement("input");
            taskInputEl.classList.add("text");
            taskInputEl.type="text";
            taskInputEl.value=task;
            taskInputEl.setAttribute("readonly","readonly");
            
            task_content_el.appendChild(taskInputEl);
            task_el.appendChild(task_content_el);
            list_el.appendChild(task_el);





            const taskActionEl = document.createElement("div");
            taskActionEl.classList.add("actions");
            
            const taskEditEl = document.createElement("button");
            taskEditEl.classList.add("edit");
            taskEditEl.innerHTML = "edit";

            const taskDeleteEl = document.createElement("button");
            taskDeleteEl.classList.add("delete");
            taskDeleteEl.innerHTML = "Delete";
            
            taskActionEl.appendChild(taskEditEl);
            taskActionEl.appendChild(taskDeleteEl);

            task_el.appendChild(taskActionEl);


            input.value = "";

            taskEditEl.addEventListener('click',()=> {
                if(taskEditEl.innerText.toLowerCase() == "edit"){
                taskInputEl.removeAttribute('readonly');
                taskInputEl.focus();
                taskEditEl.innerHTML="Save";
            }else{
                taskInputEl.setAttribute("readonly","readonly");
                taskEditEl.innerText = "Edit";
            }
                 
            })
        }
    })
})  