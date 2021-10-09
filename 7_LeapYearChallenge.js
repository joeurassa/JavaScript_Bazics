// Ask user
var year = prompt(" Enter the year you would like to check.");
//  Check
function leapYear(year){
if(year % 4 === 0){
    if(year % 100 ===0) {
        if(year % 400 === 0){
            alert(" Leap year.");
        }else{
            alert(" Not leap year.")
        }
    }else{
        alert("Leap year.");
    }
}else{
    alert(" Not leap year.");


}



}
