function makeBanner(count){
  let html = '<div id="deeuphemizer-banner">' +
      'Success! ' + count + ' euphemisms for "lie" were corrected on this page.'+
'</div>' +
'<style>' +
'  #deeuphemizer-banner{' +
'      cursor: pointer;' +
'      height: 42px;' +
'      width: 100%;' +
'      line-height: 42px;' +
'      text-align: center;' +
'      position: fixed;' +
'      top: 0px;' +
'      background-color: #5cb85c;' +
'      z-index: 9999999999999' +
'  }' +
'</style>'

  return html
}


function deeuphemize(){
  let euphemisms = [
    [/falsehood/g, "lie"],
    [/Falsehood/g, "Lie"],
    [/FALSEHOOD/g, "LIE"],
    [/untruth/g, "lie"],
    [/Untruth/g, "Lie"],
    [/UNTRUTH/g, "LIE"],
    [/False Claim/g, "Lie"],
    [/False claim/g, "Lie"],
    [/false claim/g, "lie"],
    [/FALSE CLAIM/g, "LIE"],
    [/Inaccurate Claim/g, "Lie"],
    [/Inaccurate claim/g, "Lie"],
    [/innacurate claim/g, "lie"],
    [/INNACURATE CLAIM/g, "LIE"],
  ]
  var html = document.body.innerHTML;
  var replaceCount = 0;
  for (var i in euphemisms){
    replaceCount += (
      html.match(euphemisms[i][0]) || []
    ).length;
    let original = euphemisms[i][0].toString().replace('/', '').replace('/g', '');
    let replaceText =  '<s style="color:red">' + original + '</s>&nbsp<span style="color:green">' + euphemisms[i][1] + "</span>";
    html = html.replace(
      euphemisms[i][0],
      replaceText
    );
  }
  if (replaceCount > 0){
    html += makeBanner(replaceCount);
    document.body.innerHTML = html;
    setTimeout(function(){
      document.getElementById('deeuphemizer-banner').style.display = "none";
    }, 6000);
  }
}

deeuphemize();
