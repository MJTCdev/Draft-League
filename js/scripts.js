function newTeams() {
  var amountOfTeams = document.querySelector("input").value;
  var boxOfTeams = document.getElementById("boxOfTeams");

  if (amountOfTeams === "") {
    alert("You must enter a number!");
  } else {
    for (i = 1; i <= amountOfTeams; i++) {
      var newTeam = document.createElement("div");
      var h1 = document.createElement("h1");
      h1.innerHTML = "Team " + i;

      boxOfTeams.appendChild(newTeam);
      newTeam.setAttribute("id", "newTeam" + i);
      var targetTeam = document.getElementById("newTeam" + i);
      targetTeam.appendChild(h1);

      var inputPokemon = document.createElement("input");
      inputPokemon.setAttribute("type", "text");
      inputPokemon.setAttribute("id", "pokemonName" + i);
      inputPokemon.setAttribute("class", "pokemonInput");
      inputPokemon.setAttribute("placeholder", "Enter Pokemon Name");
      targetTeam.appendChild(inputPokemon);

      var button = document.createElement("button");
      button.innerHTML = "Add";
      button.setAttribute("type", "submit");
      button.setAttribute("class", "button");
      button.setAttribute("onclick", "newItem(this.id)");
      button.setAttribute("id", "addButton" + i);
      targetTeam.appendChild(button);

      var party = document.createElement("ol");
      party.setAttribute("id", "party" + i);
      targetTeam.appendChild(party);
    }
  }
}

function newItem(buttonId) {
  let idString = String(buttonId);
  let number = idString.charAt(idString.length - 1);

  var mainList = document.querySelector("#party" + number);
  var listItem = document.createElement("li");
  var listValue = document.querySelector("#pokemonName" + number).value;
  listItem.append(listValue);

  if (listValue === "") {
    alert("You must write something!");
  } else {
    mainList.append(listItem);
  }

  function crossOut() {
    listItem.classList.toggle("strike");
  }
  listItem.ondblclick = function crossOut() {
    listItem.classList.toggle("strike");
  };

  let crossOutButton = document.createElement("button");
  crossOutButton.append(document.createTextNode("X"));
  crossOutButton.setAttribute("id", "xbutton");
  listItem.append(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);

  function deleteListItem() {
    listItem.remove();
  }

  let pokemonInput = document.querySelector(".pokemonInput");
  pokemonInput.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        newItem(this.id);
      }
    },
    false
  );
}

let input = document.getElementById("input");
input.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();

      newTeams();
    }
  },
  false
);
