import migrateShares from "./share";
import migrateUsers from "./user";
import migrateUserShares from "./user_share";

export default function migrate(){
    migrateUsers();
    migrateShares();
    migrateUserShares();
}