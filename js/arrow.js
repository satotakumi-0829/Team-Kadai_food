'use strict';

let path = "./images";
const image_src = new Array(`${path}/001.jpg`,`${path}/002.jpg`,`${path}/003.jpg`,`${path}/004.jpg`,`${path}/005.jpg`);
let num = 0;

function changeImg(num) {
  $("#sample-img").attr("src", image_src[num]);
}

function goBack(){
  if (num == 0) {
      num = 4;
  }
  else {
      num --;
  }
  changeImg(num);
}

function goForward(){
  if (num == 4) {
      num = 0;
  }
  else {
      num ++;
  }
  changeImg(num);
}// JavaScript Document