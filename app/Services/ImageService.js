//TODO create methods to retrieve data and save to the State
import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js";
import { api } from "../Services/AxiosService.js";
class ImageService {
  async getImage() {
    let res = await api.get("images")
    ProxyState.image = new Image({
      id: res.data.id,
      title: res.data.site,
      url: res.data.url,
      lgUrl: res.data.large_url
    })
  }
}

export const imageService = new ImageService();