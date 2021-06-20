import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({recipes}) {
    return (
      <>
      {
      recipes.map(recipe => {
        return <Recipe key={Recipe.id} {...recipe} />
      })
      
      }  
      </>
    )
}
