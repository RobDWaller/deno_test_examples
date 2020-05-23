import {
  assert
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Assert Example", () => {
  assert(1);
  assert(true);
  assert("true");
  assert("false");
  assert("0");
  assert(-1);

  class Foo{};
  assert(new Foo());

  const bar = function bar(){}
  assert(bar);
});