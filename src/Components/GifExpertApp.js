import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp  =() => {

    const  brands  = ['Basketball'];

    const [categories, setCategories] = useState(brands)

    /*const handleAdd = () => {
        setCategories([...categories, 'new one'])
    }*/

    return (
        <>
            <h2> Gif Expert </h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />
            <ol>
                {
                    categories.map( category => 
                        <GifGrid key={category} category={category}/>
                   )
                }
            </ol>
        </>
    )
    
}
export default GifExpertApp
