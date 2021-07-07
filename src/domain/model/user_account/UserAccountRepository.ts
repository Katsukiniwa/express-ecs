import { UserAccount } from "./UserAccount";

export interface UserAccountRepository {
  store(userAccount: UserAccount): void; 
}