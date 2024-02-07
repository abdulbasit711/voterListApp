import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

   
    

    // file upload service

    

    

    
}


const service = new Service()
export default service