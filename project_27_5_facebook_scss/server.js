const http = require('http');

let app = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  let resObject = {
    posts: [
      {
        message: "איזו מסיבה כיפית",
        likes: 5,
        author: {fullname: "Dafna Avni"},
        pic: "\images\\dafiyuvi.png"
      },
      {
        message: "גן לגדול בכיף",
        likes: 10,
        author: {fullname: "Tomer Dahan"}
      }
    ]
  };

  res.end(JSON.stringify(resObject));
});

app.listen(6200, '127.0.0.1');
console.log('Server is running2');