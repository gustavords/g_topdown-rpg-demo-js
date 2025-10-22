import { Vector2 } from "./vector2.js";

export class Sprite
{
  constructor ( {
    resource, //image we wanna draw
    frameSize, //size of  the crop of image
    hFrames, //horizontal arrangement
    vFrames, //vertical arrangement
    frame, //frames we want to show
    scale, //how large to draw
    position,  //where to draw it (top left corner)
  } )
  {
    this.resource = resource;
    this.frameSize = frameSize ?? new Vector2( 16, 16 );
    this.hFrames = hFrames ?? 1;
    this.vFrames = vFrames ?? 1;
    this.frame = frame ?? 0;
    this.frameMap = new Map();
    this.scale = scale ?? 1;
    this.position = position ?? new Vector2( 0, 0 );
    this.buildFrameMap();
  }

  // test = 0;
  buildFrameMap ()
  {
    let frameCount = 0;
    for ( let v = 0; v < this.vFrames; v++ )
    {
      for ( let h = 0; h < this.hFrames; h++ )
      {
        // console.log( `frame: `, h, v );
        this.frameMap.set(
          frameCount,
          new Vector2( this.frameSize.x * h, this.frameSize.y * v ),
        );
        frameCount += 1;
      }
    }
    console.log( `--------vFrames------here-> `, this.vFrames );

  }

  drawImage ( ctx, x, y )
  {
    if ( !this.resource.isLoaded ) { return; }

    //find correct sprite sheet
    let frameCoordX = 0;
    let frameCoordY = 0;

    const frame = this.frameMap.get( this.frame );
    if ( frame )
    {
      frameCoordX = frame.x;
      frameCoordY = frame.y;
    }

    const frameSizeX = this.frameSize.x;
    const frameSizeY = this.frameSize.y;

    ctx.drawImage(
      this.resource.image, //instance of an image
      frameCoordX, //
      frameCoordY, //Top Y of frame
      frameSizeX, //how much to crop from sprite sheet
      frameSizeY, //how much to crop from sprite sheet
      x, //where on canvas
      y, //where on canvas
      frameSizeX * this.scale, //how large to scale is it
      frameSizeY * this.scale  //how large to scale is it
    )
  }
}