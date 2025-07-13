import { useEffect, useState } from "react";
import { SearchThumb } from "./searchSt.styled"
import { useNavigate, useSearchParams } from "react-router";

export const Search = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        const params = searchParams.get('query')?.trim()
        if(!params){
            return;
        }
        navigate(`/movies?query=${params}`);

    }, [navigate, searchParams])

const handleInputSubmit = e => {
    e.preventDefault();
    if(value.trim() !== ''){
        setSearchParams({query: value})
        setValue('')
    }
}
    return(
        <SearchThumb>
            <form onSubmit={handleInputSubmit}>
                <input type="text" name="search" value={value} placeholder="Search..." onChange={e => setValue(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </SearchThumb>
    )
}