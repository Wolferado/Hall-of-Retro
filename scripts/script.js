const gamesList = ["DOOM", "QUAKE"];

/**
 * Function to create exposition of games, based on the lists of games' names and its description.
 * @param namesList List of games' names that will be added.
 * @param infoList Collection of information that will be located under the game upon creation.  
 */
function createGameExposition(namesList, infoList) {
    const container = document.getElementById("hall-section");

    namesList.forEach(element => {
        let gameExposition = document.createElement("div");
        let gameName = document.createElement("h3");
        gameName.textContent = element;
        gameExposition.appendChild(gameName);
        container.appendChild(gameExposition);
    });
}

createGameExposition(gamesList);