
//TODO Create methods for constructor, and rendering the quote to the page

import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";

function _draw() { }
export default class QuoteController {
  constructor() {
    ProxyState.on("quote", _draw)
    this.getQuote()
  }

  getQuote() {
    quoteService.getQuote()
  }
}