import { Entity_PROJECT1_History } from "@app/assetes";
import { Repository } from "typeorm";

export class entiteModel {
    constructor(
        private userRepo: Repository<Entity_PROJECT1_History>,
      ) {
    }
    async getDataSourceName(){
        console.log(this.userRepo.find())
    }
}
