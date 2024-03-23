# delta-tsc-check-demo

1. pnpm i
2. write some error ts code for example: test.ts

```js
// 定义一个接口
interface Person {
    name: string;
    age: number;
}

// 定义一个不符合 Person 接口的对象
const person: Person = {
    name: 'John',
    // 缺少 age 属性，将导致 TypeScript 编译错误
};

// 定义一个函数，参数类型为 Person
function greet(person: Person) {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

// 调用函数
console.log(greet(person));

```

3. git add test.ts 

4. npx lint-staged
