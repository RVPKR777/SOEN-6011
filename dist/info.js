const searchFor = {
    "api": [{href: "infoPages/apiProgramming1.html#Prerequisites", innerText: "What is an API?"},
        {href: "infoPages/apiProgramming2.html#Roles", innerText: "Robust API"},
        {href: "infoPages/apiProgramming2.html#Roles", innerText: "Robust API"},
        {href: "infoPages/apiProgramming2.html#Roles", innerText: "Robust API"}],
    "apiProgramming": [{href: "infoPages/apiProgramming1.html#Prerequisites", innerText: "What is an API?"},
        {href: "infoPages/apiProgramming2.html#Roles", innerText: "Robust API"}],
    "html": [{href: "infoPages/interfaceDesign1.html#Prerequisites", innerText: "HTML"}],
    "maintenance": []
}

const makeLiAndOptionalAhrefTag = (href, innerHTML) => {
    const li = document.createElement("li");
    if (href) {
        li.innerHTML = `<a href=${href}>${innerHTML}</a>`;
    } else {
        li.innerHTML = "Not Found";
    }
    return li;
};

const getKeysArray = (searchKey) => {
    const keys = Object.keys(searchFor);
    return keys.filter(key => key.toLowerCase().includes(searchKey));
}

const search = () => {
    const ul = document.getElementById("myUL");
    ul.innerHTML = "";
    let input = document.getElementById("inputText").value;
    input = input.toLowerCase();
    if (input === "") {
        ul.innerHTML = "";
        ul.style.display = "none";
        return;
    }
    const searchKeys = getKeysArray(input);
    if (searchKeys.length === 0) {
        ul.style.display = "block";
        const li = makeLiAndOptionalAhrefTag();
        ul.appendChild(li);
        return;
    }
    for (let searchKey of searchKeys) {
        ul.style.display = "block";
        let searchResults = searchFor[searchKey];
        for (const result of searchResults) {
            const li = makeLiAndOptionalAhrefTag(result.href, result.innerText);
            ul.appendChild(li);
        }
    }
}

kareaChange = () => {
    const choice = document.getElementById("kareas");
    switch (choice.value) {
        case "Construction":
            changeDisplay("1");
            break;

        case "Design":
            changeDisplay("2");
            break;

        case "Testing":
            changeDisplay("3");
            break;

        case "Requirements":
            changeDisplay("4");
            break;

        case "Quality":
            changeDisplay("5");
            break;

        case "Configuration":
            changeDisplay("6");
            break;

        case "Process":
            changeDisplay("7");
            break;

        case "Maintanance":
            changeDisplay("8");
            break;

        default:
            for (let i = 1; i <= 8; i++)
                document.getElementById(i).style.display = "block";
            break;
    }
}

changeDisplay = (i) => {
    for (let n = 1; n <= 8; n++) {
        if (n === i) {
            document.getElementById(i).style.display = "block";
        } else {
            document.getElementById(n).style.display = "none";
        }
    }
}
