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
'This poem proved the most difficult to translate of the few that I\'ve done so far. ' +
'In any case, it has the most dynamic elements of the three. My focus in the first half of the translation ' +
'was to try to convey the stifling feeling of the church as described by Aichinger ' +
'and in the second half, probably due to a lack of understanding on my part, to try to stay as close to the ' +
'language and structure of the original. ' +
"</p><p>" +
'The questions posed by Aichinger in this poem seem to reflect on a dissatisfaction with religion ' +
'and perhaps an attempt to find answers in other ways. As with <a href="winter-answer.html">"Winter-answer,"</a> ' +
'there seems to be an attempt to find a new paradigm in nature, or a tendency, at least, to associate ' +
'this search for meaning with entering into nature. ' +
"</p>";

var auf_dem_platze =
'<h3>Working Around a Word</h3>' +
"<p>" +
'My main difficulty with the opening line of the poem was trying to understand what was meant by the word ' +
'"Platze" in the original German. It seems to be a variant of "Platz," which can mean "place," "seat," "space," "public square"... ' +
'I took it in context to mean the altar or baptismal font in the church, and ended up carrying the ambiguity I ' +
'felt in translating into the translation itself by leaving out the word entirely.' +
"</p>";

var blasen =
'<h3>Differences in Tone</h3>' +
"<p>" +
'The corresponding word in the original German poem is "Blasen," which usually means "bubble," but is also ' +
'the word used for "blister" and "bladder." My choice to also include the word "bulb" in this dynamic element ' +
'was an attempt to bring the tone more in line with the possible readings of the German word, as well as ' +
'to hopefully evoke images of incense and smoke rising from censers or simply just the feeling of an overcrowded, ' +
'stuffy church.' +
"</p>";

var was_sie_singen =
'<h3>Working Towards More Complex Dynamic Structures</h3>' +
"<p>" +
'I thought this would be a good opportunity to try to test out a nested structure in the dynamic translation, ' +
'where one element has the ability to change parts of other elements which are grouped together.' +
'While it is fairly simple in terms of a structure change – only the conjugation of a verb following the element ' +
'changes, I was very happy it worked, and will hopefully be able to use it in more complex situations, possibly ' + 
'with more nested layers.' +
"</p>";

var dringt_nicht =
'<h3>To Reach Someone</h3>' +
"<p>" +
'This dynamic element pairs a more literal translation of the German with one that matches the tone of the English ' +
'poem a little better, in my opinion. "Zu jemandem dringen" is usually directly translated as "to reach someone" or ' +
'"to get through to someone," but seeing as this poem deals with dissatisfaction with a Christian church... ' +
'I suppose you could say I pulled a little from my own experience. I, too, have watched the "fish circle round."' +
"</p>";

var antwort_geben = 
'<h3>Looking for Answers</h3>' +
"<p>" +
'This line in the original poem is "wer gibt mir Antwort?" – literally, "who gives me answer?" ' + 
'While this sounds a bit more stilted in English than it would in German, I think it captures nicely the ' +
'state of both looking for an answer to a particular question (or part of a question), and having no one willing ' +
'to answer you. Because of this, I decided to keep "answer" as a noun in the alternate option of the dynamic element.' +
"</p>";

var soll_ich =
'<h3>Trying to Show the Structure</h3>' +
"<p>" +
'The alternate in this case was simply an attempt to capture the structure of the original, in which there is no ' +
'real directional verb given, only "should I in(to) the mountain?"' + 
"</p>";

var weiten_blick = 
'<h3>Multiple Readings</h3>' +
"<p>" +
'The word "Blick" is yet another of the general-purpose German nouns, in this case relating to the concept of sight. ' +
'The variations are simply a way to overdetermine the English translation to try to capture the multiple readings of ' +
'"den weiten Blick"'
"</p>";

var noch_einmal =
'<h3>Again?</h3>' +
"<p>" +
'The idea here is that the narrator is returning to a place they have been to before, which they may leave again. ' +
'translating the phrase "noch einmal" is much more difficult than I thought it would be.' +
"</p>";

var schwarz_werden =
'<h3>Translating Idiom</h3>' +
"<p>" +
'This may be another example of why these types of dynamic options in writing could be useful for translations. ' +
'The translator has the option to both find a similar expression in the target language, as well as to include ' +
'a direct translation to convey some of the logic of the idiom in the source language. In this case "Wie schwarz ' +
'mein Land wird" – "How black my country becomes."' +
"</p>";

var gruen_kruemmen = 
'<h3>Still Trying to Decipher This...</h3>' +
"<p>" +
'There is definitely some kind of metaphor that Aichinger was developing here. ' +
'I associate green with growth, perhaps new growth, especially if time is a factor, and the growth is distant. ' +
'I imagine the narrator seeing a lush valley from the peak of a snowy mountain: something far away, seen from above ' +
'the treeline and surrounded by black rock, almost like a promise or hope for a new life.' +
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
        dynaSpan('0','0',"The water stands there up above,")
    ], // 0
    [
        dynaSpan('1','1',"bulbs,"),
        dynaSpan('1','1',"bubbles,")
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
        dynaSpan('6','6',"Should I go to the mountain,"),
        dynaSpan('6','6',"Shall I away to the mountain,")
    ], // 6
    [
        dynaSpan('7','7',"and into the wide-open view,"),
        dynaSpan('7','7',"and into the broad sight,"),
        dynaSpan('7','7',"and into the far stare,")
    ], // 7
    [
        dynaSpan('8','8',"once more?"),
        dynaSpan('8','8',"one more time?"),
        dynaSpan('8','8','again?')
    ], // 8
    [
        dynaSpan('9','9',"How black my land becomes,"),
        dynaSpan('9','9',"Oh how my land is turning black,")
    ], // 9
    [
        dynaSpan('10','10',"only deep below bends<br>" +
        "the time to green."),
        dynaSpan('10','10',"but in the depths below<br>" +
        "time bends away greenly.")
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