const http = new EasyHTTP;
console.log(http.__proto__);

//get the data async
// http.get(`https://jsonplaceholder.typicode.com/posts`,
// function(err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);        
//     }
// });

const data = {
    title: "Custom posts",
    body: "This is custom post"
};

// create post
// http.post(`https://jsonplaceholder.typicode.com/posts`,
// data, function(err, post) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });

//update data
// http.put(`https://jsonplaceholder.typicode.com/posts/1`,
// data, function(err, post) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });

//delete post
http.delete(`https://jsonplaceholder.typicode.com/posts/1`,
function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);        
        
    }
});

const newHTTP = new NewEasyHTTP();

// newHTTP.get(`https://jsonplaceholder.typicode.com/posts`)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//user data
const data2 = {
    userName: "HMS",
    mail: "abcd"
};
// newHTTP.post(`https://jsonplaceholder.typicode.com/posts`, data2)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// newHTTP.put(`https://jsonplaceholder.typicode.com/posts/2`, data2)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

newHTTP.delete(`https://jsonplaceholder.typicode.com/posts/2`)
    .then(data => console.log(data))
    .catch(err => console.log(err));