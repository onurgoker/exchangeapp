import Share from "../models/share";

export default function migrateShares(): any {
    Share.sync({force: true}).then(() => {
        console.log('Share table created!');

        Share.create({name: 'APL', price: 10.42, amount:100});
        Share.create({name: 'IBM', price: 5.52, amount:100});
        Share.create({name: 'SBX', price: 2.20, amount:100});

        console.log('Shares are migrated successfully!');        
    }).catch((err:Error) => {console.log(err)});
}