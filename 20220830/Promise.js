// function test(value) {
//     return new Promise((reslove, reject) => {
//         if (value >= 0)
//             reslove('ok');
//         else 
//             reject('error');
//     });
// }

// test(1)
// .then((result) => { console.log(result) })
// .catch((error) => { console.log(error) })

function test(value) {
    return new Promise((reslove, reject) => {
        if (value >= 0)
            reslove('ok');
        else 
            reject('error');
    });
}

function test2(value) {
    return new Promise((reslove, reject) => {
        console.log('test2' + value);
        reslove('finished');
    });
}

function test3(value) {
    console.log(value);
}

test(1)
.then(test2)
.then(test3)
.catch((error) => { console.log(error) })