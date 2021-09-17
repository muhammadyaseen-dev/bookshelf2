import React from 'react';
import BookList from './BookList';

const BookShelf =(props)=>
{//shelfName,booksId,authors,images,titles,
    let i;
    let booksName;
    const books=() =>{
       for(i=props.i;i<props.shelves.length;i++)
        {
            if(props.shelves===props.shelfName)
            {
                booksName=props.books;
                return ;
            }
        }
    }
    books();
    //console.log(props.id);
    if(props.shelves[0]===props.shelfName)
    {
    return (
    <div>{props.shelfName}
    <BookList book={props.book}/>
    
    </div>
    );
    }
    return <div>{props.shelfName}
    <BookList book={props.book}/>
    </div>
}

export default BookShelf;