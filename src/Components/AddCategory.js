import React,{useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {


    const [inputValue, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)

        console.log('Value has changed')
    } 

    const handleSubmit = (e) =>{
        e.preventDefault() 
        console.log('handleSubmit')
        if(inputValue.trim().length >= 1){
            setCategories(cats => [inputValue, ...cats])
            setInput('');
        }
    }
    return (
        <>
             <p> {inputValue}</p>
            <form onSubmit = {handleSubmit}>
            
                <h2>Add Category</h2>
                <input type="text" value = {inputValue} onChange = {handleInputChange}></input>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
