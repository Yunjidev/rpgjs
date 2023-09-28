// Classe Paladin, sous-classe de Character
class Paladin extends Character {
  constructor(name) {
    super(16, 160, 3); // Initialisez les PV, mana et dégâts ici
    this.name = name; // Utilisez le nom passé en argument pour définir le nom du personnage
  }

  // Méthode pour choisir l'action à effectuer
  chooseAction(cible) {
    if (this.mana >= 40) {
      this.attaqueSpeciale(cible);
    } else {
      this.attaque(cible);
    }
  }

  // Méthode pour l'attaque spéciale du Paladin
  attaqueSpeciale(cible) {
    if (this.mana >= 40) {
      console.log(`${this.constructor.name} utilise une attaque spéciale sur ${cible.constructor.name} pour 4 points de dégâts.`);
      cible.hp -= 4;
      this.hp += 8; // Soigner le Paladin de 8 points de vie
      this.mana -= 40;
    } else {
      console.log("Pas assez de mana pour utiliser l'attaque spéciale.");
      this.attaque(cible); // Attaque normale en cas de mana insuffisant
    }
  }
}

export default Paladin;
import Character from './Character.js'; // Assurez-vous que le chemin d'accès est correct
