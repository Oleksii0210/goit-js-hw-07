const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Кількість категорій: ${categoriesList.length}`);  
categoriesList.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("li").length;

console.log(`Категорій: ${categoryName}`);
console.log(`Кількість елементів: ${itemsCount}`);
});
