import "./styles.css";
import { resources } from "./resources.js";
import { Sprite } from "./sprite.js";
import { Vector2 } from "./vector2.js";

const canvas = document.querySelector( `#game-canvas` );
const ctx = canvas.getContext( `2d` );


const skySprite = new Sprite( {
  resource: resources.images.sky,
  frameSize: new Vector2( 320, 180 ),
} )
const groundSprite = new Sprite( {
  resource: resources.images.ground,
  frameSize: new Vector2( 320, 180 ),
} )
const heroSprite = new Sprite( {
  resource: resources.images.hero,
  frameSize: new Vector2( 32, 32 ),
  hFrames: 3,
  vFrames: 8,
  frame: 1,
} );

const shadowSprite = new Sprite( {
  resource: resources.images.shadow,
  frameSize: new Vector2( 32, 32 )
} )

// // const heroPos = new Vector2( 16 * 4, 16 * 5.5 );
// // heroSprite.drawImage( ctx, heroPos.x, heroPos.y );
// // const heroOffset = new Vector2( -31, 7 );

const heroPos = new Vector2( 16 * 6, 16 * 5 );
const heroOffset = new Vector2( -8, -21 );
const heroPosX = heroPos.x + heroOffset.x;
const heroPosY = heroPos.y + 1 + heroOffset.y;

const draw = () =>
{

  // ctx.clearRect(0,0, canvas.width, canvas.height);
  // const sky = resources.images.sky;
  // console.log( sky.isLoaded );
  // console.log( sky.image.src );
  // if(sky.isLoaded){
  //   ctx.drawImage(sky.image, 0, 0);
  // }


  skySprite.drawImage( ctx, 0, 0 );
  groundSprite.drawImage( ctx, 0, 0 );

  //to move position of where sprite is cut

  // console.log( heroSprite.frame );

  shadowSprite.drawImage(ctx, heroPosX, heroPosY)
  heroSprite.drawImage( ctx, heroPosX, heroPosY );

}



setInterval( () =>
{
  heroSprite.frame += 1;
  draw();

}, 300 );