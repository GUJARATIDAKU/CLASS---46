class Form7{
    constructor(){    
    
    this.button1 = createButton('Symptoms');
    this.button2 = createButton('Causes');
    this.button3 = createButton('Safety Measures');
    this.button4 = createButton('FAQs');

    this.note1 = createElement('h3');
    
}

hide(){
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();


  this.note1.hide();
}

show(){
  this.button1.show();
  this.button2.show();
  this.button3.show();
  this.button4.show();


  this.note1.show();
}
    display(){

    
        this.note1.html("Click On Any One Button To Know More");
        this.note1.position(displayWidth/2-380,displayHeight/2-280);

  
        this.button1.position(displayWidth/2 - 500, displayHeight/2 - 150);
        this.button1.style('width', '200px');
        this.button1.style('height', '40px');
        
        this.button2.position(displayWidth/2 -250 , displayHeight/2 - 150);
        this.button2.style('width', '200px');
        this.button2.style('height', '40px');
        
        this.button3.position(displayWidth/2 - 0, displayHeight/2 - 150);
        this.button3.style('width', '200px');
        this.button3.style('height', '40px');

        this.button4.position(displayWidth/2 +250 , displayHeight/2 - 150);
        this.button4.style('width', '200px');
        this.button4.style('height', '40px');



    
        this.button1.mousePressed(()=>{
          
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          this.button4.hide();
       
         
          this.note1.hide();

          gameState = 71;
        });
    
        this.button2.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();

            this.note1.hide();
  
            gameState = 72;
          });

          this.button3.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();

           
            this.note1.hide();
  
            gameState = 73;
          });

          this.button4.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();

            this.note1.hide();
  
            gameState = 74;
  
          });


    
      }
    }
