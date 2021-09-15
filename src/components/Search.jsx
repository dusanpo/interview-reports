import React from 'react';



export default function Search ({search, query}){

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


