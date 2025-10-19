import "./styles.css";
import { fuck } from "./sprites/resources";
import fuckyou from "./fuck.png";


const canvas = document.querySelector( `#game-canvas` );
const ctx = canvas.getContext( `2d` );

// const draw = () =>
// {
//   // const sky = resources.images.sky;
//   // if ( sky.isLoaded )
//   // {
//   //   ctx.drawImage( sky.image, 0, 0 );
//   // }

//   // const img = new Image();
//   // img.src = sky;
//   // ctx.drawImage( img, 0, 0 );
// }

console.log( fuck );
const img = new Image();
img.src = fuckyou;
ctx.drawImage( img, 0, 0 );

document.body.appendChild(img);

// setInterval( () =>
// {
//   console.log(`draw`);
//   draw();

// }, 300 );