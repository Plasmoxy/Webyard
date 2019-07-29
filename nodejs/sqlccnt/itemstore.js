const {Database} = require("sqlite3").verbose()

let db = new Database("/opt/sql/sqlite")

// init
db.run(`
    create table if not exists items(
        id integer primary key unique,
        name text,
        price real
    )
`)

// inserting
/*
for (let i = 0; i<=900; i++) {
    db.run("insert into items(name, price) values(?, ?)", ["dummy", i])
}
*/

// list
db.all("select * from items", [] , (err, rows) => {
    let sum = 0
    for (let r of rows) {
        sum += r.price
    }

    console.log(sum)
})