export default class Quote {
  constructor(str) {
    this.str = str
  }

  get Template() {
    let template = ''
    template += `<h1 id="quote" class="col-12 text-center text-shadow quote-author">${this.str}</h1>`
    template += `<div class="col quote">-the Emporer</div>`
    return template
  }

}