var german_text =
"<h3>Teil der Frage</h3>" +
'<h6>von <a href="aichinger-v_r.html">Ilse Aichinger</a></h6>' + 
"<p>" +
"Hoch auf dem Platze steht das Wasser,<br>" +
"die Luft steigt noch in Blasen,<br>" +
"doch was sie singen,<br>" +
"dringt nicht mehr zu mir.<br>" +
"Die Fische kreisen um die Kirchentüren,<br>" +
"wer gibt mir Antwort:<br>" +
"Soll ich in den Berg<br>" +
"oder ins Haus mit denen,<br>" +
"die mich lieben,<br>" +
"und den weiten Blick,<br>" +
"das Knirschen aller Schritte<br>" +
"noch einmal?<br>" +
"Wie schwarz mein Land wird,<br>" +
"nur tief unten krümmt sich<br>" +
"grün die Zeit.<br>" +
"</p>";

// commentaries

var gen_commentary = 
'<h3>Translating "Part of the Question"</h3>' +
"<p>" +
"</p>";

var auf_dem_platze =
'<h3>Working Around an Word</h3>' +
"<p>" +
"</p>";

var blasen =
'<h3>Differences in Tone</h3>' +
"<p>" +
"</p>";

var was_sie_singen =
'<h3>Working Towards More Complex Dynamic Structures</h3>' +
"<p>" +
"</p>";

var dringt_nicht =
'<h3>To Reach someone</h3>' +
"<p>" +
"</p>";

var antwort_geben = 
'<h3>Looking for Answers</h3>' +
"<p>" +
"</p>";

var soll_ich =
'<h3>Trying to Show the Structure</h3>' +
"<p>" +
"</p>";

var weiten_blick = 
'<h3>Multiple Readings</h3>' +
"<p>" +
"</p>";

var noch_einmal =
'<h3>Again?</h3>' +
"<p>" +
"</p>";

var schwarz_werden =
'<h3>Translating Idiom</h3>' +
"<p>" +
"</p>";

var gruen_kruemmen = 
'<h3>Still Trying to Decipher This...</h3>' +
"<p>" +
"</p>";

var commentaries = [
    auf_dem_platze,
    blasen,
    was_sie_singen,
    dringt_nicht,
    // on purpose 3&4
    dringt_nicht,
    antwort_geben,
    soll_ich,
    weiten_blick,
    noch_einmal,
    schwarz_werden,
    gruen_kruemmen
]

var dynamic_text = [
    [
        dynaSpan('0','0',"High above, the water is still,"),
        dynaSpan('0','0',"The water stands there up on top,")
    ], // 0
    [
        dynaSpan('1','1',"bubbles,"),
        dynaSpan('1','1',"bulbs,")
    ], // 1
    [
        "<span id='2'>" + dynaSpan('child2','2',"and the songs") + "<br>" + 
        dynaSpan('3','3',"no longer get through to me."),

        "<span id='2'>" + dynaSpan('child2','2',"and what they are singing") +  "<br>" +
        dynaSpan('4','4',"no longer gets through to me.") + "</span>"
    ], // 2
    [
        dynaSpan('3','3',"no longer get through to me."),
        dynaSpan('3','3',"now leave no impression.")
    ], // 3
    [
        dynaSpan('4','4',"no longer gets through to me."),
        dynaSpan('4','4',"now leaves no impression.")
    ], // 4
    [
        dynaSpan('5','5',"who will answer me?"),
        dynaSpan('5','5',"who will give me an answer?")
    ], // 5
    [
        dynaSpan('6','6',"Shall I away to the mountain,"),
        dynaSpan('6','6',"Should I go to the mountain,")
    ], // 6
    [
        dynaSpan('7','7',"and the wide-open view,"),
        dynaSpan('7','7',"and the broad sight,"),
        dynaSpan('7','7',"and the far stare,")
    ], // 7
    [
        dynaSpan('8','8',"once more?"),
        dynaSpan('8','8',"one more time?")
    ], // 8
    [
        dynaSpan('9','9',"How black my land becomes,"),
        dynaSpan('9','9',"Oh how my land is turning black,")
    ], // 9
    [
        dynaSpan('10','10',"only deep below bends away<br>" +
        "the time to green."),
        dynaSpan('10','10',"but in the depths below<br>" +
        "time bends away greenly")
    ] // 10   
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