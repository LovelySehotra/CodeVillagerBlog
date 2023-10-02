import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";
import { AppwriteException } from 'appwrite';

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
             if(userAccount)
             {
                return this.login({email,password})
             }else
             {
                return userAccount;
             }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            if (error instanceof AppwriteException) {
                console.error('Appwrite Error:', error.message, error.code);
                // Handle the error appropriately, e.g., show an error message to the user
              } else {
                console.error('Unexpected Error:', error);
                // Handle other unexpected errors
              }
        }

        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}
const authService = new AuthService();
export default authService;