function deeuphemize(){
  let euphemisms = [
    [/falsehood/g, "lie"],
    [/Falsehood/g, "Lie"],
    [/FALSEHOOD/g, "LIE"],
  ]
  var html = document.body.innerHTML;
  for (var i in euphemisms){
    html.replace(
      euphemisms[i][0],
      euphemisms[i][1],
    );
  }
  document.body.innerHTML = html;
  debugger;
}
setTimeout(deeuphemize, 2000);
