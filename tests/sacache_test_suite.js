/**
 * Created by rafal.janicki on 2014-11-14.
 */
/**
 * Created by rafal.janicki on 2014-11-14.
 */
/* jshint indent:4 */
/* global console */

// create testSuite
var testSuite = TestDuck.createTestSuite("Sacache Test Suite");

// check max_cache_size
testSuite.addTest(
    {
        testName: "max_cache_size test",
        assertion: Sacache.max_cache_size == 100,
        message: "max_cache_size should be equal 100"

    });

// add() test
Sacache.add("somekey", "somevalue");

testSuite.addTest(
    {
        testName: "Sacache.add() test",
        assertion: (Sacache.storage[0]["storageKey"] === "somekey"
                    && Sacache.storage[0]["storageValue"] === "somevalue"),
        message: "Sacache.add() should add new item"

    });

// countItems() test

testSuite.addTest(
    {
        testName: "Sacache.countItems() test",
        assertion: Sacache.countItems() === 1,
        message: "Sacache.countItems() should return 1"

    });

// exists() test

testSuite.addTest(
    {
        testName: "Sacache.exists() test",
        assertion: Sacache.exists("somekey") === true,
        message: "Sacache.exists('somekey') should return true"

    });

// get() test

testSuite.addTest(
    {
        testName: "Sacache.get() test",
        assertion: Sacache.get("somekey") === "somevalue",
        message: "Sacache.get('somekey') should return 'somevalue'"

    });

testSuite.run();