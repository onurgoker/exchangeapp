import User from "../models/user";

export default function migrateUsers(): any {
    User.sync({force: true}).then(() => {
        console.log('User table created!');

        User.create({name: 'John', surname:'Smith'});
        User.create({name: 'Joshua', surname:'Madelyn'});
        User.create({name: 'Alan', surname:'Turing'});
        User.create({name: 'Kim', surname:'Tenderly'});
        User.create({name: 'Casey', surname:'Stewart'});

        console.log('Users are migrated successfully!');        
    }).catch((err:Error) => {console.log(err)});
}