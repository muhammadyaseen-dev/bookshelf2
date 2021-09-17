import React,{useState,useEffect} from 'react';
import * as BooksAPI from './BooksAPI'
import {render} from '@testing-library/react';

const Search=()=>
{
    const [term,setTerm]=useState('fred');
    const [results,setresults] = useState([]);
    
    useEffect(()=>
    {
      const solve=async()=>{
          const {data}=await BooksAPI.search(term);
          setresults(data);
      }
      if(term&&!results.length)
      {
        solve();
      }
      else{
        const timeoutid=setTimeout(()=> //To make search once the word is compeletly typed so that after every word we donot have to go through the api

        {if(term)
          solve();
        },1000//measns 1 sec
        );
        return ()=>{
          clearTimeout(timeoutid);//Check if 1 sec is not passed and the user has started typing again then just delete the timer and get ready to set the timer  again
        }
      }
  },[term]);
  const renderedList=results.map((result)=>{
    return (
      <li>
      <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{result.title}</div>
      <div className="book-authors">{result.author}</div>
    </div>
  </li>
      );
  });
  return (

    <div className="app">
    
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href='/' >Close</a>
        <div>{renderedList}</div>      
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
 
</div>
</div>

   );
  };
export default Search;