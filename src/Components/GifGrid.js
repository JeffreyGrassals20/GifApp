import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);
   
    return (
        <>
        <h2>{category} </h2>
        {loading && <h5 className= 'card animate__animated animate__flash'>Loading...</h5>}

        { <div className = 'card-grid'>
                <h4>
                    {
                        images.map((img) => (
                         <GifGridItem  {...img} key={img.id}/>
                        ))
                    }
                </h4>

        </div> }

        </>
    )
}
