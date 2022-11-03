const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('event');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');

let ticketPrice = +movieSelect.value;
var numberof;
function reveal(btn){
if(btn.id=='b1')
{
    numberof=1;
    alert(numberof);
}
else if(btn.id=='b2')
{
    numberof=2;
    alert(numberof);
}
else if(btn.id=='b3')
{
    numberof=3;
    alert(numberof);
}
else if(btn.id=='b4')
{
    numberof=4;
    alert(numberof);
}
}
selectedSeatsCount=0
//update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;   //Sets the count to length of selected seats selected
    total.innerText = selectedSeatsCount*ticketPrice; //multiplies number of seats colected with value
}  


//movie selection of event 
movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value; //sees the value of selected movie and sets it to tivket price
    updateSelectedCount(); //updates selected count to account for new change in value
})
container.addEventListener('click', (e) => {
    //if(count.innerText<numberof){ //checks whether count is less than 3
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) { /*Checks if whether container clicked is seat, checks if it has the class name seat also checks whether seat is occupied or not*/
        e.target.classList.toggle('selected')/*Toggles the seat if selected to the selected class changing it to blue*/
    }
    updateSelectedCount();
}
//}
)
