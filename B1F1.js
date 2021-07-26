class B1F1{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Symptoms")
        title.style("color","red")
        title.position(100,150);

        var p1 = createElement("ol");
        p1.html("Chest tightness or pressure.")
        p1.position(100,200);

        var p2 = createElement("ol");
        p2.html("Difficulty catching your breath.")
        p2.position(100,250);

        var p3 = createElement("ol");
        p3.html("Dizziness or fainting.")
        p3.position(100,300);

        var p4 = createElement("ol");
        p4.html("Fatigue.")
        p4.position(100,350);

        var p5 = createElement("ol");
        p5.html("Fluid build up.")
        p5.position(100,400);

        var p6 = createElement("ol");
        p6.html("Heart palpitations (heart pounding or racing).")
        p6.position(100,450);

        var p7 = createElement("ol");
        p7.html("Pain or numbness in your legs or arms.")
        p7.position(100,500);
        
        var p8 = createElement("ol");
        p8.html("Abdominal pain, nausea, vomiting.")
        p8.position(100,550);

        var image = createElement("img").attribute("src","Images/CVD IMAGE.png");
        image.style("width","500px")
        image.position(displayWidth/2 + 100 , displayHeight/2 - 300);
    }
}