/**
 * Created by devebiz on 11/6/15.
 */
(function () {
    "use strict";

    describe("Ein Matcher", function () {
       var a,
           f1;
        beforeEach(function () {
            a = 0;
            f1 = function(item) {
                if (typeof item !== "string") {
                    throw new Error();
                }
            };
        });

        it("should check the int values", function () {
           expect(2).toEqual(2);
        });
        it("should check the string values", function () {
            expect("3").toEqual("3");
        });
        it("should check the boolean values", function () {
            expect(true).toBe(true);
        });

        describe("f1", function () {
            it ("should throw an error", function () {
               expect(f1).toThrow();
            });
            it("should check undefined values", function () {
                var x;
                expect(x).toBeUndefined();
            });
        });
        describe("f2", function () {
            it ("should throw an error", function () {
                expect(f1).toThrow();
            });
            it("should check undefined values", function () {
                var x;
                expect(x).toBeUndefined();
            });
        });
    });
}());