
function newQuote() {
  var  quoteSec = document.getElementById("quoteSec");
  var btn = document.getElementById("btn");

  var quote = [
    `<p class="text-danger">“Be yourself; everyone else is already taken.”</p>
    <p class="text-white">― Oscar Wilde</p>`,
    `<p class="text-info">“So many books, so little time.”</p>
    <p class="text-white">― Frank Zappa</p>`,
    `<p class="text-warning">“A room without books is like a body without a soul.”</p>
    <p class="text-white">― Marcus Tullius Cicero</p>`,
    `<p class="text-secondary">“You only live once, but if you do it right, once is enough.”</p>
    <p class="text-white">― Mae West</p>`,
    `<p class="text-primary">“Be the change that you wish to see in the world.”</p>
    <p class="text-white">― Mahatma Gandhi</p>`,
];

var nuOfQuote =Math.round( Math.random() * 4 );

quoteSec.innerHTML = quote[nuOfQuote];

btn.innerHTML = "New Quote";

  
} 