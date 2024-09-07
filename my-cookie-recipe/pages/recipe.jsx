"use client";

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
              description:
                "These classic chocolate chip cookies are crispy on the outside and chewy on the inside.",
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
                "2 cups semisweet chocolate chips",
              ],
              recipeInstructions:
                "Preheat the oven to 350°F (175°C). In a large bowl, cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve the baking soda in hot water, and add to the batter along with salt. Stir in flour and chocolate chips. Drop by large spoonfuls onto ungreased baking sheets. Bake for about 10 minutes, or until edges are nicely browned.",
              nutrition: {
                "@type": "NutritionInformation",
                calories: "300 calories",
                fatContent: "15 grams fat",
              },
              prepTime: "PT20M",
              cookTime: "PT10M",
              recipeYield: "24 cookies",
              suitableForDiet: "https://schema.org/LowSugarDiet",
            }),
          }}
        />
      </Head>

      <Box margin="5%">
        <Flex direction="column" align="center">
          <Heading>Classic Chocolate Chip Cookies</Heading>
          <Text textAlign="center">
            These classic chocolate chip cookies are crispy on the outside and
            chewy on the inside.
          </Text>

          <Image
            src="https://example.com/chocolatechipcookies.jpg"
            alt="Classic Chocolate Chip Cookies"
            maxWidth="300px"
            marginY="20px"
            borderRadius="10px"
          />

          <HStack spacing={8} marginY={4}>
            <Text>
              <strong>Prep Time:</strong> PT20M
            </Text>
            <Text>
              <strong>Cook Time:</strong> PT10M
            </Text>
            <Text>
              <strong>Total Time:</strong> PT30M
            </Text>
            <Text>
              <strong>Yield:</strong> 24 cookies
            </Text>
          </HStack>

          <Divider my={6} />

          <VStack align="flex-start" width="100%">
            <Heading size="md">Ingredients</Heading>
            <OrderedList>
              <ListItem>1 cup butter, softened</ListItem>
              <ListItem>1 cup white sugar</ListItem>
              <ListItem>1 cup packed brown sugar</ListItem>
              <ListItem>2 eggs</ListItem>
              <ListItem>1 tsp vanilla extract</ListItem>
              <ListItem>2 cups all-purpose flour</ListItem>
              <ListItem>1 tsp baking soda</ListItem>
              <ListItem>1/2 tsp salt</ListItem>
              <ListItem>2 cups semisweet chocolate chips</ListItem>
            </OrderedList>
          </VStack>

          <Divider my={6} />

          <VStack align="flex-start" width="100%">
            <Heading size="md">Instructions</Heading>
            <Text>
              Preheat the oven to 350°F (175°C). In a large bowl, cream together
              the butter, white sugar, and brown sugar until smooth. Beat in the
              eggs one at a time, then stir in the vanilla. Dissolve the baking
              soda in hot water, and add to the batter along with salt. Stir in
              flour and chocolate chips. Drop by large spoonfuls onto ungreased
              baking sheets. Bake for about 10 minutes, or until edges are
              nicely browned.
            </Text>
          </VStack>

          <Divider my={6} />

          <VStack align="flex-start" width="100%">
            <Heading size="md">Nutrition Facts</Heading>
            <SimpleGrid columns={2} spacing={4}>
              <Text>Calories: 300 calories</Text>
              <Text>Fat: 15 grams fat</Text>
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
