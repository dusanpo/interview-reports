import React from 'react';



const Search  = ({search, query}) =>{

    const onSearch = (q)=>{
        search({query: q})
    }
    return (
        <div className="container">
           <input 
           type="search" 
           placeholder="Search Candidates..."
           name="search"
           onChange={(e)=>onSearch(e.target.value)}
           value={query}
           /> 
        </div>
   
    )
}
export default Search;

