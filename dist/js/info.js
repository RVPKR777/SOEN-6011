const searchFor = {
    "api": [{href: "../infoPages/apiProgramming1.html#3", innerText: "What is an API?"}, {href: "../infoPages/apiProgramming1.html#3", innerText: "Types of API"},
        {href: "../infoPages/apiProgramming1.html#8", innerText: "Real World Example of API"}, {href: "../infoPages/apiProgramming1.html#10", innerText: "API Development Tools"},
        {href: "..infoPages/apiProgramming1.html#10", innerText: "OpenAPI Specification"}],
    "request response": [{href: "../infoPages/apiProgramming1.html#3", innerText: "Request Response"}],
    "get post put delete patch head options trace connect": [{href: "../infoPages/apiProgramming1.html#3", innerText: "Types of Request"}],
    "xml yaml json": [{href: "../infoPages/apiProgramming1.html#3", innerText: "Request Response Format"}],
    "sha oauth2 jwt ssl": [{href: "../infoPages/apiProgramming1.html#7", innerText: "Security for API"}],
    "rest soap wadl wsdl": [{href: "../infoPages/apiProgramming1.html#3", innerText: "REST SOAP API"}],
    "postman soapui swagger documentation": [{href: "../infoPages/apiProgramming1.html#10", innerText: "API Development Tools"}],
    "html": [{href: "../infoPages/interfaceDesign1.html#Prerequisites", innerText: "HTML"}],
    "testing unit test": [{href: "../infoPages/Software_testing1.html#1", innerText: "Unit Testing"}, {
        href: "../infoPages/Software_testing1.html#2",
        innerText: "Types of Unit Testing"
    }, {href: "../infoPages/Software_testing1.html#2", innerText: "Automated Unit Testing"}, {
        href: "../infoPages/Software_testing1.html#2",
        innerText: "Manual Unit Testing"
    }],
    "automated": [{href: "../infoPages/Software_testing1.html#2", innerText: "Automated Unit Testing"}],
    "software": [{href: "../infoPages/Software_testing1.html#2", innerText: "Software Testing"}],
    "manual": [{href: "../infoPages/Software_testing1.html#2", innerText: "Manual Unit Testing"}],
    "tools": [{href: "../infoPages/Software_testing3.html#10", innerText: "Unit testing Tools"}]
};

const makeLiAndOptionalAhrefTag = (href, innerHTML, liInnerHtml) => {
    const li = document.createElement("li");
    if (href) {
        li.innerHTML = `<a href=${href}>${innerHTML}</a>`;
    } else {
        li.innerHTML = liInnerHtml;
    }
    return li;
};

const makeAhrefTagForBookmark = (key) => {
    const ahref = document.createElement("a");
    const bookmarkDetails = JSON.parse(localStorage.getItem(key));
    console.log(bookmarkDetails);
    ahref.href = bookmarkDetails.bookmarkLink;
    ahref.innerHTML = bookmarkDetails.bookmarkName;
    return ahref;
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
    if (input === "" || input.length < 2) {
        ul.innerHTML = "";
        ul.style.display = "none";
        return;
    }
    const searchKeys = getKeysArray(input);
    if (searchKeys.length === 0) {
        ul.style.display = "block";
        const li = makeLiAndOptionalAhrefTag(null, null, "No Search Results Found for the Specified Search Query");
        ul.appendChild(li);
        return;
    }
    for (let searchKey of searchKeys) {
        ul.style.display = "block";
        let searchResults = searchFor[searchKey];
        for (const result of searchResults) {
            const li = makeLiAndOptionalAhrefTag(result.href, result.innerText, null);
            ul.appendChild(li);
        }
    }
}

const currentTheme = localStorage.getItem('theme');

$(document).ready(function () {
    if (currentTheme === "light") {
        $(".label").css('color', 'black');
        $('input[type="checkbox"]').prop('checked', false);
    }
    if (currentTheme === "dark") {
        $(document.body).toggleClass("dark-mode");
        $(".label").css('color', 'white');
        $('input[type="checkbox"]').prop('checked', true);

    }

    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked")) {
            var element = document.body;
            element.classList.toggle("dark-mode");
            $(".label").css('color', 'white');
            localStorage.setItem('theme', 'dark');
        } else {
            $(".label").css('color', 'black');
            $(document.body).removeClass("dark-mode");
            localStorage.setItem('theme', 'light');
        }
    });
});

function myFunction() {
    if (document.getElementById("day_night").checked) {
    } else {
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
            let i;
            for (i = 1; i <= 8; i++)
                document.getElementById(i).style.display = "block";
            break;
    }
}

changeDisplay = (i) => {
    let n;
    for (n = 1; n <= 8; n++) {
        if (n == i) {
            document.getElementById(i).style.display = "block";
        } else {
            console.log("False");
            document.getElementById(n).style.display = "none";
        }
    }
}

const manageBookmark = (bookmarkKey, bookmarkLink, bookmarkName, buttonId) => {
    const button = document.getElementById(buttonId);
    if (localStorage.getItem(bookmarkKey)) {
        localStorage.removeItem(bookmarkKey);
        button.value = "Add Bookmark";
        button.className = "btn btn-link";
        return;
    }
    localStorage.setItem(bookmarkKey, JSON.stringify({bookmarkLink, bookmarkName}));
    button.value = "Remove Bookmark";
    button.className = "btn btn-warning";
};

const renderBookmarkList = () => {
    const div = document.getElementById("bookmarkDropdown");
    div.innerHTML = "";
    const localStorageKeys = Object.keys(localStorage);
    if (localStorageKeys.length === 1 && localStorage.getItem("theme")) {
        const li = makeLiAndOptionalAhrefTag(null, null, "No Bookmarks Found");
        div.appendChild(li);
    } else {
        for (let key of localStorageKeys) {
            if (key !== "theme") {
                console.log(key);
                const ahref = makeAhrefTagForBookmark(key);
                div.appendChild(ahref).className = "dropdown-item";
            }
        }
    }
};
