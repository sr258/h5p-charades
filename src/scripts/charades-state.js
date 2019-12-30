import CharadesParameters from './charades-parameters';

export default class CharadesState {
  /**
   *
   * @param {CharadesParameters} parameters
   */
  constructor(parameters, customSettings) {
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
      : customSettings.timeLimit || parameters.behavior.timeLimit;
    this.remainingCards = [];
    this.correctCount = 0;
    this.skippedCount = 0;
    this.currentIndex = 0;
  }
}
