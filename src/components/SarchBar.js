import React, { useContext } from 'react'
import { RecipeContext } from './App'

export default function SarchBar() {
    const { handleRecipeSearch } = useContext(RecipeContext)

    function handleChange(input) {
        handleRecipeSearch(input.search)
    }

    return (
        <div className="recipe-list__search-container">
            <input className="recipe-edit__input recipe-list__search-input" placeholder="Search ..." type="text" id="search" name="search" onChange={e => handleChange({ search: e.target.value })} />
        </div>
    )
}
