"use client"
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Classic Chocolate Chip Cookies</title>

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Recipe",
              name: "Classic Chocolate Chip Cookies",
              image: "https://example.com/chocolatechipcookies.jpg",
              description: "These classic chocolate chip cookies are crispy on the outside and chewy on the inside.",
              cookingMethod: "Bake",
              recipeIngredient: [
                "1 cup butter, softened",
                "1 cup white sugar",
                "1 cup packed brown sugar",
                "2 eggs",
                "1 tsp vanilla extract",
                "2 cups all-purpose flour",
                "1 tsp baking soda",
                "1/2 tsp salt",
                "2 cups semisweet chocolate chips"
              ],
              recipeInstructions:
                "Preheat the oven to 350°F (175°C). In a large bowl, cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve the baking soda in hot water, and add to the batter along with salt. Stir in flour and chocolate chips. Drop by large spoonfuls onto ungreased baking sheets. Bake for about 10 minutes, or until edges are nicely browned.",
              nutrition: {
                "@type": "NutritionInformation",
                calories: "300 calories",
                fatContent: "15 grams fat"
              },
              prepTime: "PT20M",
              cookTime: "PT10M",
              recipeYield: "24 cookies",
              suitableForDiet: "https://schema.org/LowSugarDiet"
            })
          }}
        />
      </Head>

      <main style={{ margin: "5%" }}>
        <h1 style={{ textAlign: "center" }}>Classic Chocolate Chip Cookies</h1>
        <p style={{ textAlign: "center" }}>
          These classic chocolate chip cookies are crispy on the outside and chewy on the inside.
        </p>
        <img
          src="https://example.com/chocolatechipcookies.jpg"
          alt="Classic Chocolate Chip Cookies"
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
            <strong>Prep Time:</strong> PT20M
          </div>
          <div>
            <strong>Cook Time:</strong> PT10M
          </div>
          <div>
            <strong>Total Time:</strong> PT30M
          </div>
          <div>
            <strong>Yield:</strong> 24 cookies
          </div>
        </div>

        <hr />

        <h2>Ingredients</h2>
        <ol style={{ paddingLeft: "20px" }}>
          <li>1 cup butter, softened</li>
          <li>1 cup white sugar</li>
          <li>1 cup packed brown sugar</li>
          <li>2 eggs</li>
          <li>1 tsp vanilla extract</li>
          <li>2 cups all-purpose flour</li>
          <li>1 tsp baking soda</li>
          <li>1/2 tsp salt</li>
          <li>2 cups semisweet chocolate chips</li>
        </ol>

        <hr />

        <h2>Instructions</h2>
        <p>
          Preheat the oven to 350°F (175°C). In a large bowl, cream together the butter, white sugar, and brown sugar until
          smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve the baking soda in hot water, and add to
          the batter along with salt. Stir in flour and chocolate chips. Drop by large spoonfuls onto ungreased baking sheets.
          Bake for about 10 minutes, or until edges are nicely browned.
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
          <div>Calories: 300 calories</div>
          <div>Fat: 15 grams fat</div>
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
