//Example of a Drone Project

function testBracketsDynamicAccess() {
    
    let dynamicKey;

    if(Math.random() > 0.5) {

      dynamicKey = "speed";

     }else{

       dynamicKey = "color";

     }
  
      let drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }

  testBracketsDynamicAccess();