import test from "node:test";import assert from "node:assert/strict";import{addTime}from"../src/index.js";
test("adds days",()=>assert.equal(addTime("2026-01-01T00:00:00Z",{days:2}).toISOString(),"2026-01-03T00:00:00.000Z"));
test("subtracts hours",()=>assert.equal(addTime("2026-01-01T02:00:00Z",{hours:-2}).toISOString(),"2026-01-01T00:00:00.000Z"));
