"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import {
  Box,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Flex,
  VStack,
  HStack,
  Divider,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

export default function Home() {
  const [recipeData, setRecipeData] = useState(null);

  // Simulate an API call using useEffect
  useEffect(() => {
    setTimeout(() => {
      const fakeRecipeData = {
        name: "Classic Chocolate Chip Cookies",
        image: "https://example.com/chocolatechipcookies.jpg",
        description:
          "These classic chocolate chip cookies are crispy on the outside and chewy on the inside.",
        cookingMethod: "Bake",
        ingredients: [
          "1 cup butter, softened",
          "1 cup white sugar",
          "1 cup packed brown sugar",
          "2 eggs",
          "1 tsp vanilla extract",
          "2 cups all-purpose flour",
          "1 tsp baking soda",
          "1/2 tsp salt",
          "2 cups semisweet chocolate chips",
        ],
        instructions:
          "Preheat the oven to 350°F (175°C). In a large bowl, cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve the baking soda in hot water, and add to the batter along with salt. Stir in flour and chocolate chips. Drop by large spoonfuls onto ungreased baking sheets. Bake for about 10 minutes, or until edges are nicely browned.",
        nutrition: {
          calories: "300 calories",
          fatContent: "15 grams fat",
        },
        prepTime: "PT20M",
        cookTime: "PT10M",
        recipeYield: "24 cookies",
      };

      setRecipeData(fakeRecipeData);

      // Reinitialize the Instacart widget after the recipe data is loaded
      if (window.instacart) {
        window.instacart.widgets.init();
      } else {
        const instacartScript = document.createElement("script");
        instacartScript.src = "https://widgets.instacart.com/widget-bundle-v2.js";
        instacartScript.async = true;
        instacartScript.onload = () => window.instacart.widgets.init();
        document.body.appendChild(instacartScript);
      }
    }, 1500); // Simulate a delay of 1.5 seconds for the fake API call
  }, []);

  return (
    <>
      <Head>
        <title>{recipeData ? recipeData.name : "Loading..."}</title>

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
                cookingMethod: recipeData.cookingMethod,
                recipeIngredient: recipeData.ingredients,
                recipeInstructions: recipeData.instructions,
                nutrition: {
                  "@type": "NutritionInformation",
                  calories: recipeData.nutrition.calories,
                  fatContent: recipeData.nutrition.fatContent,
                },
                prepTime: recipeData.prepTime,
                cookTime: recipeData.cookTime,
                recipeYield: recipeData.recipeYield,
                suitableForDiet: "https://schema.org/LowSugarDiet",
              }),
            }}
          />
        )}
      </Head>

      <Box margin="5%">
        {!recipeData ? (
          <Text textAlign="center">Loading recipe...</Text>
        ) : (
          <Flex direction="column" align="center">
            <Heading>{recipeData.name}</Heading>
            <Text textAlign="center">{recipeData.description}</Text>

            <Image
              src={recipeData.image}
              alt={recipeData.name}
              maxWidth="300px"
              marginY="20px"
              borderRadius="10px"
            />

            <HStack spacing={8} marginY={4}>
              <Text>
                <strong>Prep Time:</strong> {recipeData.prepTime}
              </Text>
              <Text>
                <strong>Cook Time:</strong> {recipeData.cookTime}
              </Text>
              <Text>
                <strong>Total Time:</strong> PT30M
              </Text>
              <Text>
                <strong>Yield:</strong> {recipeData.recipeYield}
              </Text>
            </HStack>

            <Divider my={6} />

            <VStack align="flex-start" width="100%">
              <Heading size="md">Ingredients</Heading>
              <OrderedList>
                {recipeData.ingredients.map((ingredient, index) => (
                  <ListItem key={index}>{ingredient}</ListItem>
                ))}
              </OrderedList>
            </VStack>

            <Divider my={6} />

            <VStack align="flex-start" width="100%">
              <Heading size="md">Instructions</Heading>
              <Text>{recipeData.instructions}</Text>
            </VStack>

            <Divider my={6} />

            <VStack align="flex-start" width="100%">
              <Heading size="md">Nutrition Facts</Heading>
              <SimpleGrid columns={2} spacing={4}>
                <Text>Calories: {recipeData.nutrition.calories}</Text>
                <Text>Fat: {recipeData.nutrition.fatContent}</Text>
              </SimpleGrid>
            </VStack>

            <Divider my={6} />

            {/* Instacart widget */}
            <Box width="100%">
              <Heading size="md">Shop Ingredients</Heading>
              <div
                id="shop-with-instacart-v1"
                data-affiliate_id="5018"
                data-source_origin="affiliate_hub"
                data-affiliate_platform="recipe_widget"
              ></div>
            </Box>
          </Flex>
        )}
      </Box>

      {/* Load Instacart widget script */}
      <Script
        id="instacart-widget"
        strategy="afterInteractive"
        src="https://widgets.instacart.com/widget-bundle-v2.js"
        async
      />
    </>
  );
}
