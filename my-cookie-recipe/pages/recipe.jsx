"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import {
  Box,
  Heading,
  Text,
  Image,
  OrderedList,
  ListItem,
  Flex,
  VStack,
  HStack,
  Divider,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";

export default function RecipePage() {
  const [recipeData, setRecipeData] = useState(null);

  // Simulating an API call to get the recipe data
  useEffect(() => {
    setTimeout(() => {
      const fakeRecipeData = {
        name: "Mom's World Famous Banana Bread",
        image: "https://example.com/bananabread.jpg",
        description: "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
        recipeCategory: "Dessert",
        recipeCuisine: "American",
        cookTime: "PT1H", // 1 hour
        prepTime: "PT15M", // 15 minutes
        totalTime: "PT1H15M", // 1 hour 15 minutes
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
        nutrition: {
          calories: "240 kcal",
          fatContent: "9g",
          carbohydrateContent: "34g",
          proteinContent: "4g",
          fiberContent: "2g",
          sugarContent: "18g",
        },
        suitableForDiet: ["LowFatDiet"],
      };

      setRecipeData(fakeRecipeData);
    }, 1500); // Simulate 1.5 second delay
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
                recipeCategory: recipeData.recipeCategory,
                recipeCuisine: recipeData.recipeCuisine,
                prepTime: recipeData.prepTime,
                cookTime: recipeData.cookTime,
                totalTime: recipeData.totalTime,
                recipeYield: recipeData.recipeYield,
                nutrition: {
                  "@type": "NutritionInformation",
                  calories: recipeData.nutrition.calories,
                  fatContent: recipeData.nutrition.fatContent,
                  carbohydrateContent: recipeData.nutrition.carbohydrateContent,
                  proteinContent: recipeData.nutrition.proteinContent,
                  fiberContent: recipeData.nutrition.fiberContent,
                  sugarContent: recipeData.nutrition.sugarContent,
                },
                recipeIngredient: recipeData.ingredients,
                recipeInstructions: recipeData.instructions.map((step) => ({
                  "@type": "HowToStep",
                  text: step,
                })),
                suitableForDiet: recipeData.suitableForDiet.map((diet) => ({
                  "@type": "RestrictedDiet",
                  name: diet,
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
            <Flex direction="column" align="center">
              <Heading>{recipeData.name}</Heading>
              <Text>{recipeData.description}</Text>
              <Image
                src={recipeData.image}
                alt={recipeData.name}
                borderRadius="lg"
                my={4}
              />

              <HStack spacing={8} my={4}>
                <Text>
                  <strong>Prep Time:</strong> {recipeData.prepTime}
                </Text>
                <Text>
                  <strong>Cook Time:</strong> {recipeData.cookTime}
                </Text>
                <Text>
                  <strong>Total Time:</strong> {recipeData.totalTime}
                </Text>
                <Text>
                  <strong>Yield:</strong> {recipeData.recipeYield}
                </Text>
              </HStack>

              <Divider my={6} />

              <VStack align="flex-start" width="100%">
                <Heading size="md">Ingredients</Heading>
                <OrderedList>
                  {recipeData.ingredients.map((ingredient, idx) => (
                    <ListItem key={idx}>{ingredient}</ListItem>
                  ))}
                </OrderedList>
              </VStack>

              <Divider my={6} />

              <VStack align="flex-start" width="100%">
                <Heading size="md">Instructions</Heading>
                <OrderedList>
                  {recipeData.instructions.map((instruction, idx) => (
                    <ListItem key={idx}>{instruction}</ListItem>
                  ))}
                </OrderedList>
              </VStack>

              <Divider my={6} />

              <VStack align="flex-start" width="100%">
                <Heading size="md">Nutrition Facts</Heading>
                <SimpleGrid columns={2} spacing={4}>
                  <Text>Calories: {recipeData.nutrition.calories}</Text>
                  <Text>Fat: {recipeData.nutrition.fatContent}</Text>
                  <Text>Carbohydrates: {recipeData.nutrition.carbohydrateContent}</Text>
                  <Text>Protein: {recipeData.nutrition.proteinContent}</Text>
                  <Text>Fiber: {recipeData.nutrition.fiberContent}</Text>
                  <Text>Sugar: {recipeData.nutrition.sugarContent}</Text>
                </SimpleGrid>
              </VStack>

              <Divider my={6} />
              <VStack align="flex-start" width="100%">
                <Heading size="md">Suitable for Diets</Heading>
                <HStack>
                  {recipeData.suitableForDiet.map((diet, idx) => (
                    <Badge key={idx}>{diet}</Badge>
                  ))}
                </HStack>
              </VStack>
            </Flex>

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
          </>
        )}
      </main>
    </>
  );
}
