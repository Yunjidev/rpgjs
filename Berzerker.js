// Classe Berzerker, sous-classe de Character
class Berzerker extends Character {
  constructor(name) {
    super(8, 0, 4); // Initialisez les PV, mana et dégâts ici
    this.name = name; // Utilisez le nom passé en argument pour définir le nom du personnage
    this.hasRage = false; // Le Berzerker n'a pas encore activé la rage
  }

  // Méthode pour choisir l'action à effectuer
  chooseAction(cible) {
    if (!this.hasRage) {
      this.attaqueSpeciale(cible);
    } else {
      this.attaque(cible);
    }
  }

  // Méthode pour l'attaque spéciale du Berzerker
  attaqueSpeciale(cible) {
    if (!this.hasRage) {
      console.log(`${this.constructor.name} active la rage et inflige 1 point de dégât supplémentaire à ${cible.constructor.name}.`);
      this.hasRage = true; // Activer la rage
      this.dmg += 1; // Augmenter les dégâts du Berzerker de 1
      this.hp -= 1; // Enlever 1 point de vie au Berzerker
    } else {
      console.log("Le Berzerker est déjà enragé.");
      this.attaque(cible); // Attaque normale en cas de rage activée
    }
  }
}

export default Berzerker;
import Character from './Character.js'; // Assurez-vous que le chemin d'accès est correct
