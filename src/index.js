import s_query, { add_to_dom, make_element } from './helpers';
import add from './add';

add_to_dom('hello there! webpack is fun!');

add_to_dom(`5 + 8 = ${add(5, 8)}`);

make_element('p', 'this is a paragraph tag');

s_query.make_element('h2', 'this is s_query');

// var promise = new Promise(function (resolve, reject) {
//     //resolve function that triggers to resolve
//     //reject function that triggers to reject

//     resolve('done');

// });

// promise.then(function (value) {
//     console.log('this is the result of the promise: ', value);
//     return 'jello is delicious';
// }).promise.then(function (value) {
//     console.log('this is the result of the promise: ', value);

//     console.log('this is the promise: ', promise);
//pending
//resolved / fulfilled
//rejected
///////////////////////////////////////////////////////////

var promise = new Promise(function (resolve, reject) {
    resolve('no really, this is done');
});

promise
    .then(function (value) {
        console.log('this is the result of the promise: ', value);
        return value + ', yes really';
    })
    .then(function (monkey) {
        console.log('this is the 2nd result of the promise: ', monkey);
        return monkey + ', yes really';
    })
    .catch(function (value) {
        console.log('there was an error, yo: ', value);
        return value;
    })
    .then(function (monkey) {
        var newPromise = new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log('rejecting 3rd promise');
                reject(new Error(monkey));
            }, 5000);
        });

        console.log('this is the 3rd result of the promise: ', monkey);
        return newPromise;
    })
    .catch(function (value) {
        console.log('there was another error, yo: ', value);
        return value;
    });
