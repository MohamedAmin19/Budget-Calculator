var money=0;
function projectName()
{
    var project=document.getElementById("projectDown");
    var choice1=project.options[project.selectedIndex].value;

    var Capability=document.getElementById("CapabilitiesDown");
    var choice2=Capability.options[Capability.selectedIndex].value;

    var times=document.getElementById("timeRangeDown");
    var choice3=times.options[times.selectedIndex].value;
   
    if(choice1=="front" && choice2=="css" && choice3=="one")
    {
        money=300;
    }
    else if(choice1=="front" && choice2=="css" && choice3=="two")
    {
        money=200;
    }
    else if(choice1=="front" && choice2=="css" && choice3=="three")
    {
        money=100;
    }
    else if(choice1=="front" && choice2=="cssjs" && choice3=="one")
    {
        money=500;
    }
    else if(choice1=="front" && choice2=="cssjs" && choice3=="two")
    {
        money=400;
    }
    else if(choice1=="front" && choice2=="cssjs" && choice3=="three")
    {
        money=300;
    }
    else if(choice1=="front" && choice2=="all" && choice3=="one")
    {
        money=600;
    }
    else if(choice1=="front" && choice2=="all" && choice3=="two")
    {
        money=500;
    }
    else if(choice1=="front" && choice2=="all" && choice3=="three")
    {
        money=400;
    }
    else if(choice1=="back" && choice2=="css" && choice3=="one")
    {
        money=400;
    }
    else if(choice1=="back" && choice2=="css" && choice3=="two")
    {
        money=300;
    }
    else if(choice1=="back" && choice2=="css" && choice3=="three")
    {
        money=200;
    }
    else if(choice1=="back" && choice2=="cssjs" && choice3=="one")
    {
        money=500;
    }
    else if(choice1=="back" && choice2=="cssjs" && choice3=="two")
    {
        money=400;
    }
    else if(choice1=="back" && choice2=="cssjs" && choice3=="three")
    {
        money=300;
    }
    else if(choice1=="back" && choice2=="all" && choice3=="one")
    {
        money=700;
    }
    else if(choice1=="back" && choice2=="all" && choice3=="two")
    {
        money=600;
    }
    else if(choice1=="back" && choice2=="all" && choice3=="three")
    {
        money=500;
    }
    else if(choice1=="frontBack" && choice2=="css" && choice3=="one")
    {
        money=800;
    }
    else if(choice1=="frontBack" && choice2=="css" && choice3=="two")
    {
        money=700;
    }
    else if(choice1=="frontBack" && choice2=="css" && choice3=="three")
    {
        money=600;
    }
    else if(choice1=="frontBack" && choice2=="cssjs" && choice3=="one")
    {
        money=900;
    }
    else if(choice1=="frontBack" && choice2=="cssjs" && choice3=="two")
    {
        money=800;
    }
    else if(choice1=="frontBack" && choice2=="cssjs" && choice3=="three")
    {
        money=700;
    }
    else if(choice1=="frontBack" && choice2=="all" && choice3=="one")
    {
        money=1000;
    }
    else if(choice1=="frontBack" && choice2=="all" && choice3=="two")
    {
        money=900;
    }
    else if(choice1=="frontBack" && choice2=="all" && choice3=="three")
    {
        money=800;
    }    
}

function getBudget()
{
     document.getElementById("demo").innerHTML = "The budget of the project is" + " " + money + "$";
}

