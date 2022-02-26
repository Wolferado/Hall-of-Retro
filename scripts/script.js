//Function to create exposition of games, based on the lists of games' names and its description.
(function createGameExposition() {
    const container = document.getElementById("hall-section");

    for(let i = 0; i < expositionData.length; i++) {
        let gameExposition = document.createElement("div");
        let gameName = document.createElement("h3");
        let gameInfo = document.createElement("p");
        let buttonMore = document.createElement("span");
        let imagePreview = document.createElement("img");
        buttonMore.setAttribute("class", "material-icons");
        buttonMore.textContent = "read_more";
        buttonMore.addEventListener('click', function() {
            openDetailedGameInfo(buttonMore);
        });
        gameName.textContent = expositionData[i].gameName;
        gameInfo.textContent = expositionData[i].gameInfo;
        imagePreview.src = expositionData[i].image;
        gameExposition.appendChild(buttonMore);
        gameExposition.appendChild(gameName);
        gameExposition.appendChild(gameInfo);
        gameExposition.appendChild(imagePreview);
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
            let infoBox = document.createElement("div");
            infoBox.className = "informational-box";
            let genreHeading = document.createElement("h3");
            let releaseDateHeading = document.createElement("h3");
            let creatorHeading = document.createElement("h3");
            let publisherHeading = document.createElement("h3");
            let mainObjectiveHeading = document.createElement("h3");
            let genre = document.createElement("p");
            let releaseDate = document.createElement("p");
            let creator = document.createElement("p");
            let publisher = document.createElement("p");
            let mainObjective = document.createElement("p");
            let image = document.createElement("img");
            let video = document.createElement("iframe");
            image.src = expandableData[i].image;
            video.src = expandableData[i].videoLink;

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

            infoBox.appendChild(genreHeading);
            infoBox.appendChild(genre);
            infoBox.appendChild(releaseDateHeading);
            infoBox.appendChild(releaseDate);
            infoBox.appendChild(creatorHeading);
            infoBox.appendChild(creator);
            infoBox.appendChild(publisherHeading);
            infoBox.appendChild(publisher);
            infoBox.appendChild(mainObjectiveHeading);
            infoBox.appendChild(mainObjective);
            box.appendChild(infoBox);
            box.appendChild(image);
            box.appendChild(video);
        }
    }
}

// TOP-SECRET
var clicksLeft = 5;
(function enableEasterEggs() {
    let title = document.getElementById("title");
    title.addEventListener('click', function() {
        if(clicksLeft > 0) {
            console.log("Something happened...");
            clicksLeft--;
        }
        else if (clicksLeft == 0) {
            console.log("Sacred input found!");
            clicksLeft--;
        }
        else {
            let input = prompt("Looking for Easter Egg, eh?");
            if(input == 1337) {
                alert("YEET")
            }
            else if(input == "rick") {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ").focus();
            }
        }
    });
})();