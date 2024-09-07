"use client"
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blueberry Muffins</title>

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Recipe",
              name: "Blueberry Muffins",
              image: "https://example.com/blueberrymuffins.jpg",
              description: "These blueberry muffins are light, fluffy, and filled with fresh blueberries.",
              cookingMethod: "Bake",
              recipeIngredient: [
                "1 1/2 cups all-purpose flour",
                "1/2 cup sugar",
                "2 tsp baking powder",
                "1/2 tsp salt",
                "1/2 cup milk",
                "1/4 cup vegetable oil",
                "1 egg",
                "1 cup fresh blueberries"
              ],
              recipeInstructions:
                "Preheat the oven to 400°F (200°C). In a large bowl, whisk together the flour, sugar, baking powder, and salt. In another bowl, combine the milk, vegetable oil, and egg. Stir the wet ingredients into the dry ingredients until just combined. Fold in the blueberries. Spoon the batter into greased muffin cups, filling each cup about 2/3 full. Bake for 20 minutes, or until a toothpick inserted into the center comes out clean.",
              nutrition: {
                "@type": "NutritionInformation",
                calories: "180 calories",
                fatContent: "8 grams fat"
              },
              prepTime: "PT10M",
              cookTime: "PT20M",
              recipeYield: "12 muffins",
              suitableForDiet: "https://schema.org/LowSugarDiet"
            })
          }}
        />
      </Head>

      <main style={{ margin: "5%" }}>
        <h1 style={{ textAlign: "center" }}>Blueberry Muffins</h1>
        <p style={{ textAlign: "center" }}>
          These blueberry muffins are light, fluffy, and filled with fresh blueberries.
        </p>
        <img
          src="https://example.com/blueberrymuffins.jpg"
          alt="Blueberry Muffins"
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
            <strong>Prep Time:</strong> PT10M
          </div>
          <div>
            <strong>Cook Time:</strong> PT20M
          </div>
          <div>
            <strong>Total Time:</strong> PT30M
          </div>
          <div>
            <strong>Yield:</strong> 12 muffins
          </div>
        </div>

        <hr />

        <h2>Ingredients</h2>
        <ol style={{ paddingLeft: "20px" }}>
          <li>1 1/2 cups all-purpose flour</li>
          <li>1/2 cup sugar</li>
          <li>2 tsp baking powder</li>
          <li>1/2 tsp salt</li>
          <li>1/2 cup milk</li>
          <li>1/4 cup vegetable oil</li>
          <li>1 egg</li>
          <li>1 cup fresh blueberries</li>
        </ol>

        <hr />

        <h2>Instructions</h2>
        <p>
          Preheat the oven to 400°F (200°C). In a large bowl, whisk together the flour, sugar, baking powder, and salt. In another bowl, combine the milk, vegetable oil, and egg. Stir the wet ingredients into the dry ingredients until just combined. Fold in the blueberries. Spoon the batter into greased muffin cups, filling each cup about 2/3 full. Bake for 20 minutes, or until a toothpick inserted into the center comes out clean.
        </p>

        <hr />

        <h2>Nutrition Facts</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "20px 0"
          }}
        >
          <div>Calories: 180 calories</div>
          <div>Fat: 8 grams fat</div>
        </div>

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
