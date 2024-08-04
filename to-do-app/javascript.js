
const listitems=document.getElementById("listitems")
const txt=document.getElementById("text1")
function addTask(){
  const tasktext=txt.value.trim();
    if(tasktext!=null){
const val=document.createElement("li");
val.innerHTML=`
<span>${tasktext}</span>
<button onclick="deletelist(this)">delete</button>
`
              
listitems.appendChild(val);
tasktext="";
    }
}
function deletelist(button){
    const valu=button.parentElement;
    listitems.removeChild(valu);

}


