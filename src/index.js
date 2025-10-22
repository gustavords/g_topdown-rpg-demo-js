import "./styles.css";
import { resources } from "./resources.js";
import { Sprite } from "./sprite.js";
import { Vector2 } from "./vector2.js";
import { GameLoop } from "./gameloop.js";
import { DOWN, Input, LEFT, RIGHT, UP } from "./input.js";

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

const heroPos = new Vector2( 16 * 6, 16 * 5 );
const input = new Input();

const update = () =>
{
  //updating entities in the game
  // heroSprite.frame += 1;
  // heroPos.x += 1;

  console.log( input.direction );
  if ( input.direction === UP )
  {
    heroSprite.frame = 6;
    heroPos.y--;
  }
  if ( input.direction === DOWN )
  {
    heroSprite.frame = 1;
    heroPos.y++;
  }
  if ( input.direction === LEFT )
  {
    heroSprite.frame = 9;
    heroPos.x--;
  }
  if ( input.direction === RIGHT )
  {
    heroSprite.frame = 3;
    heroPos.x++;
  }

}

const draw = () =>
{

  skySprite.drawImage( ctx, 0, 0 );
  groundSprite.drawImage( ctx, 0, 0 );


  //to move position of where sprite is cut
  const heroOffset = new Vector2( -8, -21 );
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y + 1 + heroOffset.y;

  shadowSprite.drawImage( ctx, heroPosX, heroPosY )
  heroSprite.drawImage( ctx, heroPosX, heroPosY );

}



// setInterval( () =>
// {
//   heroSprite.frame += 1;
//   draw();

// }, 300 );

const gameLoop = new GameLoop( update, draw );

gameLoop.start();