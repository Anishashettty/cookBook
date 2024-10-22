require("../modules/database");
const Category = require("../modules/Category");
/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
try{
  const limitNumber=5;
  const categories=await Category.find({}).limit(limitNumber);
  res.render('index',{title:'Cooking Blog -Home',categories});
}catch(error){
  res.status(500).send({message:error.message ||"Error occured"})
}

  res.render("index", { title: "Cooking blog - Home" });
};










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
