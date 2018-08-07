import $ from 'jquery';

export class Tamagotchi {
  constructor(foodLevel, playLevel, restLevel) {
    this.foodLevel = foodLevel;
    this.playLevel = playLevel;
    this.restLevel = restLevel;
  }

  startGame(mode) {
    const test = setInterval(() => {
      this.foodLevel -= 1;
      this.getFood();
      this.playLevel -= 1;
      this.getPlay();
      this.restLevel -= 1;
      this.getRest();
      if (this.foodLevel === 0) {
        clearInterval(test);
        this.deadFood();
      } else if (this.playLevel === 0) {
        clearInterval(test);
        this.deadPlay();
      } else if (this.restLevel === 0) {
        clearInterval(test);
        this.deadRest();
      }
    }, mode);
  }
  //////////////////
  getFood() {
    let that = this;
    $("#test").text(that.foodLevel);
    return that.foodLevel;
  }
  getPlay() {
    let that = this;
  $("#test1").text(that.playLevel);
    return that.playLevel;
  }
  getRest(){
    let that = this;
    $("#test2").text(that.restLevel);
    return that.restLevel;
  }
  /////////////////////
  addFood() {
    this.foodLevel += 10;
  }
  addPlay() {
    this.playLevel += 10;
  }
  addRest() {
    this.restLevel += 10;
  }
  /////////////////////////
  deadFood() {
    $("#test3").text("Dead by food");
  }
  deadPlay() {
    $("#test3").text("Dead by bus or something");
  }
  deadRest() {
    $("#test3").text("Deaddddd by sleep");
  }


}
