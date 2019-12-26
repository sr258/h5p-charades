import CharadesParameters from './charades-parameters';

// This comment tells ESLint about the global H5P variable.
/*
global H5P
*/

export default class Charades extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} rawParams Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  // eslint-disable-next-line no-unused-vars
  constructor(rawParams, contentId, extras = {}) {
    super();

    const params = new CharadesParameters(rawParams);
    this.element = document.createElement('div');
    this.element.innerText = params.taskDescription;

    /**
     * Attach library to wrapper.
     *
     * @param {jQuery} $wrapper Content's container.
     */
    this.attach = function($wrapper) {
      $wrapper.get(0).classList.add('h5p-charades');
      $wrapper.get(0).appendChild(this.element);
    };
  }
}
