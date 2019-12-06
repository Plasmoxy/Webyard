
export class Movie {
    static ID_COUNTER = 0
    public id = Movie.ID_COUNTER++

    constructor(
        public name: string,
        public price: number,
    ){
        console.log("Movie created" + String(this))
    }
}