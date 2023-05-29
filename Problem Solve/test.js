// Class(ES6) 
// Class is a template for creating objects

function getData() {
    const dataAPI = 'https://jsonplaceholder.typicode.com/users';
    fetch(dataAPI)
        .then(res => res.json())
        .then(data => { console.log(data); })
        .catch(err => {console.log(err); })
}

getData()