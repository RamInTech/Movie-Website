import React from "react";

const Search = ({searchTerm , setSearchTerm})=>{

    return(
        <div className="search">
            <div >
                <img src="search.svg" alt="search" className="search-icon" />

                <input
                    type="text"
                    placeholder="Search for a movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                ></input>
            </div>
        </div>
    );
}


export default Search;