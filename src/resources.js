import skySprite from "./sprites/sky.png";
import groundSprite from "./sprites/ground.png";
import heroSprite from "./sprites/hero-sheet.png";
import shadowSprite from "./sprites/shadow.png";

class Resources
{
  constructor ()
  {
    this.toLoad = {
      sky: skySprite,
      ground: groundSprite,
      hero: heroSprite,
      shadow: shadowSprite,
    }

    //bucket of images
    this.images = {}

    Object.keys( this.toLoad ).forEach( ( key ) =>
    {
      const img = new Image();
      img.src = this.toLoad[ key ];

      this.images[ key ] = {
        image: img,
        isLoaded: false,
      }
      img.onload = () =>
      {
        this.images[ key ].isLoaded = true;
        // console.log( `++++++here` );

      }
      // console.log(`-----here`);
      // alert(window.onload)
    } );
  }
}
export const resources = new Resources();
