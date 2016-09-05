/**
 * Управление игровым миром
 * @class
 */
class World {
    /**
     * @constructor
     * @type {Array.<{start, end, action, time}>} iterations
     */
    constructor(iterations) {
        if (!iterations || !iterations.length) {
            throw Error('empty iterations');
        }

        /**
         * Итерации (шаги)
         * @type {number}
         * @private
         */
        this._iterations = iterations;

        /**
         * Номер текущего шага (итерации)
         * @type {number}
         * @private
         */
        this._numIteration = 0;

        /**
         * Текущий id таймаута
         * @type {number}
         * @private
         */
        this._timeoutId = null;

        this._makeStep(this._iterations[this._numIteration]);
    }

    /**
     * Сделать шаг
     * @type {Object}
     * @private
     */
    _makeStep(step) {
        var {start, end, time = 60} = step;

        this._timeoutId = setTimeout(()=> {
            end.apply(step);

            this._timeoutId = setTimeout(()=> {
                this._makeStep(this._getNextStep());
            }, 1);
        }, time * 1000);

        start.apply(step);
    }

    /**
     * Получить следующий шаг
     * @private
     */
    _getNextStep() {
        this._numIteration++;
        if (this._numIteration >= this._iterations.length) this._numIteration = 0;
        return this._iterations[this._numIteration];
    }

    /**
     * Остановить мир
     */
    stop() {
        clearTimeout(this._timeoutId);
    }

}

module.exports = World;