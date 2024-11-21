var arrQuote=["Be yourself; everyone else is already taken","“So many books, so little time.”","“A room without books is like a body without a soul.”"];
var arrauthor=["― Oscar Wilde","― Frank Zappa","― Marcus Tullius Cicero"];

function displayQuote() {

  var randomIndex = Math.floor(Math.random() * arrQuote.length);


  var resuit1 = arrQuote[randomIndex];
  var result2 = arrauthor[randomIndex];


  document.getElementById('viewQuote').innerHTML = resuit1;
  document.getElementById('arrauthor').innerHTML = result2;
}

