"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = void 0;
/**
* @param  decimals Amount of decimals after the comma
*/
var pi = function (decimals) {
    if (decimals)
        return Number(Math.PI.toFixed(decimals));
    return Math.PI;
};
exports.pi = pi;
