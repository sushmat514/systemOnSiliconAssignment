const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const request={
    Method: 'GET',
    url: 'http://localhost:3000/',
    path: '/'

};
app.get("/",(request,response)=>{
    response.sendFile("./index.html",{root:__dirname });
});
app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000/");
});
