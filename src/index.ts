import {User} from './models/User';



const user = new User({id: 2});

const on = user.on;
const trigger = user.trigger;

on('save', () => {
    console.log(user);
    
})

user.save();




