"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const [recipeData, setRecipeData] = useState(null);

  // Fake API call using useEffect
  useEffect(() => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      const fakeRecipeData = {
        name: "Pumpkin Spice Latte",
        image: "https://example.com/pumpkinspicelatte.jpg",
        description: "A warm, cozy pumpkin spice latte made with real pumpkin puree and a hint of cinnamon.",
        ingredients: [
          "2 cups milk (dairy or non-dairy)",
          "2 tbsp pumpkin puree",
          "1 tbsp sugar",
          "1/2 tsp pumpkin pie spice",
          "1/2 tsp vanilla extract",
          "1/4 cup brewed espresso or strong coffee",
          "Whipped cream and cinnamon for topping"
        ],
        instructions:
          "In a small saucepan, heat the milk, pumpkin puree, and sugar over medium heat until hot but not boiling. Stir in the pumpkin pie spice, vanilla extract, and espresso. Pour into a mug, top with whipped cream and a sprinkle of cinnamon, and enjoy your cozy pumpkin spice latte!",
        nutrition: {
          calories: "180 calories",
          fatContent: "6 grams fat"
        },
        prepTime: "PT5M",
        cookTime: "PT5M",
        yield: "1 serving"
      };

      setRecipeData(fakeRecipeData); // Simulate the API response
    }, 1500); // Simulate a delay of 1.5 seconds
  }, []);

  return (
    <>
      <Head>
        <title>Pumpkin Spice Latte</title>

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Recipe",
              name: "Pumpkin Spice Latte",
              image: "https://example.com/pumpkinspicelatte.jpg",
              description: "A warm, cozy pumpkin spice latte made with real pumpkin puree and a hint of cinnamon.",
              cookingMethod: "Stovetop",
              recipeIngredient: [
                "2 cups milk (dairy or non-dairy)",
                "2 tbsp pumpkin puree",
                "1 tbsp sugar",
                "1/2 tsp pumpkin pie spice",
                "1/2 tsp vanilla extract",
                "1/4 cup brewed espresso or strong coffee",
                "Whipped cream and cinnamon for topping"
              ],
              recipeInstructions:
                "In a small saucepan, heat the milk, pumpkin puree, and sugar over medium heat until hot but not boiling. Stir in the pumpkin pie spice, vanilla extract, and espresso. Pour into a mug, top with whipped cream and a sprinkle of cinnamon, and enjoy your cozy pumpkin spice latte!",
              nutrition: {
                "@type": "NutritionInformation",
                calories: "180 calories",
                fatContent: "6 grams fat"
              },
              prepTime: "PT5M",
              cookTime: "PT5M",
              recipeYield: "1 serving",
              suitableForDiet: "https://schema.org/LowSugarDiet"
            })
          }}
        />
      </Head>

      <main style={{ margin: "5%" }}>
        {!recipeData ? (
          <p>Loading recipe...</p>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>{recipeData.name}</h1>
            <p style={{ textAlign: "center" }}>{recipeData.description}</p>
            <img
              src={recipeData.image}
              alt={recipeData.name}
              style={{
                display: "block",
                margin: "20px auto",
                maxWidth: "300px",
                borderRadius: "10px"
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "20px 0"
              }}
            >
              <div>
                <strong>Prep Time:</strong> {recipeData.prepTime}
              </div>
              <div>
                <strong>Cook Time:</strong> {recipeData.cookTime}
              </div>
              <div>
                <strong>Total Time:</strong> {recipeData.prepTime + recipeData.cookTime}
              </div>
              <div>
                <strong>Yield:</strong> {recipeData.yield}
              </div>
            </div>

            <hr />

            <h2>Ingredients</h2>
            <ol style={{ paddingLeft: "20px" }}>
              {recipeData.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ol>

            <hr />

            <h2>Instructions</h2>
            <p>{recipeData.instructions}</p>

            <hr />

            <h2>Nutrition Facts</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "20px 0"
              }}
            >
              <div>Calories: {recipeData.nutrition.calories}</div>
              <div>Fat: {recipeData.nutrition.fatContent}</div>
            </div>
          </>
        )}

        <hr />

        {/* Instacart widget */}
        <h2>Shop Ingredients</h2>
        <div
          id="shop-with-instacart-v1"
          data-affiliate_id="5018"
          data-source_origin="affiliate_hub"
          data-affiliate_platform="recipe_widget"
        ></div>

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
