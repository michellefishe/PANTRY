//recipe object constructor
class newRecipe {
    constructor(name, time, categories, tags, image, ingredients, instructions) {
        this.recipeName = name;
        this.recipeTime = time;
        this.recipeCat = categories;
        this.recipeTags = tags;
        this.recipeImg = image;
        this.recipeIngr = ingredients;
        this.recipeInst = instructions;
    }
}

//ingredients object constructor
class newIngredientSection {
    constructor(title, ingredients) {
        this.ingrSecTitle = title;
        this.ingredients = ingredients;
    }
}

//instructions object constructor
class newInstructionsSection {
    constructor(title, steps) {
        this.instrSecTitle = title;
        this.instructions = steps;
    }
}

//instructions object constructor
class newIngredient{
    constructor(amount, measurement, item) {
        this.amount = amount;
        this.measurement = measurement;
        this.item = item;
    }
}