
export class ShopItem {

    constructor(
        public name: string,
        public title: string,
        public description: string,
        public categoryName: string,
        public price: number,
        public amount: number,
        public imageId: string = ""
    ){}

}