const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = true;
// console.log(user);

const keys = Object.keys(user);
// console.log(keys);

// eslint-disable-next-line
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
