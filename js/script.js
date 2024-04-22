
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));

}
const displayMeals = meals => {
    const mealsContainer = document.getElementById('mealsContainer');
    mealsContainer.innerHTML = '';
    // console.log(meals);
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <!-- Button trigger modal -->
                <button onclick="detailsMealsId(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsMeals">
                Details
                </button>
            </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv);
    });
   
};
const detailsMealsId = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetailsMeals(data.meals[0]))
}
const displayDetailsMeals = meal => {
    const detailsBody = document.getElementById('detailsBody');
    console.log(meal);
     document.getElementById('detailsMealsLabel').innerText = meal.strMeal
    const detailsDiv = document.createElement('div');
    detailsDiv.innerHTML = `
        
        <img class="img-fluid" src="${meal.strMealThumb}">
        <h4>Area: ${meal.strArea ? meal.strArea : 'No Area'}</h4>

    `
    detailsBody.appendChild(detailsDiv);
}
const btnSearch = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText)
}

loadMeals('rice');