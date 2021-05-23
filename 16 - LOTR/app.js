function Player(name){
    this.name = name;
    this.hp   = 100; // Health points
    this.sp   = 100; // Special points

    this.cure = function(targetPlayer){

        if(this.sp >= 40){
            this.sp -= 40;
            targetPlayer.hp += 20;
        }else{
            console.info(this.name + " don´t have special points");
        }
        this.state(targetPlayer);
    }
    this.shootArrow = function(targetPlayer){

        if(targetPlayer.hp > 40){
            targetPlayer.hp -= 40;
        }else{
            targetPlayer.hp = 0;
            console.error(targetPlayer.name + " has fallen")
        }
        
        this.state(targetPlayer);
    }

    this.state = function(targetPlayer){
        console.info(this);
        console.info(targetPlayer);
    }
};

var gandalf = new Player("Gandalf");
var legolas = new Player("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.cure(legolas);

