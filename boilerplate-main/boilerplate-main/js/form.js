class Form{ 
    constructor(){
        this.input = createInput("").attribute("placeHolder","enterYourName");
        this.button = createButton("play")
    }
    setPositions(){
        this.input.position(width/2 - 160, height/2 - 100);
        this.button.position(width/2 - 100, height/2 - 20);
    }
    display(){
        this.setPositions()
    }
}