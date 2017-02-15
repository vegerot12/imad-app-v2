var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
     title:'article one',
     date:'13 feb 2017',
     heading:'article two',
     content:`  <p>
                     thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph 
                      thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph  thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph  thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph  thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph  thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph  thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph thisis the paragraph
                     
                </p> `
}; 
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate= ` <html>
    <head>
       ${title}
               <meta name="viewport" content="width=device-width initial-scale=1"/>
           <link href="/ui/style.css" rel="stylesheet" />
        
       
    </head>
    <body>
        <div class="example">
            <div>
                <a href="/">home</a>
            </div>
            <hr/>
            ${heading}
            <div>
                ${date}
            </div>
            <div>
               ${content}
                     
                </p>
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/ui/article-one', function (req, res) {
   res.send(createTemplate(articleone)); 
});

app.get('/article-two',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
