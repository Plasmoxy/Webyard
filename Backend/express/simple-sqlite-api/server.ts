import express = require("express")
import sqlite3 = require("sqlite3")

const app = express()


class User {
    id?: number;
    
    constructor(
        public name: string,
        public age: string
    ){}
}

class UserDAO {
    db = new sqlite3.Database("yeet.sqlite")
    
    constructor() {
        this.db.run(`
            create table if not exists items(
                id integer primary key unique,
                name text,
                price real
            )
        `)
    }

}
;(async () => {
    
    
    

    app.listen(80)
    console.log("App running on 80")

    db.close()

})().catch(e => console.log(`[main] ${e}`))