/**
 * Created by devebiz on 11/6/15.
 */
QUnit.module("Gruppe 1"); // zum gruppieren
QUnit.test( "ok test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Shopsystem", function( assert ) {
    var l;
    shop.addItem("element");
    l = shop.getBasket().length;

    assert.equal(l,1, "OK");
});