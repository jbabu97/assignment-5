const searchButton = document.getElementById('search');
searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('food_input');
    searchInputValue = searchInput.value;
    console.log('clicked');
    document.getElementById('display').innerText = searchInputValue;
})

function showDetails(name) {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    .then(res => res.json())
    .then((data) => {
        // displayMeal(data);
        console.log(data);
    })

}

showDetails(name)

const displayMeal = (meals) => {
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        console.log(meal.strMeal);
    }
}