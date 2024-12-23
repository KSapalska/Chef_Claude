import ReactMarkdown from 'react-markdown'
import React from 'react';

export default function ClaudeRecipe({ recipe }){
    return (
  <section className="suggested-recipe-container">
     <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{recipe.trim()}</ReactMarkdown>
  </section>

)
}
