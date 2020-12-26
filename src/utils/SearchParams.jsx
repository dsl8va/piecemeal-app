
const Cuisines = [
  "African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"
]

const Diets = [
  "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole 30"
]

const Intolerances = [
  "Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"
]

const Nutrients = [
  "Calories (in kcal)", "Fat (in g)", "Trans Fat (in g)", "Saturated Fat (in g)", "Mono Unsaturated Fat (in g)", "Poly Unsaturated Fat (in g)", "Protein (in g)", "Cholesterol (in mg)", "Carbohydrates (in g)", "Net Carbohydrates (in g)", "Alcohol (in g)", "Fiber (in g)", "Sugar (in g)", "Sodium (in mg)", "Caffein (in mg)"
]

const Vitamins = [
  "Calcium (in mg)", "Choline (in mg)", "Copper (in mg)", "Fluoride (in mg)", "Folate (in µg)", "Folic Acid (in µg)", "Iodine (in µg)", "Iron (in mg)", "Magnesium (in mg)", "Manganese (in mg)", "Phosphorus (in mg)", "Potassium (in mg)", "Selenium (in µg)", "Vitamin A (in IU)", "Vitamin B1 (in mg)", "Vitamin B2 (in mg)", "Vitamin B3 (in mg)", "Vitamin B5 (in mg)", "Vitamin B6 (in mg)", "Vitamin B12 (in µg)", "Vitamin C (in mg)", "Vitamin D (in µg)", "Vitamin E (in mg)", "Vitamin K (in µg)", "Zinc (in mg)"
]

const gluten = 'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).';
const keto = 'The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.';
const veg = 'No ingredients may contain meat or meat by-products, such as bones or gelatin.';
const lacto = 'All ingredients must be vegetarian and none of the ingredients can be or contain egg.';
const ovo = 'All ingredients must be vegetarian and none of the ingredients can be or contain dairy.';
const vegan = 'No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.';
const pesc = 'Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.';
const paleo = 'Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.';
const primal = 'Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.';
const whole30 = 'Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.';

export {
  Cuisines,
  Diets,
  Intolerances,
  Nutrients,
  Vitamins,
  gluten,
  keto,
  veg,
  lacto,
  ovo,
  vegan,
  pesc,
  paleo,
  primal,
  whole30
}