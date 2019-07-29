const sqlite3 = require("sqlite3")

let db = new sqlite3.Database('/opt/sql/sqlite')

db.all("select * from users where name='Jack'", [], (err, row) => {
    console.log(row)
})