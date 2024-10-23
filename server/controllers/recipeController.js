require("../modules/database");
const Category = require("../modules/Category");
const Recipe = require('../modules/recipe');



// async function insertDymmyRecipeData(){
//   try {
//     await Recipe.insertMany([
//      {
//        "name": "Southern Fried Chicken",
//        "description": "Crispy and juicy fried chicken served with a side of coleslaw.",
//        "email": "recipeemail@raddy.co.uk",
//        "ingredients": [
//          "4 chicken thighs",
//          "1 cup buttermilk",
//          "1 cup flour",
//          "1 teaspoon baking powder",
//          "1 teaspoon cayenne pepper",
//          "1 teaspoon hot smoked paprika",
//          "1/2 teaspoon salt",
//          "1/4 teaspoon pepper",
//          "Vegetable oil for frying"
//        ],
//        "category": "American",
//        "image": "southern-fried-chicken.jpg",
//        "instructions": [
//          "1. Marinate the chicken in buttermilk for at least 2 hours.",
//          "2. In a bowl, mix flour, baking powder, cayenne pepper, paprika, salt, and pepper.",
//          "3. Dredge the marinated chicken in the flour mixture.",
//          "4. Heat oil in a frying pan and fry the chicken until golden brown and crispy.",
//          "5. Drain on paper towels and serve with coleslaw."
//        ]
//      },
//      {
//        "name": "Buffalo Wings",
//        "description": "Spicy buffalo wings served with ranch dip.",
//        "email": "recipeemail@raddy.co.uk",
//        "ingredients": [
//          "2 pounds chicken wings",
//          "1/4 cup hot sauce",
//          "1 tablespoon butter",
//          "1 teaspoon garlic powder",
//          "1 teaspoon onion powder",
//          "1/2 teaspoon paprika",
//          "1/2 teaspoon cayenne pepper",
//          "Salt to taste",
//          "Ranch dip for serving"
//        ],
//        "category": "American",
//        "image": "buffalo-wings.jpg",
//        "instructions": [
//          "1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.",
//          "2. Mix garlic powder, onion powder, paprika, cayenne pepper, and salt, then coat the wings in the seasoning.",
//          "3. Bake the wings for 40-45 minutes, flipping halfway through, until crispy.",
//          "4. In a small saucepan, melt butter and mix with hot sauce.",
//          "5. Toss the baked wings in the sauce and serve with ranch dip."
//        ]
//      },
//      {
//        "name": "BBQ Ribs",
//        "description": "Slow-cooked BBQ pork ribs, smoky and tender.",
//        "email": "recipeemail@raddy.co.uk",
//        "ingredients": [
//          "Rack of pork ribs",
//          "1/2 cup BBQ sauce",
//          "2 tablespoons brown sugar",
//          "1 teaspoon smoked paprika",
//          "1 teaspoon garlic powder",
//          "1/2 teaspoon onion powder",
//          "1 teaspoon salt",
//          "1 teaspoon black pepper"
//        ],
//        "category": "American",
//        "image": "bbq-ribs.jpg",
//        "instructions": [
//          "1. Preheat oven to 300°F (150°C).",
//          "2. Mix brown sugar, paprika, garlic powder, onion powder, salt, and pepper.",
//          "3. Rub the mixture on both sides of the ribs.",
//          "4. Wrap the ribs in foil and bake for 2.5-3 hours until tender.",
//          "5. Unwrap, brush with BBQ sauce, and bake for another 30 minutes."
//        ]
//      },
//      {
//        "name": "Apple Pie",
//        "description": "Classic American dessert made with spiced apples and a flaky crust.",
//        "email": "recipeemail@raddy.co.uk",
//        "ingredients": [
//          "4 Granny Smith apples, peeled and sliced",
//          "1/2 cup sugar",
//          "1/4 cup brown sugar",
//          "1 teaspoon cinnamon",
//          "1/4 teaspoon nutmeg",
//          "1 tablespoon lemon juice",
//          "1 tablespoon flour",
//          "1 pie crust (top and bottom)"
//        ],
//        "category": "American",
//        "image": "apple-pie.jpg",
//        "instructions": [
//          "1. Preheat oven to 375°F (190°C).",
//          "2. In a bowl, mix apples, sugar, brown sugar, cinnamon, nutmeg, lemon juice, and flour.",
//          "3. Place the bottom pie crust in a pie dish and fill with the apple mixture.",
//          "4. Cover with the top pie crust, crimp the edges, and cut slits for ventilation.",
//          "5. Bake for 50-60 minutes until golden brown."
//        ]
//      },
//      {
//        "name": "Mac and Cheese",
//        "description": "Creamy macaroni and cheese with a crispy breadcrumb topping.",
//        "email": "recipeemail@raddy.co.uk",
//        "ingredients": [
//          "2 cups macaroni pasta",
//          "2 cups cheddar cheese, shredded",
//          "1/2 cup milk",
//          "1/4 cup heavy cream",
//          "2 tablespoons butter",
//          "2 tablespoons flour",
//          "1/2 cup breadcrumbs",
//          "Salt and pepper to taste"
//        ],
//        "category": "American",
//        "image": "mac-and-cheese.jpg",
//        "instructions": [
//          "1. Cook macaroni according to package instructions.",
//          "2. In a saucepan, melt butter, add flour, and cook for 1 minute to make a roux.",
//          "3. Gradually whisk in milk and cream, then bring to a simmer.",
//          "4. Stir in cheddar cheese until melted and smooth. Season with salt and pepper.",
//          "5. Combine macaroni with cheese sauce and transfer to a baking dish.",
//          "6. Top with breadcrumbs and bake at 350°F (175°C) for 20 minutes."
//        ]
//      },
//      {
//        "name": "Indian Butter Chicken",
//        "description": "Rich and creamy butter chicken cooked in a tomato-based gravy.",
//        "email": "recipeemail@raddy.co.uk",
//        "ingredients": [
//          "500g chicken breast, cut into chunks",
//          "1 cup tomato sauce",
//          "1/2 cup cream",
//          "1 onion, chopped",
//          "2 tablespoons butter",
//          "1 tablespoon ginger garlic paste",
//          "1 tablespoon garam masala",
//          "1/2 teaspoon turmeric",
//          "Salt to taste"
//        ],
//        "category": "Indian",
//        "image": "butter-chicken.jpg",
//        "instructions": [
//          "1. In a pan, melt butter and sauté onions until golden brown.",
//          "2. Add ginger garlic paste, garam masala, and turmeric. Cook for 1 minute.",
//          "3. Add tomato sauce and cook for 10 minutes.",
//          "4. Stir in cream and simmer for 5 more minutes.",
//          "5. Add chicken and cook until fully done.",
//          "6. Serve with naan or rice."
//        ]
//      },
//      {
//        "name": "Palak Paneer",
//        "description": "Paneer cooked in a creamy spinach gravy, spiced with Indian flavors.",
//        "email": "recipeemail@raddy.co.uk",
//        "ingredients": [
//          "250g paneer, cubed",
//          "2 cups spinach, blanched and pureed",
//          "1 onion, chopped",
//          "1 tablespoon ginger garlic paste",
//          "2 tablespoons cream",
//          "1 teaspoon cumin",
//          "1/2 teaspoon garam masala",
//          "1/2 teaspoon turmeric",
//          "Salt to taste"
//        ],
//        "category": "Indian",
//        "image": "palak-paneer.jpg",
//        "instructions": [
//          "1. Heat oil in a pan and fry paneer until golden. Set aside.",
//          "2. In the same pan, sauté onions until translucent.",
//          "3. Add ginger garlic paste, cumin, garam masala, and turmeric. Cook for 2 minutes.",
//          "4. Stir in spinach puree and simmer for 5 minutes.",
//          "5. Add fried paneer and cream. Simmer for 5 more minutes.",
//          "6. Serve hot with naan or rice."
//        ]
//      },
//      {
//        "name": "Chicken Biryani",
//        "description": "Aromatic and flavorful chicken biryani cooked with basmati rice.",
//        "email": "recipeemail@raddy.co.uk",
//        "ingredients": [
//          "500g chicken, marinated in yogurt and spices",
//          "2 cups basmati rice, soaked",
//          "1 onion, sliced",
//          "2 tablespoons biryani masala",
//          "1 cinnamon stick",
//          "3 cloves",
//          "4 cardamom pods",
//          "1/4 teaspoon saffron soaked in milk",
//          "2 tablespoons ghee"
//        ],
//        "category": "Indian",
//        "image": "chicken-biryani.jpg",
//        "instructions": [
//          "1. Heat ghee in a large pot and fry onions until crispy. Set aside.",
//          "2. In the same pot, fry cinnamon, cloves, and cardamom until fragrant.",
//          "3. Add marinated chicken and cook until browned.",
//          "4. Layer half the rice over the chicken, then add fried onions and saffron milk.",
//          "5. Add the remaining rice, cover, and cook on low heat for 20 minutes.",
//          "6. Fluff the biryani and serve hot."
//        ]
//      }
//    ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }
 
//  insertDymmyRecipeData();




/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
    const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
    const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
    const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);

    const food = { latest, thai, american, chinese };

    res.render('index', { title: 'Cooking Blog - Home', categories, food } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}



/**
 * GET /categories
 * categories
 */

exports.exploreCategories= async (req, res) => {
  try{
    const limitNumber=20;
    const categories=await Category.find({}).limit(limitNumber);
    res.render('categories',{title:'Cooking Blog -Home',categories});
  }catch(error){
    res.status(500).send({message:error.message ||"Error occured"})
  }
  
    res.render("index", { title: "Cooking blog - Home" });
  };


  /**
 * GET /categories/:id
 * categories By ID
 */

exports.exploreCategoriesById= async (req, res) => {
  try{
    let categoryId=req.params.id;
    const limitNumber=20;
    const categoryById=await Recipe .find({'category':categoryId}).limit(limitNumber);
    res.render('categories',{title:'Cooking Blog -Home',categoryById});
  }catch(error){
    res.status(500).send({message:error.message ||"Error occured"})
  }
}




  
   




/**
 * GET /recipe/:id
 * recipe
 */

exports.exploreRecipe = async(req, res) => {
  try {
    let recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    res.render('recipe', { title: 'Cooking Blog - Recipe', recipe } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 



/**
 * POSt/search
 * search
 */
exports.searchRecipe = async(req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipe = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
    res.render('search', { title: 'Cooking Blog - Search', recipe } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
  
}


/**
 * GET /explore-latest
 * Explplore Latest 
*/
exports.exploreLatest = async(req, res) => {
  try {
    const limitNumber = 20;
    const recipe = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
    res.render('explore-latest', { title: 'Cooking Blog - Explore Latest', recipe } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /explore-random
 * Explore Random as JSON
*/
exports.exploreRandom = async(req, res) => {
  try {
    let count = await Recipe.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let recipe = await Recipe.findOne().skip(random).exec();
    res.render('explore-random', { title: 'Cooking Blog - Explore Latest', recipe } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


















  







// async function insertDymmyCategoryData() {
//   try {
//     await Category.insertMany([
//       {
//         name: "Thai",
//         image: "thai-food.jpg",
//       },
//       {
//         name: "American",
//         image: "american-food.jpg",
//       },
//       {
//         name: "Chinese",
//         image: "chinese-food.jpg",
//       },
//       {
//         name: "Mexican",
//         image: "mexican-food.jpg",
//       },
//       {
//         name: "Indian",
//         image: "indian-food.jpg",
//       },
//       {
//         name: "Spanish",
//         image: "spanish-food.jpg",
//       },
//     ]);
//   } catch (error) {
//     console.log("err", +error);
//   }
// }
// insertDymmyCategoryData();
