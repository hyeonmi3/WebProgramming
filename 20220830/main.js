// ./ 같은 폴더에 있다는 뜻
// const data = require('./obj');
// const util = require('./each');

// console.log(data);
// data.sayHello();

// console.log(util.message);
// util.hello(data.user);
// util.bye();

import obj from './obj/js';
import { bye, hello, message } from './20220830/each';

console.log(obj);
obj.sayHello();

console.log(message);
hello(obj.user);
bye();