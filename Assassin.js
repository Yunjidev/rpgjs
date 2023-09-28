// Classe Assassin, sous-classe de Character
class Assassin extends Character {
  constructor(name) {
    super(6, 20, 6); // Initialisez les PV, mana et dégâts ici
    this.name = name; // Utilisez le nom passé en argument pour définir le nom du personnage
    this.hasShadowHit = false; // L'Assassin n'a pas encore utilisé Shadow Hit
  }

  // Méthode pour choisir l'action à effectuer
  chooseAction(cible) {
    if (this.mana >= 15) {
      this.attaqueSpeciale(cible);
    } else {
      this.attaque(cible);
    }
  }

  // Méthode pour l'attaque spéciale de l'Assassin
  attaqueSpeciale(cible) {
    if (this.mana >= 20) {
      if (!this.hasShadowHit) {
        console.log(`${this.constructor.name} utilise Shadow Hit sur ${cible.constructor.name} pour 7 points de dégâts.`);
        this.hasShadowHit = true;
        cible.hp -= 7;
        if (cible.hp > 0) {
          this.hp -= 7;
        }
        this.mana -= 20;
      } else {
        console.log("L'Assassin a déjà utilisé Shadow Hit.");
        this.attaque(cible); // Attaque normale en cas de Shadow Hit déjà utilisé
      }
    } else {
      console.log("Pas assez de mana pour utiliser l'attaque spéciale.");
      this.attaque(cible); // Attaque normale en cas de mana insuffisant
    }
  }
}

export default Assassin;
import Character from './Character.js'; // Assurez-vous que le chemin d'accès est correct

