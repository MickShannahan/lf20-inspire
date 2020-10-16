//TODO Create methods for constructor, and rendering the image to the page
import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

function _draw() {
  let image = ProxyState.image
  console.log(image)

}
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  constructor() {
    ProxyState.on("image", _draw)
    this.getImage()
  }

  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}