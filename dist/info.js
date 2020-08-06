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