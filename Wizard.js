class Wizard extends Character {
  constructor(name) {
    super(10, 200, 2); // Initialisez les PV, mana et dégâts ici
    this.name = name; // Utilisez le nom passé en argument pour définir le nom du personnage
  }

  chooseAction(cible) {
    if (this.mana >= 25) {
      this.attaqueSpeciale(cible);
    } else {
      this.attaque(cible);
    }
  }

  attaqueSpeciale(cible) {
    if (this.mana >= 25) {
      console.log(`${this.name} (${this.constructor.name}) lance une Fireball sur ${cible.name} (${cible.constructor.name}) pour 7 points de dégâts.`);
      cible.hp -= 8;
      this.mana -= 25;
    } else {
      console.log("Pas assez de mana pour utiliser l'attaque spéciale.");
      this.attaque(cible); // Attaque normale en cas de mana insuffisant
    }
  }
}

export default Wizard;
import Character from './Character.js'; // Assurez-vous que le chemin d'accès est correct
