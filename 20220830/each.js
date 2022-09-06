// 항목을 하나씩 추가
// module.exports.message = 'Util module';

// module.exports.hello = (user) => {
//     console.log(`Hello ${user}`);
// };

// module.exports.bye = () => {
//     console.log('Bye');
// };

const message = 'Util module';

const hello = (user) => {
    console.log(`Hello ${user}`);
};

const bye = () => {
    console.log('Bye');
};

export {
    message,
    hello,
    bye
}