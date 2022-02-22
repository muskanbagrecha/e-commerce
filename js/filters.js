
const priceSlider = () => {
    const slider = document.getElementById("price-range");
    const output = document.querySelector(".price-range-output");
    output.innerHTML = `₹100 to ₹${slider.value}`; // the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = `₹100 to ₹${this.value}`;
    }
}

// const collapseFilter = () => {
//     const filter = document.querySelector(".filter__container");
//     const filterBtn = document.querySelector(".filter__btn");
//     filterBtn.addEventListener() = () => {
//         filter.classList.add("filter__container--collapsed");
//     }
// }

// const openFilter = () => {
//     const filterBtn = document.querySelector(".filter__btn");
//     filterBtn.addEventListener("click", () => {
//         console.log("clicked");
//         const filter = document.querySelector(".filter__container");
//         filter.classList.add("filter--active");
//     })
// }

// openFilter();

const clearFilters = () => {
    const clearFilterBtn = document.querySelector(".filter__clear");

    // For price slider
    const slider = document.getElementById("price-range");
    const priceFilter = document.querySelector(".price-range-output");
    
    clearFilterBtn.addEventListener("click", () => {
        const data = document.querySelectorAll(".filter-data");
        data[0].reset();
        data[1].reset();

        //Resetting price slider ouput. 
        priceFilter.innerHTML = `₹100 to ₹${slider.value}`;
    })
}

clearFilters();
priceSlider();

