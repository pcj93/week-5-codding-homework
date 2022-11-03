class Book {
    constructor(name, genre){
        this.name = name;
        this.genre = genre;
        
    }

    describe(){
        return '${this.name} is from ${this.genre}.';
    }
}

class Manga{
    constructor(name) {
        this.name = name;
        this.genre = [];
    }

    addBook(Book){
        if(Book instanceof Book){
            this.Book.push(Book);
        } else {
            throw new error ('Not a type of Manga. Please make sure you have the right book. ');
        }
    }

    describe() {
        return '${this.name} is from ${this.genre.length}.';
    }
}

class ShoppingCart {
    constructor(){
        this.mangas = [];
        this.selectedManga = null;
    }

    start() {
        let selection = this.showShoppingCartOptions();
        while (selection != 0) {
            switch (selection) {
                case "1":
                this.addBookToShoppingCart();
                break;
                case "2":
                    this.seeShoppingCart()
                    break;
                case "3":
                    this.removeBook();
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
        return prompt(' 0) exit 1) Add book 2) see shopping cart 3) Remove book 4) Confirm Shopping Cart');
    }

    showShoppingCartOptions(Mangainfo){
        return prompt(' 0) back 1) add book 2) remove book 3) confirm shopping cart ');
    
    }

    displayShoppingCart() {
        let mangaString = '';
        for (let i = 0; i < this.mangas.length; i++) {
            mangaString += i + ') ' + this.mangas[i].name + '\n';
        }
        alert(mangaString);
    }

    addBook() {
        let name = prompt ('Name of new book you wanna add');
        this.book.push(new Book(name));
    }
viewShoppingCart(){
    let index = prompt('Enter the number of book you wish to see.');
    if (index > -1 && index < this.mangas.length) {
        this.selectedManga = this.mangas[index];
        let description = "Book Name: " + this.selectedManga.name + '\n';

        for (let i = 0; i < this.selectedManga.book.length; i++){
            description += i + ') ' + this.selectedManga.book[i].genre + ' - ' + this.selectedManga.book[i].genre + '\n'; 
        }

        let selection = this.showShoppingCartOptions(description);
        switch (selection) {
            case '1':
                this.addBook();
                break;
                case '2':
                    this.removeBook();
        }
    }
}

deleteBook() {
    let index = prompt("Enter the number of book you wish to delete");
    if (index > -1 && index < this.mangas.length){
        this.mangas.splice(index, 1);
    }

}

addBook(){
    let name = prompt("Enter name of book you wanna add.")
    let genre = prompt("Enter genre of book")
}

removeBook(){
    let index = prompt("Enter the number of book you wish to remove.")
    if(index > -1 && index < this.selectedManga.book.length){
        this.selectedManga.book.splice(index, 1);
    }
}
}

let Cart = new ShoppingCart();
Cart.start();
//when trying to make the app work I was confusing the code by using ShoppingCart; wording 
//needs to be more simple and easy to use in order not to confuse the code.