//Function to create exposition of games, based on the lists of games' names and its description.
(function createGameExposition() {
    const container = document.getElementById("hall-section");

    for(let i = 0; i < expositionData.length; i++) {
        let gameExposition = document.createElement("div");
        let gameName = document.createElement("h3");
        let gameInfo = document.createElement("p");
        let buttonMore = document.createElement("span");
        buttonMore.setAttribute("class", "material-icons");
        buttonMore.textContent = "read_more";
        buttonMore.addEventListener('click', function() {
            openDetailedGameInfo(buttonMore);
        });
        gameName.textContent = expositionData[i].gameName;
        gameInfo.textContent = expositionData[i].gameInfo;
        gameExposition.appendChild(buttonMore);
        gameExposition.appendChild(gameName);
        gameExposition.appendChild(gameInfo);
        container.appendChild(gameExposition);
    }
})();

function openDetailedGameInfo(button) {
    let title = button.parentElement.children[1].textContent;
    let titleNode = document.createElement("h3");

    let container = document.getElementById("intro-section");
    let background = document.createElement("div");
    let overflowBox = document.createElement("div");
    let closeButton = document.createElement("span");

    closeButton.setAttribute("class", "material-icons");
    closeButton.textContent = "highlight_off";
    closeButton.addEventListener('click', function() {
        container.removeChild(background);
        container.removeChild(overflowBox);
    });

    background.setAttribute("class", "overflow-background");
    background.addEventListener('click', function() {
        container.removeChild(background);
        container.removeChild(overflowBox);
    });

    overflowBox.setAttribute("class", "overflow-box");
    titleNode.textContent = title;

    container.appendChild(background);
    container.appendChild(overflowBox);
    overflowBox.appendChild(titleNode);
    overflowBox.appendChild(closeButton);

    populateOverflowBox(overflowBox);
}

function populateOverflowBox(box) {
    let boxTitle = box.children[0].textContent;
    for(let i = 0; i < expandableData.length; i++) {
        if(boxTitle == expandableData[i].gameName) {
            let genreHeading = document.createElement("h3");
            let releaseDateHeading = document.createElement("h3");
            let creatorHeading = document.createElement("h3");
            let publisherHeading = document.createElement("h3");
            let mainObjectiveHeading = document.createElement("h3");
            let genre = document.createElement("span");
            let releaseDate = document.createElement("span");
            let creator = document.createElement("span");
            let publisher = document.createElement("span");
            let mainObjective = document.createElement("span");

            genreHeading.textContent = "Genre";
            releaseDateHeading.textContent = "Release Date";
            creatorHeading.textContent = "Creator";
            publisherHeading.textContent = "Publisher";
            mainObjectiveHeading.textContent = "Main Objective";

            genre.textContent = expandableData[i].genre;
            releaseDate.textContent = expandableData[i].releaseDate;
            creator.textContent = expandableData[i].creator;
            publisher.textContent = expandableData[i].publisher;
            mainObjective.textContent = expandableData[i].expandInfo;

            box.appendChild(genreHeading);
            box.appendChild(genre);
            box.appendChild(releaseDateHeading);
            box.appendChild(releaseDate);
            box.appendChild(creatorHeading);
            box.appendChild(creator);
            box.appendChild(publisherHeading);
            box.appendChild(publisher);
            box.appendChild(mainObjectiveHeading);
            box.appendChild(mainObjective);
        }
    }
}