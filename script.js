
import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {console.log(response.data)})


// npm................
// Node package manager w2school

// fetch('https://jsonplaceholder.typicode.com/todos/1') .then(response => response.json()).then(json => console.log(json))

