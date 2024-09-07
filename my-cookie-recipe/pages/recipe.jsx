"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

export default function RecipePage() {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    // Simulate API call to load recipe data
    setTimeout(() => {
      const fakeRecipeData = {
        name: "Mom's World Famous Banana Bread",
        image: "https://example.com/bananabread.jpg",
        description: "This classic banana bread recipe comes from my mom.",
        prepTime: "PT15M",
        cookTime: "PT1H",
        totalTime: "PT1H15M",
        recipeYield: "1 loaf",
        ingredients: [
          "3 or 4 ripe bananas, smashed",
          "1 egg",
          "3/4 cup of sugar",
          "1/2 cup of chopped walnuts",
          "1 1/2 cups of all-purpose flour",
          "1 teaspoon of baking soda",
          "Pinch of salt",
        ],
        instructions: [
          "Preheat the oven to 350°F (175°C).",
          "In a bowl, mix the smashed bananas and sugar. Add the egg and mix well.",
          "Sift the flour, baking soda, and salt together. Slowly fold into the banana mixture.",
          "Add walnuts and pour the batter into a greased loaf pan.",
          "Bake for 60 minutes or until a toothpick inserted into the center comes out clean.",
        ],
      };

      setRecipeData(fakeRecipeData);

      // Reinitialize Instacart widget
      if (window.instacart) {
        window.instacart.widgets.init();
      } else {
        const instacartScript = document.createElement("script");
        instacartScript.src = "https://widgets.instacart.com/widget-bundle-v2.js";
        instacartScript.async = true;
        instacartScript.onload = () => window.instacart.widgets.init();
        document.body.appendChild(instacartScript);
      }
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Mom's World Famous Banana Bread</title>
        {recipeData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Recipe",
                name: recipeData.name,
                image: recipeData.image,
                description: recipeData.description,
                prepTime: recipeData.prepTime,
                cookTime: recipeData.cookTime,
                totalTime: recipeData.totalTime,
                recipeYield: recipeData.recipeYield,
                recipeIngredient: recipeData.ingredients,
                recipeInstructions: recipeData.instructions.map((step) => ({
                  "@type": "HowToStep",
                  text: step,
                })),
              }),
            }}
          />
        )}
      </Head>

      <main style={{ margin: "5%" }}>
        {!recipeData ? (
          <p>Loading recipe...</p>
        ) : (
          <>
            <h1>{recipeData.name}</h1>
            <p>{recipeData.description}</p>
            <img
              src={recipeData.image}
              alt={recipeData.name}
              style={{ display: "block", margin: "20px auto", width: "300px" }}
            />

            <h2>Ingredients</h2>
            <ul>
              {recipeData.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>

            <h2>Instructions</h2>
            <ol>
              {recipeData.instructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ol>

            {/* Instacart widget */}
            <div
              id="shop-with-instacart-v1"
              data-affiliate_id="5018"
              data-source_origin="affiliate_hub"
              data-affiliate_platform="recipe_widget"
            ></div>
          </>
        )}

        {/* Load Instacart widget script */}
        <Script
          id="instacart-widget"
          strategy="afterInteractive"
          src="https://widgets.instacart.com/widget-bundle-v2.js"
          async
        />
      </main>
    </>
  );
}
