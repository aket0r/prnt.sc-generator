const link = document.querySelector("#link");
const count = document.querySelector("#count");
const activeBtn = document.querySelector("#active");
const symbols =['q', 'w', 'e', 'r', 't', 'y', 'u',
                'o', 'p', 'a', 's', 'd', 'f', 'g',
                'h', 'j', 'k', 'l', 'z', 'x', 'c',
                'v', 'b', 'n', 'm', '1', '2', '3',
                '4', '5', '6', '7', '8', '9', '0'];
var randomString = '';
var active = activeBtn.checked;

activeBtn.addEventListener("change", function() {
    active = this.checked;
});

var words = [];

function generateStart() {
    randomString = '';
    for(j = 0; j < 6; j++) {
        var random = Math.floor(Math.random() * symbols.length);
        randomString += symbols[random];
    }
    words.push(randomString);
    randomString = '';
}

function start(num) {
    num = count.value;
    for(i = 0; i < num; i++) {
        generateStart()
    }
    
    for(j = 0; j < words.length; j++) {
        if(words.length > 0) {
            if(!active) {
                window.open(`${link.value}`);
            } else {
                window.open(`${link.value}${words[j]}`);
            }
        }
    }
    words = [];
}