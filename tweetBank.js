const _ = require('lodash');

let data = [];

function add (name, content) {
  let success = false;
  while (!success) {
    let currentId = randArrayEl([1,2,3,4,5,6,7,8,9,10]);
    if (data.every(x => x['id'] !== currentId)) {
      data.push({ name: name, content: content, id: currentId });
      success = true;
    }
  }
}

function list () {
  return _.cloneDeep(data);
}

//[name="Nimit Ecma"]

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

//data.push({ name: "nimit", content: "This is a fake tweet"});
//let fakeN = "Nimit Ecma";

//find([name=_.fakeN]);

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

console.log(data);
