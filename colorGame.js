
var numberOfSquares;
var colors;
var pickedColor;
var squares = document.querySelectorAll('.square');
var pickedcolorviewer = document.querySelector('.pickedcolorviewer');
var messageDisplay = document.querySelector('#message');
var heading = document.querySelector('h1');
var newColorsbtn = document.querySelector('#newColors'); 
var modeButtons = document.querySelectorAll('.mode');


init();

newColorsbtn.addEventListener('click',reset); 



function init() {
    
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
       
    }


    for(var i = 0; i < squares.length; i++){
        //add  events to squares
        squares[i].addEventListener('click', function(){
        //grab color of clicked square 
            var clickedColor = this.style.backgroundColor;
            //compare it picked color
            if( clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!!!';
                changeColors(clickedColor);
                newColorsbtn.textContent = 'Play Again?';
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again!';
                }
        });
    }

    reset();
}

function reset () {

    colors = generateRandomColors(numberOfSquares);
    //pick a new color
    pickedColor = pickColor();
    //change the picked color viewer
    pickedcolorviewer.textContent = pickedColor;
    // fill the squares with new color
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';   
        }
    }
    // make the haeding bg to default
    heading.style.backgroundColor = 'steelblue';
    //change the text of the button to normal
    newColorsbtn.textContent = 'New Colors';
    //remove the correct text
    messageDisplay.textContent = '';

}


    
for(var i = 0; i < squares.length; i++){
    //add  events to squares
    squares[i].addEventListener('click', function(){
        //grab color of clicked square 
        var clickedColor = this.style.backgroundColor;
        //compare it picked color
        if( clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!!!';
            changeColors(clickedColor);
            newColorsbtn.textContent = 'Play Again?';
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again!';
            }
    });
}
    
function changeColors(color) {
    for(var i = 0; i < squares.length; i++){
        //add same color to squares
        squares[i].style.backgroundColor = color;
    }
    heading.style.backgroundColor = color;
}

function pickColor() {
  var randon = Math.floor(Math.random() * colors.length);
  return colors[randon]; 
}

function generateRandomColors(number) {
    // make an array
    var arr = [];
    // Add number colors to the array
    for(var i = 0; i < number; i++){
       arr[i] = randomColor();
    }
    // return that array
    return arr;
}   

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}