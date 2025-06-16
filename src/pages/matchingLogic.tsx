// // this file is for testing the matching logic on simple data

// // basic matching logic 
// // iterate over every ingredient against every recipe - if there's a match,
// // create a new object with a key of the recipe and value of the ingredient
// // keep iterating, if there is a match with a recipe that already exists, 
// // just add the ingredient as a value
// // if the key (recipe) hasn't had a match before, create a new key


// // todo: make the matching logic more elaborated, check the amounts of ingredients
// // if no ingredient, check for substitutes 


// const recipes = [
//   {
//     name: "Spaghetti Aglio e Olio",
//     image: "/images/spaghetti_aglio_e_olio.jpg",
//     ingredients: [
//       { name: "Spaghetti", quantity: 100, unit: "g" },
//       { name: "Garlic", quantity: 2, unit: "cloves" },
//       { name: "Olive Oil", quantity: 2, unit: "tbsp" },
//       { name: "Chili Flakes", quantity: 0.5, unit: "tsp" },
//       { name: "Salt", quantity: 1, unit: "tsp" }
//     ],
//     instructions: [
//       "Boil spaghetti in salted water until al dente.",
//       "Meanwhile, sauté garlic and chili flakes in olive oil.",
//       "Drain pasta and add to the pan with the garlic oil.",
//       "Toss everything together and serve hot."
//     ]
//   },
//   {
//     name: "Simple Vegetable Stir Fry",
//     image: "/images/vegetable_stir_fry.jpg",
//     ingredients: [
//       { name: "Broccoli", quantity: 100, unit: "g" },
//       { name: "Carrot", quantity: 1, unit: "pcs" },
//       { name: "Bell Pepper", quantity: 1, unit: "pcs" },
//       { name: "Soy Sauce", quantity: 2, unit: "tbsp" },
//       { name: "Garlic", quantity: 1, unit: "clove" },
//       { name: "Oil", quantity: 1, unit: "tbsp" }
//     ],
//     instructions: [
//       "Chop all vegetables into bite-sized pieces.",
//       "Heat oil in a pan and sauté garlic.",
//       "Add all vegetables and stir fry on high heat for 5–7 minutes.",
//       "Add soy sauce, toss well, and serve."
//     ]
//   },
//   {
//     name: "Tomato Omelette",
//     image: "/images/tomato_omelette.jpg",
//     ingredients: [
//       { name: "Eggs", quantity: 2, unit: "pcs" },
//       { name: "Tomato", quantity: 1, unit: "pcs" },
//       { name: "Onion", quantity: 0.5, unit: "pcs" },
//       { name: "Salt", quantity: 0.5, unit: "tsp" },
//       { name: "Oil", quantity: 1, unit: "tbsp" }
//     ],
//     instructions: [
//       "Chop tomato and onion finely.",
//       "Beat eggs with salt, tomato, and onion.",
//       "Heat oil in a non-stick pan.",
//       "Pour the mixture and cook until golden brown on both sides."
//     ]
//   },
//   {
//     name: "Grilled Cheese Sandwich",
//     image: "/images/grilled_cheese.jpg",
//     ingredients: [
//       { name: "Bread", quantity: 2, unit: "pcs" },
//       { name: "Cheese", quantity: 2, unit: "slices" },
//       { name: "Butter", quantity: 1, unit: "tbsp" }
//     ],
//     instructions: [
//       "Butter one side of each bread slice.",
//       "Place cheese between unbuttered sides.",
//       "Grill on a pan until both sides are golden and the cheese is melted."
//     ]
//   }
// ];


// const ingredients = [
//     {name: 'cheese', quantity: 3, unit: 'g'},
//     {name: 'juice', quantity: 2, unit: 'liters'},
//     {name: 'potato', quantity: 7, unit: 'pcs'}
// ]


// // iterate over every ingredient against every recipe

// const matches = ingredients.reduce((acc, ingredient) => {
//     const valueName = ingredient.name;
//     console.log(valueName);
//     return acc
// }, {})