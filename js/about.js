var dynamic_text =
[
    [
        "no word",
        "not a word"
    ],
    [
        "in one",
        "of any"
    ],
    [
        "language",
        "tongue",
        "spoken thing"
    ],
    [
        "is totally",
        "is completely",
        "is perfectly"
    ],
    [
        "equal",
        "equivalent"
    ],
    [
        "to any",
        "to a [word]"
    ],
    [
        "in another",
        "of a different one"
    ]
]


// empty variables for this one -- about section
var commentaries =
[
    "","","","","","",""
]

var l0 = dynamic_text.length;
for (i = 0; i < l0; i++) {
    var l1 = dynamic_text[i].length;
    for (j = 0; j < l1; j++) {
        dynamic_text[i][j] = "<span id=" + i + " class='linky'>" + dynamic_text[i][j] + "</span>";
    }
}