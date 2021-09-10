function setup (){
createCanvas(windowWidth, windowHeight);
  background(245,64,64);
}


function draw() {
 
 stroke(249,215,28);
 strokeWeight(5);
 fill(245,64,64);
  stroke(249,215,28,25);
  ellipse(windowWidth/2,windowHeight/2,450,450);
 stroke(249,215,28,50);
  ellipse(windowWidth/2,windowHeight/2,440,440);
     stroke(249,215,28,75);
        ellipse(windowWidth/2,windowHeight/2,430,430);
         stroke(249,215,28,100);
ellipse(windowWidth/2,windowHeight/2,420,420);
 stroke(249,215,28,125);
    ellipse(windowWidth/2,windowHeight/2,410,410);
    stroke(249,215,28,150);
       ellipse(windowWidth/2,windowHeight/2,400,400);
     stroke(249,215,28,175);
     ellipse(windowWidth/2,windowHeight/2,390,390);
     stroke(249,215,28,200);
        ellipse(windowWidth/2,windowHeight/2,380,380);
         stroke(249,215,28,225);
ellipse(windowWidth/2,windowHeight/2,370,370);
 stroke(249,215,28,250);
    ellipse(windowWidth/2,windowHeight/2,360,360);
    stroke(249,215,28,255);
    fill(250,253,15);
 ellipse(windowWidth/2,windowHeight/2,350,350);

    fill(0,128,136);
 stroke(0,128,136);
 strokeWeight(0);
 square(0,windowHeight/2,windowWidth);
  fill(250,253,15,150);
 stroke(250,253,15,150);
 strokeWeight(1);
 triangle(windowWidth/2,windowHeight+100,windowWidth/2-175,windowHeight/2,windowWidth/2+175,windowHeight/2);
 shader(windowWidth/2,windowHeight+100,windowWidth/2-175,windowHeight/2,windowWidth/2+175,windowHeight/2);
}
