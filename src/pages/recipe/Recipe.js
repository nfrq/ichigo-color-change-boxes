import Header from "../../components/recipe/RecipeHeader";
import Content from "../../components/recipe/RecipeContent";
import { Page } from "../../components/shared/Page";
import './Recipe.css';

function Recipe() {
  return (
    <Page>
      <Header />
      <Content />
    </Page>
  );
}

export default Recipe;