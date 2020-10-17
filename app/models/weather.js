export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.f = data.main.temp * 9 / 5 - 459.67
  }
  get Template() {
    return `
    <div class="row">
    <div class="col-12">${this.city}</div>
    <div class="col-12">${Math.round(this.f)}</div>
</div>
</div>
    `
  }
}