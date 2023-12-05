//reference on the HTML
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


//function to generate todo templates
const generateTemplate = todo => {


    //create new variable to add a templates including the styles
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="fa-solid fa-trash-can delete"></i>
                 </li>`;
    //refer from list variable
    list.innerHTML += html;             

};

//Event Listener to submit
addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();//get the value from iput field and trim it to avoid including spaces
    
    //check if there is on input field
    if (todo.length){
        generateTemplate(todo);//reference from function to create template
        addForm.reset();//reset method to reset the input field
    }
});

//Event Listener to delete todos
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//Filtering todos
const filterTodos = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

//Event Listener to Search bar
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})