import {
  assert,
  assertThrows,
  AssertionError,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Assert Example", () => {
  assert(1);
  assert(2);
  assert(true);
  assert("true");
  assert("false");
  assert("0");
  assert(-1);

  class Foo {}
  assert(new Foo());

  const bar = function bar() {};
  assert(bar);

  assert({});
  assert([]);
});

Deno.test("Assert Example Throws", () => {
  assertThrows(() => {
    assert(0);
  }, AssertionError);
  assertThrows(() => {
    assert(false);
  }, AssertionError);
  assertThrows(() => {
    assert("");
  }, AssertionError);
  assertThrows(() => {
    assert(null);
  }, AssertionError);
  assertThrows(() => {
    assert(undefined);
  }, AssertionError);

  assertThrows(
    () => {
      assert(false, "Value is falsy.");
    },
    AssertionError,
    "Value is falsy.",
  );
});
