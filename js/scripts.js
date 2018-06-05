$(document).ready(function(){

  $("form#fortune-teller-form").submit(function(event){
    event.preventDefault();
    //Base of Alignment
    var baseGood = [];
    var baseNeutral = [];
    var baseEvil = [];

    //Law of Alignment
    var lawLawful = [];
    var lawNeutral = [];
    var lawChaotic = [];
    //adding base neutral questions together
    $("input:checkbox[value=a]:checked").each(function(){
      baseNeutral.push('a');
    });
    //adding base evil questions together
    $("input:checkbox[value=b]:checked").each(function(){
      baseEvil.push('b');
    });
    //adding base good questions together
    $("input:checkbox[value=c]:checked").each(function(){
      baseGood.push('c');
    });
    //adding law trueneutral questions together
    $("input:checkbox[value=x]:checked").each(function(){
      lawNeutral.push('x');
    });
    //adding law lawful questions together
    $("input:checkbox[value=y]:checked").each(function(){
      lawLawful.push('y');
    });
    //adding law chaotic questions together
    $("input:checkbox[value=z]:checked").each(function(){
      lawChaotic.push('z');
    });

    //variable used to determine base alignment
    var goodTotal = baseGood.length;
    var neutralTotal = baseNeutral.length;
    var evilTotal = baseEvil.length;
    var baseResult = 0;

    //variable used to determine law alignment
    var lawfulTotal = lawLawful.length;
    var chaoticTotal = lawChaotic.length;
    var lawNeutralTotal = lawNeutral.length;
    var lawResult = 0;

    //determines your base alignment
    if (neutralTotal > goodTotal && neutralTotal > evilTotal){
      baseResult = 2;
    } else if (goodTotal > neutralTotal && goodTotal > evilTotal){
      baseResult = 1;
    } else if (evilTotal > neutralTotal && evilTotal > goodTotal){
      baseResult = 3;
    } else {
      // ADD IN FOURENDARY OPTION
    }

    //determines your law alignment
    if (lawfulTotal > chaoticTotal && lawfulTotal > lawNeutralTotal){
      lawResult = 1;
    } else if (chaoticTotal > lawfulTotal && chaoticTotal > lawNeutralTotal){
      lawResult = 3;
    } else if (lawNeutralTotal > lawfulTotal && lawNeutralTotal > chaoticTotal){
      lawResult = 2;
    } else {
      //EMPTY UNTIL FURTHER NOTICE
    }
    debugger;
    if (baseResult === 1){
      //Good
      if (lawResult === 1){
        //Lawful
        alert("Lawful Good");
      } else if (lawResult === 2){
        //Neutral
        alert("Neutral Good");
      } else if (lawResult === 3){
        //Chaotic
        alert("Chaotic Good");
      } else {
        alert("??/good")
      }
    } else if (baseResult === 2){
      //Neutral
      if (lawResult === 1){
        //Lawful
        alert("Lawful Neutral");
      } else if (lawResult === 2){
        //Neutral
        alert("True Neutral");
      } else if (lawResult === 3){
        //Chaotic
        alert("Chaotic Neutral");
      } else {
        //other
        alert("???/Neutral");
      }
    } else if (baseResult === 3){
      //Evil
      if (lawResult === 1){
        //Lawful
        alert("Lawful Evil");
      } else if (lawResult === 2){
        //Neutral
        alert("Neutral Evil");
      } else if (lawResult === 3){
        //Chaotic
        alert("Chaotic Evil");
      } else {
      //other
      alert("???/Evil");
      }
    } else {
      //EMPTY FOR NOW
      alert("Its a mystery??");
    }

  });
});
