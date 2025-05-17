const input=document.getElementById("task-input")
const tasklist=document.getElementById("task-list")
const addbtn=document.getElementById("add-task-btn")


addbtn.addEventListener('click',function ()
{
    const list=document.createElement("li")
    const del=document.createElement("button")
    del.textContent="del"
    del.className="delete-btn";
    list.append(input.value)
    list.appendChild(del)
    tasklist.appendChild(list)
    input.value="";
    del.addEventListener('click',function()
{
    list.remove();
})
list.addEventListener('click',function(event)
{
    if(event.target !== del)
    {
        list.classList.toggle('completed');
    }
})
    
})