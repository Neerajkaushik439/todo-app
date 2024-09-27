let input=document.querySelector("input");

let ul=document.querySelector("ul");
let button=document.querySelector("button");
let cross=document.querySelector("img");
let li = document.querySelector("li");

button.addEventListener("click",addtask);

function showcross(){
    let cross = document.getElementsByClassName('cross');
    cross.style.display = "visible";
}

function hidecross(){
    let cross = document.getElementsByClassName('cross');
    cross.style.display = "hidden";
}


function addtask(){
    if(input.value.trim()!=""){
        let task=input.value;
        let li = document.createElement("li");
        let cross = document.createElement("img");
        cross.src="cross.svg";
        cross.classList.add("cross");
        li.style.marginTop = "4px"
        cross.style.display = "none"
        cross.style.fontSize = "10em"
        li.innerText = task;
        ul.appendChild(li);
        li.appendChild(cross);
        
        
        input.value="";
    
        button.innerHTML="<b>Task added</b>";
        setTimeout(function(){
            button.innerText="Add";
        },500);

        let lis=document.querySelectorAll("li");
        
        li.addEventListener("mouseover",function(){
            cross.style.display="inline-block";
        });
        li.addEventListener("mouseout",function(){
            cross.style.display="none";
        });
        

         
        cross.addEventListener("click",function(){
            
            cross.parentElement.remove();
            
        })
}
}

