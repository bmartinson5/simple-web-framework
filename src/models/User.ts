import Eventing from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';


export interface UserProps {
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps> = new Attributes<UserProps>(this.data)

    constructor(
        private data: UserProps,

        ){}

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }


}


