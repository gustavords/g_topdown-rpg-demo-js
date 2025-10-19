import skySprite from "./sprites/sky.png";
import groundSprite from "./sprites/ground.png";
import heroSprite from "./sprites/hero-sheet.png";
import shadowSprite from "./sprites/shadow.png";

const sky = new Image();
const ground = new Image();
const hero = new Image();
const shadow = new Image();

sky.src = skySprite;
ground.src = groundSprite;
hero.src = heroSprite;
shadow.src = shadowSprite;

class Resources
{
  constructor ()
  {
    this.toLoad = {
      sky: sky.src,
      ground: ground.src,
      hero: hero.src,
      shadow: shadow.src,
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
      img.onLoad = () =>
      {
        this.images[ key ].isLoaded = true;
      }
    } );
  }
}
export const resources = new Resources();
