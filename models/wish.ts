class Wish {
    title: string;
    category: string;
    description: string;
    id?: string;
    isNew?: false;
    date?: Date;

    constructor(wishTitle: string, wishCategory: string = 'base', wishDescription: string, id: string) {
        this.title = wishTitle;
        this.category = wishCategory;
        this.description = wishDescription || '';
        this.id = id;
    }
}

export default Wish;


