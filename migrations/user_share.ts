import UserShare from "../models/user_share";

export default function migrateUserShares(): any {
    UserShare.sync({force: true}).then(() => {
        console.log('User Share table created!');

        UserShare.create({user_id: 1, share_id: 1, amount: 10, price: 9.90});
        UserShare.create({user_id: 2, share_id: 1, amount: 5, price: 29.00});
        UserShare.create({user_id: 3, share_id: 2, amount: 8, price: 49.90});
        UserShare.create({user_id: 4, share_id: 2, amount: 15, price: 59.00});
        UserShare.create({user_id: 5, share_id: 3, amount: 22, price: 19.90});

        console.log('User Shares are migrated successfully!');        
    }).catch((err:Error) => {console.log(err)});
}