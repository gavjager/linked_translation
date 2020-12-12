var german_text =
"<h3>Winterfrüh</h3>" +
"<p>Eh die Träume rosten und brechen,<br>" + 
"laß die Geliebten drauf hinunterfahren,<br>" +
"die Großen und die Kleinen in den grauen Mänteln,<br>" +
"schaut her, die helle Bahn, das Eis.</p>";


// commentaries

var gen_commentary = 
'<h3>Translating "Winter-Early"</h3>' +
"<p>" +
"Although a short poem, Winter-Early presented significant challenges." +
"" +
"</p>";

var drauf_hinunterfahren =
"<h3>Commentary: Descending on a Dream</h3>" +
"<p>" +
"</p>";

var schaut_her =
"<h3>Commentary: Looking Collectively</h3>" +
"<p>" +
"</p>";

var helle_Bahn =
"<h3>Commentary: What is a Bahn?</h3>" +
"<p>" +
"</p>";

// sub-commentaries
var commentaries = [
    drauf_hinunterfahren, 
    schaut_her,
    helle_Bahn
]

var dynamic_text = 
[
    ["upon them descend,","descend upon them,"],
    ["look outward,", "look over,", "see there,"], 
    [" bright tram,", " light tram,",  " light train,", " bright train,"]
]

function writeCommentary() {
    document.getElementById('commentary').innerHTML = gen_commentary;
}