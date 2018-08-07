import { Tamagotchi } from './Tamagotchi';
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  const newPet = new Tamagotchi(100, 100, 100);

  $('#easy').click(function() {
    newPet.startGame(60);
    $('#easy').hide();
    $('#normal').hide();
    $('#hard').hide();
    $('#extreme').hide();
  });

  $('#normal').click(function() {
    newPet.startGame(50);
    $('#easy').hide();
    $('#normal').hide();
    $('#hard').hide();
    $('#extreme').hide();
  });

  $('#hard').click(function() {
    newPet.startGame(35);
    $('#easy').hide();
    $('#normal').hide();
    $('#hard').hide();
    $('#extreme').hide();
  });
  $('#extreme').click(function() {
    newPet.startGame(0);
    $('#easy').hide();
    $('#normal').hide();
    $('#hard').hide();
    $('#extreme').hide();
  });





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
  //$("#test").text(newPet.getFood());
 //
 //  $("#test1").text(newPet.getPlay());
 //
 //  $("#test2").text(newPet.getRest());
 // //$(".test3").text(newPet.getRest());

//document.getElementById("test").innerHTML;
//document.getElementById("test1").innerHTML;
//document.getElementById("test2").innerHTML;

//document.getElementById("test").innerHTML = newPet.getFood();

});
//document.getElementById("test").innerHTML = newPet.getFood();
