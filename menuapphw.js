class Library {
    constructor(name, book){
        this.name = name;
        this.book = book;
        
    }

    describe(){
        return '${this.name} is from ${this.book}.';
    }
}

class Manga{
    constructor(name) {
        this.name = name;
        this.genre = [];
    }

    addToLibrary(library){
        if(library instanceof Library){
            this.genre.push(library);
        } else {
            throw new error ('Not a type of book. Please make sure you have the right book. ');
        }
    }

    describe() {
        return '${this.name} is from ${this.genre.length}.';
    }
}

class ShoppingCart {
    constructor() {
        this.mangas = [];
        this.selectedManga = null;
    }

    start() {
    let selection = this.showShoppingCartOptions();
    while (selection != 0) {
            switch (selection)  {
                case "1":
                this.addToLibrary();
                break;
                case "2":
                    this.DisplayShoppingCart();
                    break;
                case "3":
                    this.removeManga();
                    break;
                case "4":
                    this.confirmShoppingCart();
                    break;
                default:
                    selection = 0;    
            }
            selection = this.showShoppingCartOptions();
        }
        alert("Thank you for looking or shopping with us !");
    }

    showShoppingCartOptions() {
        return prompt(' 0) exit 1) Add book 2) Display Shopping Cart 3) Remove book 4) Confirm Shopping Cart');
    }

    showShoppingCartOptions(MangaInfo) {
        return prompt(' 0) back 1) Add Book 2) Display Shopping Cart  3) Remove book 4) Confirm Shopping Cart');

    }
    DisplayShoppingCart() {
        let mangaString = '';
        for (let i = 0; i < this.mangas.length; i++) {
            mangaString += i + ') ' + this.mangas[i].name + '\n';
        }
        alert(mangaString)
    }

    addToLibrary() {
        let name = prompt ('Name of new book you wanna add:');
        this.mangas.push(new Manga(name));
    }
    confirmShoppingCart(){
    let index = prompt('Enter the name of book you wish to see:');
    if (index > -1 && index < this.mangas.length) {
        this.selectedManga = this.mangas[index];
        let description = "Book Name: " + this.selectedManga.name + '\n';

        for (let i = 0; i < this.selectedManga.genre.length; i++){
        this.genre = [];
            description += i + ') ' + this.selectedManga.genre[i].name + ' - ' + this.selectedManga.genre[i].book + '\n'; 
        }

        let selection = this.showShoppingCartOptions(description);
        switch (selection) {
            case '1':
                this.addToLibrary();
                break;
                case '2':
                    this.removeLibrary();
        }
    }
}

removeManga(){
    let index = prompt('Enter the index of the book you want to remove:');
    if ( index > -1 && index < this.mangas.length){
        this.mangas.splice(index, 1);

    }
}
createLibrary(){
    let name = prompt("Enter name of book you wanna add:")
    let book = prompt("Enter genre of book")
    this.selectedManga.genre.push(new Library(name, book));
}

deleteLibrary(){
    let index = prompt('Enter index of book you wish to remove:');
    if (index > -1 && index < this.selectedManga.genre.length) {
        this.selectedManga.genre.splice(index, 1);
    }
}
}

let Cart = new ShoppingCart();
Cart.start();
//when trying to make the app work I was confusing the code by using ShoppingCart; wording 
//needs to be more simple and easy to use in order not to confuse the code.