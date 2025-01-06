

const startTime=new Date().getTime();
const endTime=new Date("1 Dec , 2025 10:00:00").getTime();


let a=setInterval(function updateTimer(){
    const CurrentTime=new Date().getTime();

    const distancePending=endTime-CurrentTime;

    const OneDayInMilli=(24*60*60*1000);
    const OneHourInMilli=(60*60*1000);
    const OneMinInMilli=(60*1000);
    const OneSecondInMilli=(1000);

    const days=Math.floor((distancePending/OneDayInMilli));
    const hrs=Math.floor((distancePending%OneDayInMilli/OneHourInMilli));
    const mins=Math.floor((distancePending%OneHourInMilli/OneMinInMilli));
    const secs=Math.floor((distancePending%OneMinInMilli/OneSecondInMilli));

    document.getElementById("Day").innerHTML=days;
    document.getElementById("Hours").innerHTML=hrs;
    document.getElementById("Minutes").innerHTML=mins;
    document.getElementById("seconds").innerHTML=secs;



},1000);


