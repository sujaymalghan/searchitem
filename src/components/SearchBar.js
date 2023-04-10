import { useState } from "react";

function SearchBar({onSubmit}){

    const [term,setTerm] = useState('')

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term);
    };
   const handlechange = (event) =>{
    setTerm(event.target.value);
};

    return <div >
        <form style={ {marginLeft:470, marginTop:50, width:600 ,marginTop:90}}  onSubmit={handleFormSubmit}>
            <label className="lead">Enter Anything to Search</label>
        <input placeholder="Type Enter After search"  style={ {marginTop:10}} className="form-control" value={term} onChange={handlechange}/>
        </form>
        </div>
}

export default SearchBar;