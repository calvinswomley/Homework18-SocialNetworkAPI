const usernames = [
    'joshg',
    'calswomley',
    'joedirt',
    'adamsandler',
    'hannahmontanna',
    'chrisprat',
    'johnydepp',
    'elvisp',
    'rickybobby',
    'ryansecrest',
    'randyjackson',
    'joebiden',
    'kamalaharris',
    'jamesfranco',
    'sethrogan',
    'oprawinfree',
    'michaelscott',
    'jimhalpert',
    'dwightschrute',
    'angalamerkel',
    'borisjohnson',
    'freddymercury',
    'jesseediggins',
    'jeromepowell',
    'georgebush',
    'warrenbuffet',
    'ronpaul',
]

const thoughts = [
    'I like sandwiches',
    'Sandwiches are bad',
    'do not email me',
    'the office is a funny tv show',
    'Movies are fun to watch',
    'what do you think of this thought',
    'I have strong feelings about this',
    'social networks are ruining this country',
    'mark zuckerburg is funny looking',
    'POLITICS',
    'I am angry about politics',
    'voting is important',
    'volunteering is good',
]

const reactions = [
    'you are wrong',
    'you are correct',
    'you are fake news',
    'I am commenting on your thoughts',
    'I disagree',
    'I agree',
    'please explain',
    'I understand',
    'I do not understand'

]

//const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomThought = () =>
  `${getRandomArrItem(thoughts)}`;

const getRandomUserName = () =>
  `${getRandomArrItem(usernames)}${Math.floor(Math.random() * 10 + 1)}`;

// Export the functions for use in seed.js
module.exports = {
  getRandomThought,
  getRandomUserName,
  //genRandomIndex,
};