// Classe Monk, sous-classe de Character
class Monk extends Character {
  constructor(name) {
    super(8, 200, 2); // Initialisez les PV, mana et dégâts ici
    this.name = name; // Utilisez le nom passé en argument pour définir le nom du personnage
  }

  // Méthode pour choisir l'action à effectuer
  chooseAction(cible) {
    if (this.mana >= 25) {
      this.attaqueSpeciale();
    } else {
      this.attaque(cible);
    }
  }

  // Méthode pour l'attaque spéciale du Monk
  attaqueSpeciale() {
    if (this.mana >= 25) {
      console.log(`${this.constructor.name} utilise une attaque spéciale pour se soigner de 8 points de vie.`);
      this.hp += 6; // Soigner le Monk de 6 points de vie
      this.mana -= 25;
    } else {
      console.log("Pas assez de mana pour utiliser l'attaque spéciale.");
      this.attaque(cible); // Attaque normale en cas de mana insuffisant
    }
  }
}

export default Monk;
import Character from './Character.js'; // Assurez-vous que le chemin d'accès est correct
