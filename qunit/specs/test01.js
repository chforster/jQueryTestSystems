/**
 * Created by devebiz on 11/6/15.
 */
QUnit.test( "ok test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "equal test", function( assert ) {
    assert.equal( 1, "1", "Passed!" ); // without typecheck
    assert.deepEqual( "1", "1", "Passed!" ); // auch typVergleich
    assert.deepEqual( {a:1, b:"x"}, {a:1, b:"x"}, "Objects are identical" ); // auch typVergleich
    assert.equal( {a:1, b:"x"}, {a:"1", b:"x"}, "Objects are identical" ); // auch typVergleich
});