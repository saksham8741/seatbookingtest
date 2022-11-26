const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');


populateUI();
ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, movieprice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', movieprice)
}

var numberof;
function reveal(btn){
if(btn.id=='b1')
{
    numberof=1;
    localStorage.setItem('numberof', numberof)}
else if(btn.id=='b2')
{
    numberof=2;
    localStorage.setItem('numberof', numberof)
}
else if(btn.id=='b3')
{
    numberof=3;
    localStorage.setItem('numberof', numberof)}
else if(btn.id=='b4')
{
    numberof=4;
    localStorage.setItem('numberof', numberof)}
}
//update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(function(seat) {
        return[...seats].indexOf(seat);
    });

    //localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); //stores selected seats in local storage

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;   //Sets the count to length of selected seats selected
    total.innerText = selectedSeatsCount*ticketPrice; //multiplies number of seats colected with value
}  
selectedMovieIndex=0;

//Get data from local storage
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }
    
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

}

//movie selection of event 
movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value; //sees the value of selected movie and sets it to tivket price
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount(); //updates selected count to account for new change in value
})

var currCount=0;
let numberofseats = localStorage.getItem("numberof");
var maxReached=0;

container.addEventListener('click', (e) => {

    let numberofseats = localStorage.getItem("numberof");
    if(count.innerText < numberofseats){ 
        //checks whether count is less than
        if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
             //Checks if whether container clicked is seat, checks if it has the class name seat also checks whether seat is occupied or not
            e.target.classList.toggle('selected');
            updateSelectedCount();//Toggles the seat if selected to the selected class changing it to blue
         }
        
    }
    else{ //checks whether count is less than   
        if(e.target.classList.contains('seat') && e.target.classList.contains('selected')) { //Checks if whether container clicked is seat, checks if it has the class name seat also checks whether seat is occupied or not
        e.target.classList.toggle('selected');
        updateSelectedCount();/*Toggles the seat if selected to the selected class changing it to blue*/
         }
    }

// let numberofseats = localStorage.getItem("numberof");
// if(e.target.classList.contains('seat') && e.target.classList.contains('selected') && maxReached==1)
//     {
//         e.target.classList.toggle('unselected');
//         updateSelectedCount();
//     }

// if(currCount < numberofseats){
//     console.log(numberofseats);
//     console.log(currCount);
// if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//     e.target.classList.toggle('selected');
//     updateSelectedCount();
// }
// currCount++;
// }
// if(currCount==numberofseats)
// {
//     maxReached=1;
// }

// console.log(maxReached);

}
)
        
updateSelectedCount();