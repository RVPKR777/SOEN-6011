const searchFor = {
    "api": [{ href: "infoPages/apiProgramming1.html#Prerequisites", innerText: "What is an API?" },
    { href: "infoPages/apiProgramming2.html#Roles", innerText: "Robust API" },
    { href: "infoPages/apiProgramming2.html#Roles", innerText: "Robust API" },
    { href: "infoPages/apiProgramming2.html#Roles", innerText: "Robust API" }],
    "apiProgramming": [{ href: "infoPages/apiProgramming1.html#Prerequisites", innerText: "What is an API?" },
    { href: "infoPages/apiProgramming2.html#Roles", innerText: "Robust API" }],
    "html": [{ href: "infoPages/interfaceDesign1.html#Prerequisites", innerText: "HTML" }],
    "maintenance": []
}

const makeLiAndOptionalAhrefTag = (href, innerHTML) => {
    var li = document.createElement("li");
    if (href) {
        li.innerHTML = `<a href=${href}>${innerHTML}</a>`;
    } else {
        li.innerHTML = "Not Found";
    }
    return li;
};

const getKeysArray = (searchKey) => {
    var keys = Object.keys(searchFor);
    var result = keys.filter(key => key.toLowerCase().includes(searchKey));
    return result;
}

const search = () => {
    const ul = document.getElementById("myUL");
    ul.innerHTML = "";
    var input = document.getElementById("inputText").value;
    input = input.toLowerCase();
    if (input === "") {
        ul.innerHTML = "";
        ul.style.display="none";
        return;
    }
    const searchKeys = getKeysArray(input);
    if (searchKeys.length === 0) {
        ul.style.display="block";
        const li = makeLiAndOptionalAhrefTag();
        ul.appendChild(li);
        return;
    }
    for (searchKey of searchKeys) {
        ul.style.display="block";
        var searchResults = searchFor[searchKey];
        for (const result of searchResults) {
            const li = makeLiAndOptionalAhrefTag(result.href, result.innerText);
            ul.appendChild(li);
        }
    }
}

kareaChange = () => {

    var choice= document.getElementById("kareas");
    console.log(choice.value)
    switch(choice.value) {
        case "Construction":
         console.log("Software Construction Selected");
         console.log("Hidding All");
         changeDisplay("1");
        break;

        case "Design":
         console.log("Software Design Selected");
         console.log("Hidding All");
        changeDisplay("2");       
         break;

         case "Testing":
         console.log("Software Testing Selected");
         console.log("Hidding All");
        changeDisplay("3");       
         break;

         case "Requirements":
         console.log("Software Requirements Selected");
         console.log("Hidding All");
        changeDisplay("4");       
         break;

         case "Quality":
         console.log("Software Quality Selected");
         console.log("Hidding All");
        changeDisplay("5");       
         break;

         case "Configuration":
         console.log("Software Configuration Selected");
         console.log("Hidding All");
        changeDisplay("6");       
         break;

         case "Process":
         console.log("Software Process Selected");
         console.log("Hidding All");
        changeDisplay("7");       
         break;

         case "Maintanance":
         console.log("Software Maintanance Selected");
         console.log("Hidding All");
        changeDisplay("8");       
         break;
         
        default:
            var i;
            for(i=1; i<=8;i++)
            document.getElementById(i).style.display= "block";
           
        break;
      }
    
    
    
  }

  changeDisplay=(i)=>{
      debugger;
      var n;
      console.log(i);
      
      for(n=1; n <= 8; n++){
            if(n == i){
                console.log("true");
                document.getElementById(i).style.display= "block";
                continue;
            }
            else{
                console.log("False");
                document.getElementById(n).style.display = "none";
            }
      }



    }