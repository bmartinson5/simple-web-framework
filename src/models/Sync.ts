import axios, { AxiosResponse, AxiosPromise } from "axios";
import { UserProps } from './User'

export class Sync {

    constructor(public rootUrl: string){};

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: UserProps):void {
        const {id} = data;
        if(id){
            axios.put(`${this.rootUrl}/${id}`, data)
                .then((response: AxiosResponse): void => {
            }); 
        } else {
            axios.post(`${this.rootUrl}/`, data)
                .then((response: AxiosResponse): void => {
                    this.set(response.data);
            }); 
        }
    }
}