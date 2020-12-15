var german_text =
"<h3>Winterantwort</h3>" +
'<h6>von <a href="aichinger-v_r.html">Ilse Aichinger</a></h6>' +
"<p>" +
"Die Welt is aus dem Stoff,<br>" +
"der Betrachtung verlangt:<br>" +
"keine Augen mehr,<br>" +
"um die weißen Wiesen zu sehen,<br>" +
"keine Ohren, um im Geäst<br>" +
"das Schwirren der Vögel zu hören.<br>" +
"Großmutter, wo sind deine Lippen hin,<br>" +
"um die Gräser zu schmecken,<br>" +
"und wer riecht uns den Himmel zu Ende,<br>" +
"wessen Wangen reiben sich heute<br>" +
"noch wund an den Mauern im Dorf?<br>" +
"Ist es nicht ein finsterer Wald,<br>" +
"in den wir gerieten?<br>" +
"Nein, Großmutter, er ist nicht finster,<br>" +
"ich weiß es, ich wohnte lang<br>" +
"bei den Kindern am Rande,<br>" +
"und es ist auch kein Wald." +
"</p>";

// commentaries

var gen_commentary = 
'<h3>Translating "Winter-Answer"</h3>' +
"<p>" +
"</p>";

var weltstoff =
'<h3>Commentary: Considering the fabric of the world</h3>' +
"<p>" +
"</p>";

var augen_und_ohren =
'<h3>Commentary: Eyes and Ears</h3>' +
"<p>" +
"</p>";

var keine_augen_mehr = 
'<h3>Commentary: Physical and Temporal</h3>' +
"<p>" +
"</p>";

var schmecken = 
'<h3>Commentary: A German Verb</h3>' +
"<p>" +
"</p>";

var himmel_zu_ende = 
'<h3>Commentary: An Intricate Phrase</h3>' +
"<p>" +
"</p>";

var commentaries = [
    weltstoff,
    augen_und_ohren,
    keine_augen_mehr,
    schmecken,
    himmel_zu_ende
]

var dynamic_text = [
    [
        dynaSpan('0','0',"The fabric of the world,<br>" +
        "it demands to be considered:"),

        dynaSpan('0','0',"The world is made of stuff,<br>" +
        "which demands contemplation:"),

        dynaSpan('0','0',"The world is made of such stuff;<br>" +
        "take it all in:")
    ], // 0
    [
        dynaSpan("1","1","we lack the eyes,<br>" +
        "to see the white meadows,<br>" +
        "the ears,"),

        '<span id="1">' +
        dynaSpan("2","2",'no more eyes,') + '<br>' +
        dynaSpan('child',"1",
        "with which to see the white meadows,<br>" +
        "no ears,") +
        "</span>"
    ], // 1
    [
        dynaSpan('2','2',"no more eyes,"),

        dynaSpan('2','2',"no eyes anymore,")
    ], // 2
    [
        dynaSpan('3','3',"taste"),

        dynaSpan('3','3',"savor")
    ],// 3
    [
        dynaSpan('4','4',"the sky for us to the end,"),

        dynaSpan('4','4',"for us the sky completely,")
    ] // 4
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