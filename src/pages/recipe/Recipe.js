import Header from "../../components/recipe/RecipeHeader";
import Content from "../../components/recipe/RecipeContent";
import './Recipe.css'

function Recipe() {
  return (
    <div className='page'>
      <Header />
      <Content />
    </div>
  );
}

export default Recipe;