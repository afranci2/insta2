"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
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
  Badge,
} from "@chakra-ui/react";

export default function RecipePage() {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fakeRecipeData = {
        name: "Mom&#39;s World Famous Banana Bread",
        image: "https://example.com/bananabread.jpg",
        description:
          "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
        recipeCategory: "Dessert",
        recipeCuisine: "American",
        cookTime: "PT1H",
        prepTime: "PT15M",
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
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <title>Mom&#39;s World Famous Banana Bread</title>
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
                width={300} // Set width
                height={300} // Set height
                style={{
                  display: "block",
                  margin: "20px auto",
                  borderRadius: "10px",
                }}
              />

              {/* Other content */}
            </Flex>
          </>
        )}
      </main>
    </>
  );
}
