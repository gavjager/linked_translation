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
"Utilizing the classic German capacity for compounding words, the title "  +
"of this poem alone evokes a particular state of being, a particular kind " +
'of time. Not just "upon a winter\'s morn," but rather the specific kind of ' +
"earliness that only occurs when the cold has come in through the window " +
"and you crystalize out of sleep into a warm bed and a frigid " +
"world. There is a special kind of paradox here, which becomes almost " +
"contrapuntal in these four lines: rust and lovers, grey coats against " + 
"the sparkling ice. It may be bleak, but it is also bright, " +
"and the poem tries to carry the brightness over." +
"</p><p>" +
"The poem rides on imagery and locality, dipping into the shared experience " +
"or imagining of the reader. It was important to convey as much of this " + 
"specificity as possible in translation. Although the language is fairly " +
"straightforward, the ability to overdetermine particular elements of " +
"the translation by making them dynamic was very useful." +
"</p>";

var drauf_hinunterfahren =
"<h3>Descending on a Dream</h3>" +
"<p>" +
"The directionality of this particular phrase seemed very important. " +
'The German verb "hinunterfahren" can mean either "to descend" or  ' +
'"to drive down [somewhere]," and while the root verb "fahren" – "to drive" ' +
'seems a very active word, in the context of the phrase, it seems like ' +
'it could also suggest a more passive tone. The grammatical structure ' +
'of the German phrase, paired with the semantically passive reading of the ' +
'verb, causes a certain amount of ambiguity as to whether the lovers ' +
'are the dreamers or the dreamed, or both. This is why the English ' +
'translation gives two variants: to encapsulate multiple readings.'
"</p>";

var schaut_her =
"<h3>Looking Collectively</h3>" +
"<p>" +
'Unlike German, English does not distinguish between the singular and '+
'plural imperative. There is no easy way to tell whether a '+
'command ("look over there!") is directed at one person or multiple '+
'people outside of the context of the situation. This is especially '+
'problematic for this poem because the singular imperative is used '+
'two lines before – "laß" – "let [directed at one person]." It is '+
'clear in the German that the fourth line begins by addressing '+
'a group of people, so an attempt was made to convey the same idea '+
'in English by essentially repeating the command. '+
"</p>";

var helle_Bahn =
'<h3>Was bedeutet "Bahn"?</h3>' +
"<p>" +
'What does "train/streetcar/railway" mean? This is one of the more ' +
'difficult incongruities between languages: how much work does a ' +
'word do, and how does it work?' +
"</p>";

// sub-commentaries
var commentaries = [
    drauf_hinunterfahren, 
    schaut_her,
    helle_Bahn
]

var dynamic_text = 
[
    [
        dynaSpan('0','0',"upon them descend,"),
        dynaSpan('0','0',"descend upon them,")
    ], // 0
    [
        dynaSpan('1','1',"look outward,"),
        dynaSpan('1','1',"look over,"),
        dynaSpan('1','1',"see there,")
    ], // 1
    [
        dynaSpan('2','2',"bright tram,"),
        dynaSpan('2','2',"bright train,")
    ] // 2
]

function writeCommentary() {
    document.getElementById('commentary').innerHTML = gen_commentary;
}

function dynaSpan(spanid,dynid,text) {
    var start = "<span id=" + spanid + 
    ' onmouseover="mOn(this)" onmouseout="mOff(this)"' +
    ' onmousedown="dynaText(document.getElementById('+ dynid + '),' +
    'dynamic_text,commentaries)" onmouseup="mOn(this)">';
    var end = "</span>";
    return start + text + end;
}