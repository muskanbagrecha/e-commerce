// Function for price slider
const priceSlider = () => {
    const slider = document.getElementById("price-range");
    const output = document.querySelector(".price-range-output");
    output.innerHTML = `₹100 to ₹${slider.value}`; // the default slider value
    // Update the current slider value\
    slider.oninput = function() {
        output.innerHTML = `₹100 to ₹${this.value}`;
    }
}
priceSlider();


// Function for making filter responsive
const filterSlide = () => {
    const filter = document.querySelector('.filter__items');
    const filterBtn = document.querySelector('.filter__button');
    filterBtn.addEventListener('click', () => {
        filter.classList.toggle('filter__items--active');
    })
};
filterSlide();


// Function for resetting filter inputs
const clearFilters = () => {
    const clearFilterBtn = document.querySelector(".filter__clear");

    // For price slider
    const slider = document.getElementById("price-range");
    const priceFilter = document.querySelector(".price-range-output");
    
    clearFilterBtn.addEventListener("click", () => {
        const data = document.querySelectorAll(".filter-data");
        data[0].reset();
        data[1].reset();

        //Resetting price slider output. 
        priceFilter.innerHTML = `₹100 to ₹${slider.value}`;
    })
}
clearFilters();

