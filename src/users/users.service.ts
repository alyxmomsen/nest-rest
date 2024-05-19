import { Injectable } from '@nestjs/common';

const users = [
    {
        id:1 ,
        name:'Alex' , 
        email:'alex@emali' , 
        role:'ENGINEER' ,
    } ,
    {
        id:2 ,
        name:'Max' , 
        email:'max@emali' , 
        role:'ADMIN' ,
    } ,
    {
        id:3 ,
        name:'the Sun' , 
        email:'thesun@emali' , 
        role:'THE_FATHER' ,
    } ,
    {
        id:4 ,
        name:'Champion' , 
        email:'emali' , 
        role:'INTERN' ,
    } ,    
]

@Injectable()
export class UsersService {
    findAll (role?:'ENGINEER'|'INTERN'|'ADMIN') {

        if(role) {
            return users.filter(user => user.role === role) ;
        }
        return users ;
    } ;
    findOne (id:string) {
        return id ;
    }
}
