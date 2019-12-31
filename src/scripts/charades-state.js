// eslint-disable-next-line no-unused-vars
import CharadesParameters from './charades-parameters';
// eslint-disable-next-line no-unused-vars
import PlayerSettings from './player-settings';

/**
 * Represents the total state of the game.
 */
export default class CharadesState {
  /**
   *
   * @param {CharadesParameters} parameters
   * @param {PlayerSettings} playerSettings
   */
  constructor(parameters, playerSettings) {
    /**
     * Can be: intro, options, play, result
     */
    this.page = 'intro';
    /**
     * Can be: preparing, showing, correct, skipped, end
     */
    this.gameStage = 'preparing';
    this.startTime = undefined;
    this.endTime = undefined;
    this.timeLimit = parameters.behavior.customTime
      ? parameters.behavior.timeLimit
      : playerSettings.timeLimit || parameters.behavior.timeLimit;
    this.remainingCards = this.getCards(parameters, playerSettings);
    this.correctCount = 0;
    this.skippedCount = 0;
    this.currentIndex = 0;
  }

  /**
   * Returns the cards either set by the content author or by the user in the option screen.
   * @param {CharadesParameters} parameters the parameters received from H5P (=content.json)
   * @param {PlayerSettings} playerSettings the settings set by the player
   */
  getCards(parameters, playerSettings) {
    if (parameters.behavior.cardSelection === 'forceSelection') {
      // content author has set a selection of cards
      return this.getRandomArraySlice(
        parameters.items,
        parameters.behavior.itemCount
      );
    } else if (
      parameters.behavior.cardSelection === 'user' &&
      playerSettings.cardSelection === 'selection'
    ) {
      // player wants a random selection of cards
      return this.getRandomArraySlice(
        parameters.items,
        playerSettings.itemCount
      );
    } else if (
      (parameters.behavior.cardSelection === 'forceAll' &&
        parameters.behavior.randomOrder === true) ||
      (parameters.behavior.cardSelection === 'user' &&
        playerSettings.cardSelection === 'all-random-order')
    ) {
      // content author or player want all cards in random order
      return this.getRandomArraySlice(
        parameters.items,
        parameters.items.length
      );
    } else {
      // content author or player want all cards in the order as entered by the author
      if (
        !(
          (parameters.behavior.cardSelection === 'forceAll' &&
            parameters.behavior.randomOrder === false) ||
          (parameters.behavior.cardSelection === 'user' &&
            playerSettings.cardSelection === 'all-fixed-order')
        )
      ) {
        console.log(
          'h5p-charades',
          'Error in setting "Card selection". Using all cards and a fixed order.'
        );
      }
      return parameters.items;
    }
  }

  /**
   * Returns a slice of an array in random order.
   * @param {Array} items the array
   * @param {number} maxCount the maximum length of the new array. Can be more than the actual array length.
   * @returns {Array} the slice of the array
   */
  getRandomArraySlice(items, maxCount) {
    return items
      .map(item => {
        return { item, sortValue: Math.random() };
      })
      .sort((a, b) => a.sortValue - b.sortValue)
      .slice(0, Math.min(maxCount, items.length))
      .map(tuple => tuple.item);
  }
}
