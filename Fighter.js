// Classe Fighter, sous-classe de Character
class Fighter extends Character {
  constructor(name) {
    super(12, 40, 4); // Initialisez les PV, mana et dégâts ici
    this.name = name;
  }

  // Méthode pour choisir l'action à effectuer
  chooseAction(cible) {
    if (this.mana >= 20) {
      this.attaqueSpeciale(cible);
    } else {
      this.attaque(cible);
    }
  }

  // Méthode pour l'attaque spéciale du Fighter
  attaqueSpeciale(cible) {
    if (this.mana >= 20) {
      const degatsInfliges = Math.min(5, cible.hp); // Calcul des dégâts infligés, limité à la santé actuelle de la cible
      console.log(`${this.constructor.name} utilise une attaque spéciale sur ${cible.constructor.name} pour ${degatsInfliges} points de dégâts.`);
      cible.hp -= degatsInfliges;
      this.mana -= 20;
      this.takeLessDamageNextTurn = true;
    } else {
      console.log("Pas assez de mana pour utiliser l'attaque spéciale.");
    }
  }
}

export default Fighter;
import Character from './Character.js'; // Assurez-vous que le chemin d'accès est correct
