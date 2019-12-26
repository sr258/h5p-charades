export default class Charades extends H5P.EventDispatcher {
    /**
     * @constructor
     *
     * @param {object} params Parameters passed by the editor.
     * @param {number} contentId Content's id.
     * @param {object} [extras] Saved state, metadata, etc.
     */
    constructor(params, contentId, extras = {}) {
        super();
        this.element = document.createElement('div');
        this.element.innerText = params.textField.replace('%username', 'World');

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
