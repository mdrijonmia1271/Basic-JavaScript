function leapYear(year){
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        return "is a leap Year";
    }
    else{
        return "not a leap Year";
    }
}
const leap_Year = leapYear(2020);
console.log(leap_Year);