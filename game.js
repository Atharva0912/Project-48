class Game {
	

    constructor(){
           
        this.button1 = createButton('Start');
       // this.button1.style('background', 'lightgrey');    


    }


    display(){
        strokeWeight(20);
        stroke(255); 
        textSize(20);
        //var title = createElement('h1')
        //title.html('The Lost Puppy')
        //title.position(350,100);
        
        this.button1.position(600,350);
        
        
        
        this.button1.mousePressed(() => {
            

            this.button1.hide();     
               
            var title = createElement('h1')
            title.html('The Lost Puppy')
            title.position(350,100);
            
            var story1 = createElement('h2');
            story1.html("There was a man who was walking with his pet but soon his pet got lost.")
            story1.position(40,200);
            var story2 = createElement('h2');
            story2.html("Help the man find his pet but listen the pet is kidnapped by the witty monster, The Leonard.")
            story2.position(40,220);
            var story3 = createElement('h2');
            story3.html("Defeat the monster so that you could get your pet back.")
            story3.position(40,240);
            var story4 = createElement('h2');
            story4.html("There are a total of 2 levels in which the boss comes in the final level.")
            story4.position(40,260);
            var story5 = createElement('h2');
            story5.html("The monster is very witty, he would try to defeat you . If you get defeated, the monster wins.")
            story5.position(40,280);
            var story6 = createElement('h2');
            story6.html("If you lose one time you have to start again from the first level. You have to defeat Leonard and get your pet back.")
            story6.position(40,300);
            var story7 = createElement('h2');
            story7.html("1.	The man has to complete 2 levels to get his pet back.")
            story7.position(40,320);
            
               // man.destroy();
              
        });
        
    }
}

