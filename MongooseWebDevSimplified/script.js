const mongoose = require('mongoose');
const { findOneAndUpdate } = require('./User');
const User = require('./User');

mongoose.set('strictQuery', true);
mongoose.connect(
  'mongodb://localhost/testdb',
  () => {
    console.log('connected');
  },
  (e) => console.log(e)
);

run();
async function run() {
  try {
    const user = await User.exists({ name: 'Robert' });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
