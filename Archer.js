class Archer extends Character {
  constructor(name) {
    super(8, 80, 3); // Initialisez les PV, mana et dégâts ici
    this.name = name; // Utilisez le nom passé en argument pour définir le nom du personnage
  }

  chooseAction(cible) {
    if (this.mana >= 20) {
      this.attaqueSpeciale(cible);
    } else {
      this.attaque(cible);
    }
  }

  attaqueSpeciale(cible) {
    if (this.mana >= 20) {
      console.log(`${this.name} (${this.constructor.name}) tire une Flèche Empoisonnée sur ${cible.name} (${cible.constructor.name}) pour 5 points de dégâts.`);
      cible.hp -= 6;
      this.mana -= 20;
    } else {
      console.log("Pas assez de mana pour utiliser l'attaque spéciale.");
      this.attaque(cible); // Attaque normale en cas de mana insuffisant
    }
  }
}

export default Archer;
import Character from './Character.js'; // Assurez-vous que le chemin d'accès est correct
