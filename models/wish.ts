class Wish {
    title: string;
    category: string;
    description: string;
    id: string;

    constructor(wishTitle: string, wishDescription: string, wishCategory: string = 'base') {
        this.title = wishTitle;
        this.category = wishCategory;
        this.description = wishDescription;
        this.id = JSON.stringify(new Date().getMilliseconds() * Math.random()).replace('.', '-');
    }
}

export default Wish;

