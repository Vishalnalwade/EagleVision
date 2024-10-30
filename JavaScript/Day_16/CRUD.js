
let display = document.getElementById('post-data');
async function createPost() {
    const titleData = document.getElementById('title').value;
    const bodyData = document.getElementById('body').value;
    const postData = {
        id: 1,
        title: titleData,
        body: bodyData,
        userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then((response) => response.json())
        .then((json) => display.innerHTML = JSON.stringify(json))
        .catch((error) => console.error('Error Creating POST', error));
}
function readPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => display.innerHTML = JSON.stringify(json));
}
function updatePost() {
    const titleData = document.getElementById('upt').value;
    const bodyData = document.getElementById('upd').value;
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: titleData,
            body: bodyData,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => display.innerHTML = JSON.stringify(json));
}
function deletePost() {
    let num=document.getElementById('delete').value;
    let url1='https://jsonplaceholder.typicode.com/posts/';
    let url2=url1+num;
    fetch(url2, {
        method: 'DELETE',
    })
        .then((json) => display.innerHTML = JSON.stringify(json));
}
function searchPost() {
    let num=document.getElementById('search').value;
    let url1='https://jsonplaceholder.typicode.com/posts/';
    let url2=url1+num;
    fetch(url2)
        .then((response) => response.json())
        .then((json) => display.innerHTML = JSON.stringify(json));
}
