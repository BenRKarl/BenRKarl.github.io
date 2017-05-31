---
layout: post
title:  "Writing Tests Without a Web Framework"
date:   2017-05-31 11:19:00
categories: blog post
---

I learned how to build web applications using Ruby on Rails, where unit testing is a strong, well-documented part of the development process. Rails provides the structure and boilerplate to write tests automatically - when you create a new model a unit test file is created automatically! This is great because the thinking about how/when/why to test a class or module is taken care of, and you don't need to waste time testing abstractions that the framework provides.

When I began developing Node.js applications my instinct was thus to test every bit of code I touched, including abstractions around the relationship between objects, structural features Rails hides that a Node developer might need to address. Since I like to test-drive my development, I began with small tests asserting the existence of objects and properties, leaving a pattern similar to the below:

```javascript
const module = require('./module');
const assert = require('assert');

describe('Module', () => {
  it('exists', () => {
    assert(module);
  });

  describe('#getArray', () => {
    it('exists', () => {
      assert(module.getArray);
    });

    it('returns an Array', () => {
      assert.equal(typeof module.getArray(), Array);
    });
  });
});
```

You can follow my thought process above. First I make sure I've exposed the module properly, then check that it has a `#getArray` method, then check that `module.getArray` returns an object of type `Array`. Now notice that the three above assertions can be covered implicitly in a single assertion:

```javascript
const module = require('./module');
const assert = require('assert');

describe('Module', () => {
  describe('#getArray', () => {
    it('returns an Array', () => {
      assert.deepEqual(module.getArray(), []);
    });
  });
});
```

This single test provides the exact same value in nearly half as many lines of code. What's important about this distinction is that test code poses as much of a maintenance risk as production code. Encapsulating the same functionality with fewer lines is critical as an application grows to a reasonably large scale.

A less-experienced version of myself might say, _"Well, you're losing the explicit test messages that guide the developer to the error faster"_. This is not true. Having a failed test with the message "Failed: expected module "module" to be truthy" is just as valuable as the standard error message "Error: Cannot find module './module'". Don't bother writing tests for errors that the language already provides. Save your test messages for more subtle functionality specific to your application's needs.

A good way to think about this is to remind yourself to always test functionality, not structure. Structural tests emerge as a side effect of functional tests. Notice that when we pared down the above tests our assertions related to application structure became implicit. Consider this arrangement, a class, an imported module, and a unit test:

**Dog.js:**
```javascript
const bark = require('./bark');

class Dog() {
  this.bark = bark;
};

module.exports = Dog;
```

**test/Dog.js:**
```javascript
const bark = require('../bark');
const Dog = require('../Dog');

describe('Dog', () => {
  describe('#bark', () => {
    it('exists as a method on Dog', () => {
      const dog = new Dog();
      assert.deepEqual(dog.bark, bark);
    });
  });
});
```

What the developer is communicating here is, "Dog's bark method should be the exact function exported by the local `'./bark'` module". It is very unlikely that this assertion will be useful in a normal application. What matters isn't the structure of Dog, but it's behavior:

```javascript
const Dog = require('../Dog');

describe('Dog', () => {
  describe('#bark', () => {
    it('generates an "arf arf arf!"', () => {
      const dog = new Dog();
      assert.equal(dog.bark(), 'arf arf arf!');
    });
  });
});
```

What if lodash released an improved `#bark` function and your team decides to adopt it. In the first arrangement you will need to change your (already useless) test, likely spending time to delete it entirely. However if a less experienced developer is tasked with this update and the test code is reasonably complicated it's possible they will not feel comfortable deleting it and instead update it so it passes:

```javascript
const bark = require('lodash/bark'); /* now importing external module */
const Dog = require('../Dog');

describe('Dog', () => {
  describe('#bark', () => {
    it('exists as a method on Dog', () => {
      const dog = new Dog();
      assert.deepEqual(dog.bark, bark); /* this test will pass! but at what cost? */
    });
  });
});
```

This quickly becomes a maintenance disaster! There is no "correct" way to handle the above situation as a young developer who is trained to value the existence of tests. Obviously these examples are overly simplistic for the sake of demonstration, but you can imagine how a test suite in a reasonably complex application without highly formalized conventions (a.k.a Rails) can become a risk as developers focus on testing the wrong things.

Just rememeber:

  1. Focus on testing functionality, structural tests will emerge free of charge.
  2. Look for opportunities to remove redundant tests and let standard language errors do the work for you.
