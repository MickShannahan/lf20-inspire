//TODO create methods to retrieve data and update the State
import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { proverbsApi } from "./AxiosService.js";
class QuoteService {
  async getQuote() {
    let res = await proverbsApi.get('random')
    ProxyState.quote = new Quote(res.data)
  }
}

const quoteService = new QuoteService();
export default quoteService;