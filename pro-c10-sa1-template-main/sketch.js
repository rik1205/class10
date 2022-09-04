var weights=[20,25,45,50];
console.log(weights[2]);

function avg(){
 var sum=weights[0]+weights[1]+weights[2]+weights[3]
 var avge= sum/weights.length
 console.log(avge)
}
avg();


function setup() 
{
  createCanvas(400,400);

}

function draw() 
{
background(51);

}

