var right = document.getElementsByClassName("right");
var si = right.length;
var z = 1;
turnRight();

const nameInput = document.getElementById('nameInput');
const authorLink = document.getElementById('authorLink');
const defaultName = "Sai Karthik"; // Set default name here

authorLink.textContent = defaultName;

nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const enteredName = nameInput.value;
        authorLink.textContent = enteredName;
        nameInput.value = '';
    }
});

function turnRight() {
    if (si >= 1) {
        si--;
    } else {
        si = right.length - 1;

        function sttmot(i) {
            setTimeout(function() {
                right[i].style.zIndex = "auto";
            }, 300);
        }
        for (var i = 0; i < right.length; i++) {
            right[i].className = "right";
            sttmot(i);
            z = 1;
        }
    }
    right[si].classList.add("flip");
    z++;
    right[si].style.zIndex = z;
}

function turnLeft() {
    if (si < right.length) {
        si++;
    } else {
        si = 1;
        for (var i = right.length - 1; i > 0; i--) {
            right[i].classList.add("flip");
            right[i].style.zIndex = right.length + 1 - i;
        }
    }
    right[si - 1].className = "right";
    setTimeout(function() {
        right[si - 1].style.zIndex = "auto";
    }, 350);
}