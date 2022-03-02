// Write your JavaScript code here.
// Remember to pay attention to page loading!
  
function init() {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let top = 0;
    let bottom = 0;
    let left = 0;
    let right = 0;
    
    
    takeOff.addEventListener("click", function() {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(response) {
     flightStatus.innerHTML = "Shuttle in flight.";
     shuttleBackground.style.backgroundColor = 'blue';
     spaceShuttleHeight.innerHTML = 10000;
     }
    });

landing.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = 'green';
    spaceShuttleHeight.innerHTML = 0;
});
    
missionAbort.addEventListener("click", function() {
    let response = window.confirm( "Confirm that you want to abort the mission.");
    if(response) {
     flightStatus.innerHTML =  "Mission aborted.";
     shuttleBackground.style.backgroundColor = 'green';
     spaceShuttleHeight.innerHTML = 0;
     }   
    });

    upButton.addEventListener("click", function() {
    rocket.style.position = "relative";
       top -= 10;
      document.getElementById("rocket").style.top = (top-10) + "px";
      spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;   
    });

    downButton.addEventListener("click", function() {
      top += 10;
      document.getElementById("rocket").style.top = (top - 10) + "px";
      spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000; 
    });

    rightButton.addEventListener("click", function() {   
        left += 10;
        document.getElementById("rocket").style.left = (left- 10) + "px";    
    });

    leftButton.addEventListener("click", function() {
       left -= 10;
       document.getElementById("rocket").style.left = (left - 10) + "px";      
      });
  
}
    
    window.addEventListener("load", init);