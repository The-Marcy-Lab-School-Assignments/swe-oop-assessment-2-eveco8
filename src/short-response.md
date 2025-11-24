# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

Encapsulation refers to the _bundling_ of data and the **_methods_** that work on that data into one **_object_**. This concept is beneficial because the **_properties_** and **_methods_** inside that object make an _interface_ which allows other parts of the application to interact with the data of that object. It is also beneficial to make certain data private so that it is protected from being changed or manipulated incorrectly.

```JavaScript

const inventoryManager = {
  storeName: 'BestBuy',
  items: ['computer', 'TV'],

  addItem(newItem) {
    this.items.push(newItem)
  },

  printInventory() {
    this.items.forEach(item => {
      console.log(`${this.storeName} has ${item}`)
    })
  }
}

```

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

The `this` keyword refers to the **_object_** that is running the code in that moment. It is useful because it helps the compiler know which object to use at any moment. In the code above, `this` refers to `counterA` and `counterB` because they're the objects _invoking_ the **_method_**.

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

In OOP, **_polymorphism_** is the concept where different types of **_objects_** are treated the _same_ way because they share the same **_method_** names even though each object implements those methods _differently_.

```JavaScript

class Animal {
  speak() {
    console.log('Animal sound')
  }
}

class Dog extends Animal {
  speak() {
    console.log('Woof')
  }
}

class Cat extends Animal {
  speak() {
    console.log('Meow')
  }
}

```

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

First, I would make a general `Pet` class to store all the **_properties/methods_** that the pets have the same. Then I'll create a class for each type of pet (`Cats`, `Dogs`, `Birds`) and in each class, use inheritance to inherit the properties/methods from the `Pet` class, and finally add the additional properties/methods specific to each class. One advantage of using inheritance here is that there would be no repetition of code, which saves time and reduces the likelihood of mistakes.
