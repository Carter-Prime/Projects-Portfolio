var heads = 0;
var reverse = 0;
var win = 0;
var para = document.createElement("P");
    para.id = "Userchoice";
    document.getElementById("uc").appendChild(para);

var btn1 =  document.createElement('button');
    btn1.id = "heads";
    btn1.innerHTML = "head";
    document.getElementById("uc").appendChild(btn1);
    
var btn2 =  document.createElement('button');
    btn2.id ="reverses";
    btn2.innerHTML = "reverse";
    document.getElementById("uc").appendChild(btn2);

document.getElementById("imgbutton").remove();
document.getElementById("win").innerHTML = win;
document.getElementById("head").innerHTML = heads;
document.getElementById("reverse").innerHTML = reverse;

btn1.addEventListener("click", function() {rndnmb("head");});
btn2.addEventListener("click", function() {rndnmb("reverse");});

function rndnmb(choice)
{
    var toss = Math.random();
      
    {        
        document.getElementById("uc").innerHTML = choice;

        if (toss >= 0.5)
        {
            document.getElementById("img1").src="head.jpg";
            heads++;
            document.getElementById("head").innerHTML = heads;
            if (choice == "head")
            { 
                win++;      
                alert("You Win!");
            }
            else
            {
                alert("You Lose!");
            }  
                        
        }   
        if (toss < 0.5)
        {
            document.getElementById("img1").src="reverse.jpg";
            reverse++;
            document.getElementById("reverse").innerHTML = reverse;
            if (choice == "reverse")
            {
                win++;
                alert("You Win!");
            }
            else
            {
                alert("You Lose!");
            }        
        }
    }
    document.getElementById("win").innerHTML = win;
    var para = document.createElement("P");
        para.id = "Userchoice";
        document.getElementById("uc").appendChild(para);
    var btn1 =  document.createElement('button');
        btn1.id ="heads";
        btn1.innerHTML = "head";
        document.getElementById("uc").appendChild(btn1);
  
    var btn2 =  document.createElement('button');
        btn2.id ="reverses";
        btn2.innerHTML = "reverse";
        document.getElementById("uc").appendChild(btn2);

    btn1.addEventListener("click", function() {rndnmb("head");});
    btn2.addEventListener("click", function() {rndnmb("reverse");});  
}
