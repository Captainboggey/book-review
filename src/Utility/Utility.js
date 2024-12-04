const getReadBook = ()=>{
    const readBook = localStorage.getItem('read-book');
    if(readBook){
        return JSON.parse(readBook)
    }
    return [];
}

const setReadBook = (id)=>{
    const bookRead = getReadBook();
    const exist = bookRead.find(book=> book===id);
    if(!exist){
        bookRead.push(id);
        localStorage.setItem('read-book',JSON.stringify(bookRead))
    }
}


export{getReadBook,setReadBook}