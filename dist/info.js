$(document).ready(function(){
    $.each(data, function(i, item) {
        console.log(data[i].url);
        $("#myUL").append('<li><div onclick="location.href='+'stackoverflow.com/questions/2188272/html-how-to-make-an-entire-div-a-hyperlink/2188293'+';" id="smallbox">The content of the div here</div></li>');
        console.log("Appended");
    });
  });


function inpOnFocus(){
    document.getElementById("q").placeholder =">> Word "+
    " >> Section "+
    " >> Skill ";
    

}


function inpOutFocus(){
    document.getElementById("q").placeholder ="Search ...";
}


function searchFx() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    var count = 0;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            count++;
        } else {
            li[i].style.display = "none";
        }
    }
    console.log(count);
    if(count === 0) {
        li[0].style.display ="No Searches Found";
    }
}

function getValue(){
    
    var sel = document.getElementById('myUL');
    //var val= sel.value;
    var opt = sel.options[sel.selectedIndex];
    console.log(opt.value);
    window.location.replace(opt.value);
}


const searchFor = {
    "api": [{ href: "infoPages/apiProgramming1.html#Prerequisites", innerText: "What is an API?" },
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
    const ul = document.getElementById("search");
    ul.innerHTML = "";
    var input = document.getElementById("searchText").value;
    input = input.toLowerCase();
    if (input === "") {
        ul.innerHTML = "";
        return;
    }
    const searchKeys = getKeysArray(input);
    if (searchKeys.length === 0) {
        const li = makeLiAndOptionalAhrefTag();
        ul.appendChild(li);
        return;
    }
    for (searchKey of searchKeys) {
        var searchResults = searchFor[searchKey];
        for (const result of searchResults) {
            const li = makeLiAndOptionalAhrefTag(result.href, result.innerText);
            ul.appendChild(li);
        }
    }
}