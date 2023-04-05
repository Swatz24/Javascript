let isWeekend= false;
let isHoliday= false;
let currentTime=4;

if(isWeekend || isHoliday)
{
  x="The store is closed (WEEKEND, HOLIDAY).";
}
else if(currentTime>=8 && currentTime<=18)
{
  x="The store is Open for business."; 
}
else{
    x="The store is closed."
  }

  
  console.log("Today : ", x);



