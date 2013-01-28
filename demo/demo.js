(function() {
function getAbstract(myform) {
    myform = myform || document.forms.myform;
    var corpus = myform.corpus.value, nSentences= myform.nSentences.value - 0, exclude = myform.exclude.value.split("."), emphasise = myform.emphasise.value.split(".");
    var abstract = sum({corpus:corpus,nSentences:nSentences,exclude:exclude,emphasise:emphasise}).summary + ".";
    return abstract;
}
function showAbstract(ev) {
    var results = document.getElementById('results');
    results.innerText = getAbstract();
    results.title = results.innerText.length + " chracters";
}
function getScriptText(ev) {
    var where = '../tests/browser/corpora/', 
        num = this.value,
        theSource = where + num + ".js",
        scripty = document.createElement('script'),
        loader = function() { myform.corpus.value = (corpora[num]||{text:""}).text; showAbstract();}
    if (!num) { return myform.corpus.value  = "";  }
    scripty.src = theSource;
    scripty.onload = loader;
    scripty.addEventListener('load', loader);
    document.body.appendChild(scripty);
}
var myform = document.forms.myform;
myform.samples.onchange = getScriptText;
myform.nSentences.onchange = 
    myform.run1.onclick = 
        myform.run.onclick = 
            showAbstract;

})(this);
