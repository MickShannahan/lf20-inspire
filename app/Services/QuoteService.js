//TODO create methods to retrieve data and update the State
import { proverbsApi } from "./AxiosService.js";
class QuoteService {
  async getQuote() {
    let res = await proverbsApi.get('random')
    console.log(res.data)
  }
}

const quoteService = new QuoteService();
export default quoteService;