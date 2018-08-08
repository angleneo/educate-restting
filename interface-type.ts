interface Interface {
  name: string; // '', 'w', '323132123'

  age: number; //  1  , 2  ,  3

  flag: boolean; // true, false

  list: number[]; // [0, 1, 2]

  arrayList: Array<number>;  //  [1, 2, 3]

  xxxx: any; // 任意型，会失去类型检查

  undefined: undefined; // undefined

  null: null; // null

  listObject: [string, number]; // 元祖类型  ['hello', 1, 333, '12312312']

  enum: Color {red, green, blue}
  let c: Color = Color.red // 枚举型

  function getList (): void {
    console.log(this.name)  // 用在函数的返回值上，表示该函数没有返回值
  };
}