import Game from "./Game.js";
import Character from "./character.js";
import HumanPlayer from "./HumanPlayer.js";
import Fighter from "./Fighter.js";
import Paladin from "./Paladin.js";
import Monk from "./Monk.js";
import Berzerker from "./Berzerker.js";
import Assassin from "./Assassin.js";
import Wizard from "./Wizard.js";
import Archer from "./Archer.js";

const randomAINames = ["Orc", "Troll", "Goblin", "Skeleton", "Dragon", "Witch", "Warlock", "Vampire", "Zombie", "Specter"];

// Création de l'instance de jeu
const game = new Game();

// Démarrage du jeu
game.startGame();