import { Tamagotchi } from './../src/Tamagotchi.js';

describe('Tamagotchi', function() {
  const newPet = new Tamagotchi(100, 100, 100);
  const newPet2 = new Tamagotchi(100, 100, 100);

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });
//////////
  it('should test if FOOD level starts at 100 when created', function() {
    expect(newPet.foodLevel).toEqual(100);
  });
  it('should test if PLAY level starts at 100 when created', function() {
    expect(newPet.playLevel).toEqual(100);
  });
  it('should test if REST level starts at 100 when created', function() {
    expect(newPet.playLevel).toEqual(100);
  });
///////////
it('should test if getFood returns foodLevel', function() {
  expect(newPet.foodLevel).toEqual(100);
});
it('should test if getPlay returns playLevel', function() {
  expect(newPet.playLevel).toEqual(100);
});
it('should test if getRest returns restLevel', function() {
  expect(newPet.restLevel).toEqual(100);
});
///////////
  it('should test if FOOD level is 99 after 61 milliseconds', function() {
    newPet.startGame(60);
    jasmine.clock().tick(61);
    expect(newPet.foodLevel).toEqual(99);
  });
  it('should test if PLAY level is 99 after 61 milliseconds', function() {
    newPet.startGame(60);
    jasmine.clock().tick(61);
    expect(newPet.playLevel).toEqual(98);
  });
  it('should test if REST level is 99 after 61 milliseconds', function() {
    newPet.startGame(60);
    jasmine.clock().tick(61);
    expect(newPet.restLevel).toEqual(97);
  });
  ///////
  it('should test if addFood add 10 to foodLevel', function() {
    newPet2.addFood();
    expect(newPet2.foodLevel).toEqual(110);
  });
  it('should test if addPlay add 10 to playLevel', function() {
    newPet2.addPlay();
    expect(newPet2.playLevel).toEqual(110);
  });
  it('should test if addRest add 10 to restLevel', function() {
    newPet2.addRest();
    expect(newPet2.restLevel).toEqual(110);
  });

});
