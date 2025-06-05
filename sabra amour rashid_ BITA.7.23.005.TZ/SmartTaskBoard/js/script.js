  function tasky(){
        let tasks = document.getElementById("task").value
          if(tasks === ""){
            alert("task cannot be epmty")
          }else{
            console.log("thats right")
          }
     }

     let myButton = document.querySelector("button");
     myButton.addEventListener("Click",describe)

     let para = document.createElement("p")
     para.TextContext=("Review Project <br> Priority:<bold>High</bold>")

     function describe(){
        let description = document.getElementById("myDesc")
        description.replaceChild("para","description")
        
     }