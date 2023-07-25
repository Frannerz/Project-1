const whichHoliday = () => {
    let num= Math.floor(Math.random()*10);
    switch (num){
        case 0:
            return 'Relax on the island of Caye Caulker, Belize!';
        case 1:
            return 'Book yourself a weekend away in a shepherd\'s hut';
        case 2:
            return 'Head for a week in NYC!';
        case 3:
            return 'Why not try an adventure in Nicaragua?';
        case 4:
            return 'Strap on your skis and head to the alps!';
        case 5: 
            return 'Explore the ancient Mayans in Guatemala';
        case 6:
            return 'Go on safari in South Africa';
        case 7:
            return 'Swim with dolphins in Mauritius';
        case 8:
            return 'Catch some sumo in Japan';
        case 9:
            return 'Swim in the caribbean sea on the Corn Islands';
        case 10:
            return 'Backpack around Central America for the summer!';
    }
    
}

function holidaySelector() {
    document.getElementById("holibobs").innerHTML = whichHoliday();
  }