/**
 * Represents the choices made by the user in the settings screen.
 */
export default class PlayerSettings {
  constructor() {
    this.timeLimit = 60;
    /**
     * Can be: selection, all-random-order, all-fixed-order
     */
    this.cardSelection = 'all-random-order';
    this.itemCount = 10;
  }
}
