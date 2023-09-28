// Classe Game pour gérer le jeu
class Game {
  constructor() {
    this.turnLeft = 10; // Nombre de tours restants par défaut
    this.characters = []; // Tableau pour stocker les personnages
    this.playersInGame = 0; // Compteur pour garder une trace des joueurs encore en jeu
  }

  // Méthode pour ajouter un personnage au jeu
  addCharacter(character) {
    this.characters.push(character);
    character.game = this; // Référence vers le jeu
    this.playersInGame++;
  }

  createPlayers() {
    const addPlayer = prompt("Voulez-vous ajouter un personnage avant le début de la partie ? (oui/non)");
    
    if (addPlayer.toLowerCase() === "oui") {
      const playerName = prompt("Entrez votre nom :");
      const playerClass = prompt("Choisissez votre classe (Fighter, Paladin, Monk, Berzerker, Assassin, Wizard, ou Archer) :");
      const validPlayerClasses = ["Fighter", "Paladin", "Monk", "Berzerker", "Assassin", "Wizard", "Archer"];
  
      let playerCharacterClass = null;
  
      if (validPlayerClasses.includes(playerClass)) {
        // Trouver la classe de personnage correspondante
        playerCharacterClass = characterClasses.find((c) => c.name === playerClass);
      } else {
        console.log("Classe de personnage non valide. Utilisation de la classe Fighter.");
        // Utiliser la classe Fighter par défaut
        playerCharacterClass = characterClasses.find((c) => c.name === "Fighter");
      }
  
      const humanPlayer = new HumanPlayer(playerName, playerCharacterClass);
      this.addCharacter(humanPlayer);
    }
  
    const enemyClasses = [Fighter, Paladin, Monk, Berzerker, Assassin, Wizard, Archer];
  
    for (let i = 0; i < 4; i++) {
      const enemyClass = enemyClasses[Math.floor(Math.random() * enemyClasses.length)];
  
      // Générez un nom aléatoire pour l'ennemi
      const randomName = randomAINames[Math.floor(Math.random() * randomAINames.length)];
  
      const enemy = new enemyClass(randomName); // Utilisez le nom généré aléatoirement
      this.addCharacter(enemy);
    }
  }

  // Méthode pour vérifier si le jeu est terminé
  isGameOver() {
    return this.turnLeft <= 0 || this.playersInGame <= 1;
  }

  // Méthode pour afficher l'état actuel du jeu
  displayStatus() {
    console.log("État actuel du jeu :");
    this.characters.forEach((character) => {
      console.log(
        `${character.name} (${character.constructor.name}): ${character.hp} PV, ${character.mana} mana, ${
          character.status
        }`
      );
    });
    console.log(`Tours restants : ${this.turnLeft}`);
  }

  // Méthode pour exécuter un tour de jeu
  playTurn() {
    if (!this.isGameOver()) {
      console.log("========================================");
      console.log(`           Tour ${11 - this.turnLeft}           `);
      console.log("========================================");
      this.characters.forEach((character) => {
        if (!this.isGameOver()) {
          character.play();
        }
      });
      this.displayStatus();
      this.turnLeft--;
      if (this.turnLeft === 0) {
        console.log("========================================");
        console.log("      🎮  Le jeu est terminé !  🎮      ");
        console.log("========================================");
        const remainingPlayers = this.characters.filter((character) => character.status === "playing");
        if (remainingPlayers.length === 1) {
          console.log(`Le joueur gagnant est ${remainingPlayers[0].name} (${remainingPlayers[0].constructor.name}) \x1b[31m👑\x1b[0m !`);
        } else {
          console.log("Le jeu se termine sans vainqueur.");
        }
      }
    }
  }

  // Méthode pour démarrer le jeu
  startGame() {
    console.log("========================================");
    console.log("     \x1b[33m🎮 RPG THP 🎮\x1b[0m      ");
    console.log("========================================");
    this.createPlayers();
    this.displayStatus();
    while (!this.isGameOver()) {
      this.playTurn();
    }
  }
}

// Tableau des classes de personnages
const characterClasses = [
  { name: "Fighter", hp: 12, mana: 40, dmg: 4 },
  { name: "Paladin", hp: 16, mana: 160, dmg: 3 },
  { name: "Monk", hp: 8, mana: 200, dmg: 2 },
  { name: "Berzerker", hp: 8, mana: 0, dmg: 4 },
  { name: "Assassin", hp: 6, mana: 20, dmg: 6 },
  { name: "Wizard", hp: 10, mana: 200, dmg: 2 },
  { name: "Archer", hp: 8, mana: 80, dmg: 3 },
];


export default Game;
