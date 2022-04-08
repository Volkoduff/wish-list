class Wish {
    title: string;
    category: string;
    description: string;
    id?: string;
    date!: string;

    constructor(wishTitle: string, wishCategory: string = 'base', wishDescription: string, id: string) {
        this.title = wishTitle;
        this.category = wishCategory;
        this.description = wishDescription || '';
        this.id = id;
    }
}

export default Wish;


