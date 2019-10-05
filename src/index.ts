import {User} from './models/User';

import axios from 'axios';

class Person {
    constructor(public firstName: string, public lastName: string){

    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

}

const person = new Person('firstName', 'lastName');
console.log(person.fullName);

const user = new User({name: 'name', age: 0});
console.log(user.get('name'));

const on = user.on;
const trigger = user.trigger;

on('change', () => {
    console.log('clicked on');
    
})

trigger('change');


