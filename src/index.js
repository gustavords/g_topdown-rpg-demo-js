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
  vFrame: 8,
  frame: 1,
} )

const heroPos = new Vector2( 16 * 5, 16 * 5 );

// console.log( skySprite.frame );


const draw = () =>
{

  skySprite.drawImage( ctx, 0, 0 );
  groundSprite.drawImage( ctx, 0, 0 );
  heroSprite.drawImage( ctx, heroPos.x, heroPos.y );


}

// const hero = new Sprite( {
//   resource: resources.images.hero,
//   hFrames: 3,
//   vFrames: 8,
//   frame: 1,
// } );

// hero.buildFrameMap();

setInterval( () =>
{
  draw();

}, 300 );