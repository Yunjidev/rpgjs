// Classe de base pour les personnages
class Character {
  constructor(hp, mana, dmg) {
    this.hp = hp;
    this.maxHp = hp; // Ajout de maxHp pour garder une trace des PV max
    this.mana = mana;
    this.dmg = dmg;
    this.status = "playing"; // Par défaut, le personnage est en jeu
    this.game = null; // Référence vers le jeu
  }

  // Méthode pour effectuer une attaque normale
  attaque(cible) {
    if (this.status === "playing") {
      const degatsInfliges = this.dmg; // Les dégâts sont définis par le personnage
      console.log(`${this.constructor.name} attaque ${cible.constructor.name} avec une attaque normale pour ${degatsInfliges} points de dégâts.`);
      cible.takeDamage(degatsInfliges);
      this.regainManaOnKill(cible);
      return degatsInfliges; // Retourne les dégâts infligés
    }
  }

  // Méthode à implémenter dans les sous-classes pour l'attaque spéciale
  attaqueSpeciale(cible) {
    // À implémenter dans les sous-classes
  }

  // Méthode pour prendre des dégâts
  takeDamage(damage) {
    if (this.status === "playing") {
      this.hp -= damage;
      if (this.hp <= 0) {
        this.hp = 0;
        this.status = "loser";
      }
    }
  }

  // Méthode pour infliger des dégâts à un autre personnage
  dealDamage(target) {
    if (this.status === "playing" && target.status === "playing") {
      target.takeDamage(this.dmg);
      this.regainManaOnKill(target);
    }
  }

  // Méthode pour regagner 20 points de mana après avoir tué un adversaire
  regainManaOnKill(target) {
    if (target.status === "loser") {
      this.mana += 20;
    }
  }

  // Méthode pour choisir une cible parmi les autres personnages
  chooseTarget() {
    const targets = this.game.characters.filter(
      (character) => character !== this && character.status === "playing"
    );

    // Exclure les personnages dont le statut est "loser"
    const aliveTargets = targets.filter((character) => character.status !== "loser");

    if (aliveTargets.length > 0) {
      const randomIndex = Math.floor(Math.random() * aliveTargets.length);
      return aliveTargets[randomIndex];
    }
    return null; // Aucune cible disponible
  }

  // Méthode pour gérer le tour du personnage
  play() {
    if (this.status === "playing" && this.hp > 0 && this.game.playersInGame > 1) {
      const target = this.chooseTarget();
      if (target) {
        this.chooseAction(target);
      }
    }
  }
}

export default Character;