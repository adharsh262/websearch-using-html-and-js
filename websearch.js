let outputcontainerEl = document.getElementById("searchResults");
let inputsearchEl = document.getElementById("searchInput");

let spinnerEl = document.getElementById("spinner");

function createAndAppendItem(result) {
    let {
        title,
        link,
        description
    } = result;
    // to create a div coontainer
    let resultEl = document.createElement("div");
    resultEl.classList.add("result-item");
    outputcontainerEl.appendChild(resultEl);


    // to create a title
    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultEl.appendChild(titleEl);

    // to create a br element
    let braketitle = document.createElement("br");
    resultEl.appendChild(braketitle);

    // to create a link
    let linkEl = document.createElement("a");
    linkEl.href = link;
    linkEl.target = "_blank";
    linkEl.textContent = link;
    linkEl.classList.add("result-url");
    resultEl.appendChild(linkEl);

    // to create a br element
    let brakelink = document.createElement("br");
    resultEl.appendChild(brakelink);

    // to create a discription
    let paraEl = document.createElement("p");
    paraEl.href = link;
    paraEl.target = "_blank";
    paraEl.textContent = description;
    paraEl.classList.add("link-description");
    resultEl.appendChild(paraEl);
}


function displaySearchResults(searchResults) {
    spinnerEl.classList.add("d-none");
    for (let result of searchResults) {
        createAndAppendItem(result);

    }
}


function searchWiki(event) {
    if (event.key === "Enter") {
        let enteredValue = inputsearchEl.value;
        spinnerEl.classList.remove("d-none");
        outputcontainerEl.textContent = "";


        let url = "https://apis.ccbp.in/wiki-search?search=" + enteredValue;
        let options = {
            method: "GET",
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            }).then(function(jsondata) {
                let {
                    search_results
                } = jsondata;

                displaySearchResults(search_results);

            });

    }

}

inputsearchEl.addEventListener("keydown", searchWiki)
