const newTask=document.getElementById("text");
const olit=document.getElementById("items");

function addTask(){
    if(newTask.value==''){
        alert("Enter Atleast One Task");
    }
    else{
        console.log(newTask.value);
        const newnode=document.createElement("li");
        newnode.classList.add('list-group');
        const text=document.createElement("span");
        text.classList.add('list-group-item','list-group-item-action');
        const textnode=document.createTextNode(newTask.value.trim());
        text.appendChild(textnode);
        text.addEventListener('click',(e)=>{
            e.target.classList.toggle('strike');
        });
        const icon=document.createElement("span");
        icon.classList.add("close");
        icon.innerHTML='&times;';
        icon.addEventListener('click',(e)=>{
            const li=e.target.parentElement;
            li.parentElement.removeChild(li);
        });
        newnode.appendChild(text);
        text.appendChild(icon);
        olit.appendChild(newnode);
        newTask.value='';

    }
}

