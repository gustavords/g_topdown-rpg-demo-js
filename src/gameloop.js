export class GameLoop
{
  constructor ( update, render )
  {
    this.lastFrameTime = 0
    this.accumulatedTime = 0;
    this.timeStep = 1000 / 60; //60 frames per second

    this.update = update;
    this.render = render;

    this.rafId = null;
    this.isRunning = false;
  }

  mainLoop = ( timestamp ) =>
  {
    if ( !this.isRunning ) { return; };

    let deltaTime = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    //Accumulated all the time since last frame
    this.accumulatedTime += deltaTime;

    //Fixed timeStep updates
    //if there's enough accumulated time to tun one more fixed updates, run the
    while ( this.accumulatedTime >= this.timeStep )
    {
      // console.log("UPDATE PLEASE-------");
      this.update( this.timeStep ); //Here we pas the fixed time step size
      this.accumulatedTime -= this.timeStep;
    }

    //Render
    this.render();

    this.rafId = requestAnimationFrame( this.mainLoop );
  }

  start ()
  {
    if ( !this.isRunning )
    {
      this.isRunning = true;
      this.rafId = requestAnimationFrame( this.mainLoop );
    }
  }

  stop ()
  {
    if ( this.rafId )
    {
      cancelAnimationFrame( this.rafId );
    }
    this.isRunning = false;
  }

}
