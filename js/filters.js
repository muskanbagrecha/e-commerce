
const priceSlider = () => {
    const slider = document.getElementById("price-range");
    const output = document.querySelector(".price-range-output");
    output.innerHTML = `Rs. 100 to Rs. ${slider.value}`; // the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = `Rs. 100 to Rs. ${this.value}`;
    }
}

const collapseFilter = () => {
    const filter = document.querySelector(".filter__container");
    const filterBtn = document.querySelector(".filter__btn");
    filterBtn.addEventListener() = () => {
        filter.classList.add("filter__container--collapsed");
    }
}

const clearAllFilters = () => {
    const priceSortFilter = document.querySelector(".price-sort-filter");
    const categoryFilter = document.querySelector(".category-filter");
    const priceRange = document.querySelector(".price-range");
}

priceSlider();
// collapseFilter();
clearAllFilters();