$(document).ready(function(){
  //Base of Alignment
  var baseGood = [];
  var baseNeutral = [];
  var baseEvil = [];

  //Law of Alignment
  var lawGood = [];
  var lawNeutral = [];
  var lawEvil = [];

  $("form#fortune-teller-form").submit(function(event){
    event.preventDefault();
    //neutral
    $("input:checkbox[value=a]:checked").each(function(){
      baseNeutral.push('a');
    });
    $("input:checkbox[value=b]:checked").each(function(){
      baseEvil.push('b');
    });
    $("input:checkbox[value=c]:checked").each(function(){
      baseGood.push('c');
    });

    $("input:checkbox[value=x]:checked").each(function(){
      lawNeutral.push('x');
    });
    $("input:checkbox[value=y]:checked").each(function(){
      lawLawful.push('y');
    });
    $("input:checkbox[value=z]:checked").each(function(){
      lawChaotic.push('z');
    });

    var goodTotal = baseGood.length;
    var neutralTotal = baseNeutral.length;
    var evilTotal = baseEvil.length;
    var baseResult = 0;

    var lawfulTotal = lawLawful.length;
    var chaoticTotal = lawChaotic.length;
    var lawNeutralTotal = lawNeutral.length;
    var lawResult = 0;

    if (neutralTotal > goodTotal && neutralTotal > evilTotal){
      baseResult = 2;
    } else if (goodTotal > neutralTotal && goodTotal > evilTotal){
      baseResult = 1;
    } else if (evilTotal > neutralTotal && evilTotal > goodTotal){
      baseResult = 3;
    } else {
      // ADD IN FOURENDARY OPTION
    }

    if (lawfulTotal > chaoticTotal && lawfulTotal > lawNeutralTotal){
      lawResult = 1;
    } else if (chaoticTotal > lawfulTotal && chaoticTotal > lawNeutralTotal){
      lawResult = 3;
    } else if (lawNeutralTotal > lawfulTotal && lawNeutralTotal > chaoticTotal){
      lawResult = 2;
    } else {
      //EMPTY UNTIL FURTHER NOTICE
    }
  });
});
