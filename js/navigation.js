const navigation = () => {
    const burger = document.querySelector('.burger');
    const navLeft = document.querySelector('.navigation-left');
    const navRight = document.querySelector('.navigation-right');
    const navFull = document.querySelector('.navigation-full');

    burger.addEventListener('click', () => {
        if(navLeft)
        {
            navLeft.classList.toggle('navigation-left--active');
        }
        else if(navRight)
        {
            navRight.classList.toggle('navigation-right--active');
        }
        else if(navFull)
        {
            navFull.classList.toggle('navigation-full--active');
        }
        burger.classList.toggle('rotate');
    })

}

const showSearch = () => {
    const search = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    search.addEventListener('click', () => {
        console.log(searchBar.classList);
        console.log('clicked');
        searchBar.classList.toggle('search-form--active');
    })
}

navigation();
showSearch();