var form,form1;
var gameState = 0;

function preload() {


}

function setup(){
    createCanvas(1000,800);
    
form = new Form();
form1 = new Form1();
form2 = new Form2();
form3 = new Form3();
form4 = new Form4();
form5 = new Form5();
form6 = new Form6();
form7 = new Form7();
form8 = new Form8();
form9 = new Form9();
form10 = new Form10();

b1f1 = new B1F1();


}

function draw() {

    background(255);
   
    if(gameState === 0){
        form.show();
        form.display();
        form1.hide();
      form2.hide();
        form3.hide();
        form4.hide();
        form5.hide();
        form6.hide();
        form7.hide();
        form8.hide();
        form9.hide();
        form10.hide();  
    }
   if(gameState === 1){
       form.hide();
       form1.show();
       form1.display();
       form2.hide();
       form3.hide();
       form4.hide();
       form5.hide();
       form6.hide();
       form7.hide();
       form8.hide();
       form9.hide();
       form10.hide();
   }

   if(gameState === 2){
    form.hide();
    form2.show();
    form2.display();
    
    form1.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 3){
    form.hide();
    form3.show();
    form3.display();
    form1.hide();
    form2.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 4){
    form.hide();
    form4.show();
    form4.display();
    form1.hide();
    form2.hide();
    form3.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 5){
    form.hide();
    form5.show();
    form5.display();
    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 6){
    form.hide();
    form6.show();
    form6.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 7){
    form.hide();
    form7.show();
    form7.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 8){
    form.hide();
    form8.show();
    form8.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 9){
    form.hide();
    form9.show();
    form9.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form10.hide();
}

if(gameState === 10){
    form.hide();
    form10.show();
    form10.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
}


if(gameState === 11){
    form.hide();
    form1.hide();
    b1f1.display();

  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}
     }





