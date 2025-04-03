// generic types are about building combination of types and describing flexible types
let names: Array<string> = ["Leo", "Tireck"];

// building our own generic type
type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Leo";
store.isHuman = true;

function merge<T1, T2>(a: T1, b: T2) {
  return [a, b];
}

const ids = merge<number, string>(1, "Oi");

const obj1 = {
  name: "Leonardo",
};
const obj2 = {
  age: 27,
};

function mergeObj<T extends object, T2 extends object>(a: T, b: T2) {
  // with this approach, typescript is able to infere
  // the return type of this function on invocation time, keeping type safety
  return { ...a, ...b };
}
const mergedObj = mergeObj(obj1, obj2); // const mergedObj: {name: string;} & {age: number;}

function mergeObjTwo(a: object, b: object) {
  // with this approach, typescript can't infer the object
  // type, it simply types the return as object
  return { ...a, ...b };
}
const mergedObjTwo = mergeObjTwo(obj1, obj2); // const mergedObjTwo: {}

// you can also build generic classes and interfaces
class User<T> {
  constructor(public id: T) {}
}
const user = new User("i1");
user.id; // : string

interface IUser<T> {
  id: T;
}
const userTwo: IUser<number> = { id: 1 };

// we can pretty much use generics anywhere
