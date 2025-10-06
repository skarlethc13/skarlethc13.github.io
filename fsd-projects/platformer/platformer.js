$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
     

    // TODO 2 - Create Platforms
    createPlatform(0, 250, 350, 50, "red");
    createPlatform(500, 500, 450, 50, "blue");
    createPlatform(250, 350, 450, 50, "pink");
    createPlatform(50, 600, 350, 50, "black");
    createPlatform(1050, 550, 250, 50, "yellow");





    // TODO 3 - Create Collectables
     createCollectable("steve", 200, 200);
     createCollectable("diamond", 500, 300);
     createCollectable("diamond", 1200, 500);

    
    // TODO 4 - Create Cannons
    createCannon("top", 1400, 1500);
    createCannon("right", 500, 1050);
    createCannon("bottom", 500, 1050);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
