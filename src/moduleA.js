/**
 * Created by devebiz on 11/6/15.
 */
(function (window, undefined) { // undefined um keine weiteren Attribute zuzulassen
    "use strict";

    var basket = []; // private

    window.shop = {
        addItem: function (item) {
            basket.push(item);
        },
        getBasket: function () {
            return basket.slice();
        }
    };
}(window));