let books = [
    {name: "kitap1", author: "name1"},
    {name: "kitap2", author: "name2"},
    {name: "kitap3", author: "name3"},
    {name: "kitap4", author: "name4"},
]


 let showBooks = () => {
    books.forEach(item => {
        console.log(item.name)
    });
}

let addBook = (book) => {
    return new Promise ((resolve, reject) => {
        if(!book){
            reject('Kitap ismi giriniz.')
        }
        else{
            books.push(book);
            resolve(books)
        }
    })    
}

let newBook = async () => {
    try {
        await addBook({name: 'kitap5', author: 'name5'});
        showBooks()
    }
    catch(error) {
        console.log(error)
    }
}

newBook()
