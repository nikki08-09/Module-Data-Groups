// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// The problem is that the ingredients are being logged as an array, which is not what we want. We want to log each ingredient on a new line. To fix this, we can use the join method to join the ingredients array into a string with a newline character as the separator.

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
