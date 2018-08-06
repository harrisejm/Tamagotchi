import { Tamagotchi } from './Tamagotchi';
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  const newPet = new Tamagotchi(100, 100, 100);
  newPet.startGame();
  $('#food').click(function() {
    newPet.addFood();
  });
  $('#play').click(function() {
    newPet.addPlay();
  });
  $('#sleep').click(function() {
    newPet.addRest();
  });
 //
 //  $("#test").text(newPet.getFood());
 //
 //  $("#test1").text(newPet.getPlay());
 //
 //  $("#test2").text(newPet.getRest());
 // //$(".test3").text(newPet.getRest());

document.getElementById("test3").innerHTML = newPet.getFood();

});
