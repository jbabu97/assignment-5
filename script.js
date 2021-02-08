const foodSearch = () => {
    const searchItems = document.getElementById('food_search').value;
    console.log(searchItems);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItems}`;

    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayMeals(data.meals); 
        console.log(data);
    })
    
};

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal_container')
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-4';
        mealDiv.innerHTML = `
        <div onclick="getIngredients()" id="single_meal" class= my-2 p-3 bg-info">
        <img class="img-fluid food_img" src="${meal.strMealThumb}" alt="">
        <h2 class="text-center">${meal.strMeal}</h2>
          
      </>
        `;
        mealContainer.appendChild(mealDiv)

        const afterSearch = document.getElementById('food_search').value = '';

    });
};

const getIngredients = ingredient => {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=${ingredient}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => data.meals)
}
