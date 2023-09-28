class HumanPlayer extends Character {
  constructor(name, characterClass) {
    // Appelez le constructeur de la classe mère en passant les valeurs nécessaires
    super(characterClass.hp, characterClass.mana, characterClass.dmg);
    this.name = name;
    this.characterClass = characterClass;
  }

  chooseAction(cible) {
    const actionChoice = prompt(`${this.name} (${this.constructor.name}), choisissez votre action :\n1. Attaque normale\n2. Attaque spéciale`);
    if (actionChoice === "1") {
      const degatsInfliges = this.attaque(cible); // Récupère les dégâts infligés
      console.log(`${this.name} (${this.constructor.name}) attaque ${cible.name} (${cible.constructor.name}) avec une attaque normale pour ${degatsInfliges} points de dégâts.`);
    } else if (actionChoice === "2") {
      this.attaqueSpeciale(cible);
    } else {
      console.log("Choix d'action non valide. Utilisation de l'attaque normale.");
      const degatsInfliges = this.attaque(cible); // Récupère les dégâts infligés
      console.log(`${this.name} (${this.constructor.name}) attaque ${cible.name} (${cible.constructor.name}) avec une attaque normale pour ${degatsInfliges} points de dégâts.`);
    }
  }
}

export default HumanPlayer;
import Character from './Character.js'; // Assurez-vous que le chemin d'accès est correct
