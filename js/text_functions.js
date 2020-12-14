function mOn(obj) {
    obj.style.color = 'blue';
    obj.style.cursor = 'pointer';
}

function mOff(obj) {
    obj.style.color = 'black';
}

function clickReplace(clickobj, replaceid, newHTML) {
    clickobj.style.color = 'purple';
    document.getElementById(replaceid).innerHTML = newHTML;
}

function dynaText(obj,texts,commentaries) {
    // get obj id for indexing
    var i = parseInt(obj.id);
    // display corresponding commentary
    clickReplace(obj,"commentary",commentaries[i]);
    // find corresponding dynamic texts, shift next (1) text to index 0
    var current = texts[i].shift();
    // replace current text in corresponding dynamic texts
    texts[i].push(current);
    // replace obj HTML with next text
    obj.outerHTML = texts[i][0];
}

function revealLinks() {
    var spans = document.getElementsByTagName('SPAN');
    l = spans.length;
    for (i = 0; i < l; i++) {
        spans[i].style.color = "blue";
    }
}

function hideToggle(id) {
    var el = document.getElementById(id);
    if (el.style.visibility != "hidden") {
        el.style.visibility = "hidden";
    }
    else {
        el.style.visibility = "visible";
    }
}