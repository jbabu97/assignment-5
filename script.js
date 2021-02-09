const foodSearch = () => {
    const searchItems = document.getElementById('food_search').value.trim();
    console.log(searchItems);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItems}`;

    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayMeals(data.meals); 
        console.log(data);
    })
    .catch(error => displayError('Something went wrong!'))
    
};

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal_container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-4';
        mealDiv.innerHTML = `
        <div onclick="IngredientsDetails()" id="single_meal" class= my-2 p-4 bg-info">
        <img class="img-fluid food_img" src="${meal.strMealThumb}" alt="">
        <h2 class="text-center">${meal.strMeal}</h2>
          
      </>
        `;
        mealContainer.appendChild(mealDiv)
    });
};

const displayError = error => {
    const errorTag = document.getElementById('error_message');
    errorTag.innerText = error;
}
