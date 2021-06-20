import RecipeList from "./RecipeList"

function App() {
  return (
    <>
      <RecipeList recipes={sampleRecipes} />
    </>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put Salt on Chicken\n2. Put chicken on table \n3. eat the Chicken ",
    ingredients:[
      {
        id:1,
        name:'Chicken',
        amount:220
      },
      {
        id:2,
        name:'Salt',
        amount:20
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Paneer',
    servings: 2,
    cookTIme: '2:45',
    instructions: "1. Put Salt on Chicken\n2. Put chicken on table \n3. eat the Chicken ",
    ingredients:[
      {
        id:1,
        name:'Paneer',
        amount:220
      },
      {
        id:2,
        name:'Salt',
        amount:20
      }
    ]
  }
]
export default App;
