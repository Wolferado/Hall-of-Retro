const gamesList = ["DOOM", "QUAKE", "Atari", "Mario"];
const infoList = ["Ha ha, demon go brrrr", "Ha ha, player go whoosh", "Ha ha, player go pew", "Ha ha, player, your princess is in another castle"];


//Function to create exposition of games, based on the lists of games' names and its description.
(function createGameExposition() {
    const container = document.getElementById("hall-section");

    for(let i = 0; i < gamesList.length; i++) {
        let gameExposition = document.createElement("div");
        let gameName = document.createElement("h3");
        let gameInfo = document.createElement("p");
        let buttonMore = document.createElement("span");
        buttonMore.setAttribute("class", "material-icons");
        buttonMore.textContent = "more_horiz";
        buttonMore.addEventListener('click', openDetailedGameInfo);
        gameName.textContent = gamesList[i];
        gameInfo.textContent = infoList[i];
        gameExposition.appendChild(buttonMore);
        gameExposition.appendChild(gameName);
        gameExposition.appendChild(gameInfo);
        container.appendChild(gameExposition);
    }
})();

// TODO: Link to the element, so name can be duplicated and used.
function openDetailedGameInfo() {
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
    overflowBox.setAttribute("class", "overflow-box");
    container.appendChild(background);
    container.appendChild(overflowBox);
    overflowBox.appendChild(closeButton);
}