import UserShare from "../models/user_share";

export default function migrateUserShares(): any {
    UserShare.sync({force: true}).then(() => {
        console.log('User Share table created!');

        UserShare.create({user_id: 1, share_id: 1});
        UserShare.create({user_id: 2, share_id: 1});
        UserShare.create({user_id: 3, share_id: 2});
        UserShare.create({user_id: 4, share_id: 2});
        UserShare.create({user_id: 5, share_id: 3});

        console.log('User Shares are migrated successfully!');        
    }).catch((err:Error) => {console.log(err)});
}