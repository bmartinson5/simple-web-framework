import {User} from './models/User';

import axios from 'axios';

const user = new User({name: 'new record', age: 0});
user.events.on('click', () => {
    console.log('change');
})

user.events.trigger('click')

user.save();

console.log(user);


