class Wish {
    title: string;
    category: string;
    description: string;
    id: string;
    isNew?: false;
    date: Date;

    constructor(wishTitle: string, wishCategory: string = 'base', wishDescription: string) {
        this.title = wishTitle;
        this.category = wishCategory;
        this.description = wishDescription || '';
        this.date = new Date();
        this.id = JSON.stringify(new Date().getMilliseconds() * Math.random()).replace('.', '-');
    }
}

export default Wish;


