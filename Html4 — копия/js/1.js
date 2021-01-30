$(window).on('load', function(){ 
   
	let  maxSquare=30;
	let startValue=2
	let step=2;
	let selectList= $("select");
	for(let i=0; i<selectList.length; i++){
	for(let value=startValue; value<=maxSquare;){
	var el="#"+selectList[i].id;
		$(el).append(`  <option value="${value}">${value}</option>`);
		value+=step;
	}
}
});

function calculateSquare (){
	let mySquare=$('#width').val()*$('#length').val();
	let sizeElement=4;
	let numberElements=mySquare/sizeElement;
  	 let bigPack=8;
	let littlePack=6;
	let numberBigPacks=0;
	let numberlittlePacks=0;
	let reminder=0;
	
	if(numberElements>10)
   {
	   if(numberElements%2!==0)	   {
		   numberElements++;
		   reminder=1;
	   }
	   let closestDivisibleBigPack = numberElements - (numberElements % bigPack);
	  
	   numberBigPacks=closestDivisibleBigPack/bigPack;
	   let MyCoefficient= (numberElements-closestDivisibleBigPack)/2;
	    switch (MyCoefficient) {
		  case 1:
			numberBigPacks-=2;
			numberlittlePacks=3;   
			break;
		  case 2:
			 numberBigPacks-=1;
			numberlittlePacks=2;   
			break;
		  case 3:
			numberlittlePacks=1;   
			break;
			}
   }
	else{
		if(numberElements<=littlePack){
		   numberlittlePacks=1;
			reminder=littlePack-numberElements;
		   }
		if(numberElements>littlePack&& numberElements<=bigPack ){
		   numberBigPacks=1;
			reminder=bigPack-numberElements;
		   }
		if(numberElements>bigPack){
			numberlittlePacks=2;
			reminder=littlePack*2-numberElements;
		}
	}
	alert(`Yuo will need ${numberBigPacks} packs of 8pcs,${numberlittlePacks}   packs of 6pcs  reminder = ${reminder} element`);
}




