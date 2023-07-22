import { useState } from "react";

import Header from "../../components/recipe/RecipeHeader";
import Content from "../../components/recipe/RecipeContent";
import { Page } from "../../components/shared/Page";
import './Recipe.css';

import { colors } from "../../config/colors";
import { randomColor } from "../../utils/functions";
import { 
  ColorContext, 
  ColorUpdateContext } from "../../contexts/ColorContext";

function Recipe() {
  const [appliedColors, setAppliedColors] = useState(randomColor(colors, 9));

  const updateColors = () => setAppliedColors(randomColor(colors, 9));

  return (
    <Page>
      <ColorContext.Provider value={appliedColors}>
        <ColorUpdateContext.Provider value={updateColors}>
          <Header />
          <Content />
        </ColorUpdateContext.Provider>
      </ColorContext.Provider>
    </Page>
  );
}

export default Recipe;