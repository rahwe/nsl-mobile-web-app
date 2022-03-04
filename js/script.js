/* =========================================
                Menu
============================================ */
$(document).ready(function(){
	$('#modal_view_left').modal({
	    show: 'false'
	});



	
// ===========Win6+================//

var btnVal=[];
$('.winsix-ball').each(function () {
	  $(this).click(function () {
		$(this).toggleClass('activate')
			  if($(this).hasClass('activate')) {
				btnVal.push($(this).val());
			
				if(btnVal.length == 6) {
					addDisable()
					$('.qty > span').text("1")
					$('.amt > span').text("1,000R")
				}
			  }
			  else {
				 var index = btnVal.indexOf($(this).val());
				 if (index > -1) {
					btnVal.splice(index, 1);
				
					if(btnVal.length < 6) {
						removeDisable()
						$('.qty > span').text("0")
						$('.amt > span').text("0R")
					}
				  } 
			  }  
	  });
  });

function addDisable(){
	$('.winsix-ball').each(function () {
		if(!$(this).hasClass('activate')){
			$(this).addClass('disable-btn')
		}
	})
}
function removeDisable(){
	$('.winsix-ball').each(function () {
		$(this).removeClass('disable-btn')
	})
}

$('#addBuy').click(function(){
	if(btnVal.length == 6){
		removeDisable()
		$('.winsix-ball').removeClass('activate');
        $(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + btnVal.join('+') + ` Win6+-ZX|FS|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
		btnVal= [];
		$('.qty > span').text("0")
		$('.amt > span').text("0R")
	}
});

$('#buy-item-ul').on('click', '.item-add', function() {
    $(this).closest('li').remove();
});


$('#radomOne').click(function(){
	randomOne();
});
$('#randomFive').click(function(){
	randomFive()
});

$('#randomTen').click(function(){
	radomTen()
});


$('#randomTwenty').click(function(){
	randomTwenty()
});


function randomOne(){
	var arrNum = [];
	var numberRandom = 6
	for(i= 0; i<numberRandom; i++){
		randNum = Math.floor((Math.random() * 40) + 1);
		arrNum.push(randNum);
	}
	$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + arrNum.join('+') + ` Win6+-ZX|FS|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
}

function randomFive(){
	var arrNum = [];
    var numberRandom = 6;
    var x = 0, i=0;
    var listItem = [[],[],[],[],[]];
    for(x = 0;x<5;x++) {
      arrNum= [];
      for(i = 0; i<numberRandom; i++) {
        randNum = Math.floor((Math.random() * 40) + 1);
        arrNum.push(randNum);
    }
      listItem[x].push(arrNum.join('+'));
    }
    listItem.forEach(function(v){
		$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + v + ` Win6+-ZX|FS|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
    });
}



function radomTen(){
	var arrNum = [];
	var numberRandom = 6;
	var x = 0, i=0;
	var listItem = [[],[],[],[],[],[],[],[],[],[]];
	for(x = 0;x<10;x++) {
		arrNum= [];
		for(i = 0; i<numberRandom; i++) {
		randNum = Math.floor((Math.random() * 40) + 1);
		arrNum.push(randNum);
	}
		listItem[x].push(arrNum.join('+'));
	}
	listItem.forEach(function(v){
		$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + v + ` Win6+-ZX|FS|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
	});
}



function randomTwenty(){
	var arrNum = [];
	var numberRandom = 6;
	var x = 0, i=0;
	var listItem = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	for(x = 0; x<20; x++) {
		arrNum= [];
		for(i = 0; i<numberRandom; i++) {
		randNum = Math.floor((Math.random() * 40) + 1);
		arrNum.push(randNum);
	}
		listItem[x].push(arrNum.join('+'));
	}
	listItem.forEach(function(v){
		$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + v + ` Win6+-ZX|FS|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
	});
}

//============Win6+ Bank Leg(DT)=================//

var bankValue = [];
$('.winsix-ball-bank').each(function(){
	$(this).click(function () {
		$(this).toggleClass('activate')
				if($(this).hasClass('activate')) {
				bankValue.push($(this).val());
				console.log(bankValue) 
				if(bankValue.length == 5) {
					addDisableBank()
				}
				}
				else {
					var index = bankValue.indexOf($(this).val());
					if (index > -1) {
					bankValue.splice(index, 1);
					console.log(bankValue)
					removeDisableBank()
					} 
				}  
		});

});



var legValue = [];
$("#leg-btn").click(function(){
	$('.winsix-ball-bank').removeClass('disable-btn')
	$('.winsix-ball-leg').each(function(){
		//$('.winsix-ball-bank').removeClass('disable-btn')
		$(this).removeClass('disable-btn')
	})

	$('#bankerID').addClass('d-none')
	$('#legID').removeClass('d-none')
	$('#banker-btn').removeClass('disable-btn')
	$(this).addClass('active-bg-leg')
	$('#banker-btn').removeClass('active-bg')

	$('.winsix-ball-leg').each(function(){

		$(this).removeClass('activate')
		$(this).removeClass('disable-btn')

		if(jQuery.inArray($(this).val(), bankValue) !== -1){		
			$(this).addClass('disable-btn-gray')
			console.log(bankValue)

		}

		$(this).click(function () {
			$(this).toggleClass('activate')
				  if($(this).hasClass('activate')) {
				
					legValue.push($(this).val());
					console.log(legValue) 
					if(legValue.length == 5) {
						addDisableLeg()
					}
				  }
				  else {
					 var index = legValue.indexOf($(this).val());
					 if (index > -1) {
						legValue.splice(index, 1);
						console.log(legValue)
						removeDisableLeg()
					  } 
				  }  
		  });

	})
	

});

$('#banker-btn').click(function(){
	bankValue = []
	legValue =[]
	$('.winsix-ball-leg').each(function(){
		$(this).removeClass('disable-btn-gray')
	})
	$(this).addClass('active-bg')
	$('#bankerID').removeClass('d-none')
	$('#legID').addClass('d-none')
	$('#leg-btn').removeClass('active-bg-leg')
	$('#leg-btn').removeClass('disable-btn')


	$('.winsix-ball-bank').each(function(){
		$(this).removeClass('activate')
		$(this).removeClass('disable-btn').
		bankValue = []
		if(jQuery.inArray($(this).val(), legValue) !== -1){
			console.log(legValue)
			$(this).addClass('disable-btn-gray');
		}
		

	})

})




function addDisableBank(){
	$('.winsix-ball-bank').each(function () {
		if(!$(this).hasClass('activate')){
			$(this).addClass('disable-btn')
		}
	})
}
function removeDisableBank(){
	$('.winsix-ball-bank').each(function () {
		$(this).removeClass('disable-btn')
	})
}

function addDisableLeg(){
	$('.winsix-ball-leg').each(function () {
		if(!$(this).hasClass('activate')){
			$(this).addClass('disable-btn')
		}
	})
}
function removeDisableLeg(){
	$('.winsix-ball-leg').each(function () {
		$(this).removeClass('disable-btn')
	})
}


$('#addBuyBank').click(function(){
	if(btnBank.length !== 0) {
		$('.winsix-ball-bank').removeClass('activate')
		$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between" style="white-space: normal;">` + btnBank.join('+') + ` Win6+-ZX|FS|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
	}

	btnBank = []
	
})





$('#pills-normal-winsix-tab').click(function(){
	$('#addBuy').removeClass('d-none')
	$('#addBuyBank').addClass('d-none')
})

$('#pills-bank-tab').click(function(){
	$('#addBuy').addClass('d-none')
	$('#addBuyBank').removeClass('d-none')
})



// =========== End Win6+================//


//===============Extra ball===========//


// Digital
var extraValBtn=[];
var qty = 0;
var amt = 0;
$('.extra-ball').each(function () {
	  $(this).click(function () {
		$(this).toggleClass('activate')
			  if($(this).hasClass('activate')) {
				extraValBtn.push($(this).val());
				console.log(extraValBtn)

				$('.qty > span').text(qty+=1)
				$('.amt > span').text(amt+=1000)
				$('.amt > i').removeClass('d-none')
				
			  }
			  else {
				 var index = extraValBtn.indexOf($(this).val());
				 if (index > -1) {
					extraValBtn.splice(index, 1);
					$('.qty > span').text(qty-=1)
					$('.amt > span').text(amt-=1000)
					$('.amt > i').removeClass('d-none')
				  } 
			  }  
	  });
  });

  $('#erandOne').click(function(){
	randNum = Math.floor((Math.random() * 40) + 1);
	$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + randNum + ` ExtraWin-DG|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
  })

  $('#erandFive').click(function(){
	var arrNum = [];
	var numberRandom = 1;
	var x = 0, i=0;
	var listItem = [[],[],[],[],[]];
	for(x = 0; x<5; x++) {
		arrNum= [];
		for(i = 0; i<numberRandom; i++) {
		randNum = Math.floor((Math.random() * 40) + 1);
		arrNum.push(randNum);
	}
		listItem[x].push(arrNum.join('+'));
	}
	listItem.forEach(function(v){
		$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + v + ` ExtraWin-DG|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
	});
	
  });

  $('#erandTen').click(function(){
	var arrNum = [];
	var numberRandom = 1;
	var x = 0, i=0;
	var listItem = [[],[],[],[],[],[],[],[],[],[]];
	for(x = 0; x<10; x++) {
		arrNum= [];
		for(i = 0; i<numberRandom; i++) {
		randNum = Math.floor((Math.random() * 40) + 1);
		arrNum.push(randNum);
	}
		listItem[x].push(arrNum.join('+'));
	}
	listItem.forEach(function(v){
		$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + v + ` ExtraWin-DG|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
	});
	
  });

  $('#erandTwenty').click(function(){
	var arrNum = [];
	var numberRandom = 1;
	var x = 0, i=0;
	var listItem = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	for(x = 0; x<20; x++) {
		arrNum= [];
		for(i = 0; i<numberRandom; i++) {
		randNum = Math.floor((Math.random() * 40) + 1);
		arrNum.push(randNum);
	}
		listItem[x].push(arrNum.join('+'));
	}
	listItem.forEach(function(v){
		$(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + v + ` ExtraWin-DG|1,000R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
	});
	
  });
	
  

// Orientation(ORI)

var directBuy=[];
$('.direction-ball').each(function () {
	  $(this).click(function () {
		$(this).toggleClass('activate')
			  if($(this).hasClass('activate')) {
				directBuy.push($(this).val());
				
				$('.qty > span').text(qty+=1)
				$('.amt > span').text(amt+=1000)
				$('.amt > i').removeClass('d-none')
				
			  }
			  else {
				 var index = directBuy.indexOf($(this).val());
				 if (index > -1) {
					
					directBuy.splice(index, 1);
					$('.qty > span').text(qty-=1)
					$('.amt > span').text(amt-=1000)
					$('.amt > i').removeClass('d-none')
					
				  } 
			  }  
	  });
  });

//Odd/Event
var oddEvent=[];
$('.oddeven-ball').each(function () {
	  $(this).click(function () {
		$(this).toggleClass('activate')
			  if($(this).hasClass('activate')) {
				oddEvent.push($(this).val());
				
				$('.qty > span').text(qty+=1)
				$('.amt > span').text(amt+=1000)
				$('.amt > i').removeClass('d-none')
				
			  }
			  else {
				 var index = oddEvent.indexOf($(this).val());
				 if (index > -1) {
					
					oddEvent.splice(index, 1);
					$('.qty > span').text(qty-=1)
					$('.amt > span').text(amt-=1000)
					$('.amt > i').removeClass('d-none')
					
				  } 
			  }  
	  });
  });

$('#extBuy').click(function(){
	if(extraValBtn.length !== 0){
		removeDisable()
		$('.extra-ball').removeClass('activate');
        $(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + extraValBtn.join('+')+` ExtraWin-DG|`+ amt.toString()+ `R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
		extraValBtn = []
		$('.qty > span').text("0")
		$('.amt > span').text("0R")
		$('.amt > i').addClass('d-none')
	}
});

$('#extO').click(function(){
	if(directBuy.length !== 0){
		removeDisable()
		$('.direction-ball').removeClass('activate');
        $(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + directBuy.join('+')+` ExtraWin-ORI|`+ amt.toString()+ `R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
		directBuy = []
		qty = 0;
		amt = 0;
		$('.qty > span').text("0")
		$('.amt > span').text("0R")
		$('.amt > i').addClass('d-none')
	}
});


$('#extOdd').click(function(){
	if(oddEvent.length !== 0){
		removeDisable()
		$('.oddeven-ball').removeClass('activate');
        $(".calculate-result ul").append(`<li class="list-group-item  d-flex justify-content-between">` + oddEvent.join('+')+` ExtraWin-OE|`+ amt.toString()+ `R<a href="#" class="item-add"><i class="fa fa-times" aria-hidden="true" style="color: red;"></i></a></li>`);
		oddEvent = []
		qty = 0;
		amt = 0;
		$('.qty > span').text("0")
		$('.amt > span').text("0R")
		$('.amt > i').addClass('d-none')
	}
});


$('#pills-orientation-tab').click(function(){
	qty = 0;
	amt = 0;
	$('.qty > span').text("0")
	$('.amt > span').text("0R")
	$('.amt > i').addClass('d-none')
	$('#extO').removeClass('d-none');
	$('#extBuy').addClass('d-none');
	$('#extOdd').addClass('d-none');
});

$('#pills-odd-tab').click(function(){
	qty = 0;
	amt = 0;
	$('.qty > span').text("0")
	$('.amt > span').text("0R")
	$('.amt > i').addClass('d-none')
	$('#extO').addClass('d-none');
	$('#extBuy').addClass('d-none');
	$('#extOdd').removeClass('d-none');
});


$('#pills-digital-tab').click(function(){
	qty = 0;
	amt = 0;
	$('.qty > span').text("0")
	$('.amt > span').text("0R")
	$('.amt > i').addClass('d-none')
	$('#extO').addClass('d-none');
	$('#extBuy').removeClass('d-none');
	$('#extOdd').addClass('d-none');
});




//===============End Extra ball========//

// Set every to empty when click link
$('.nav.nav-pills a').click(function(){
	$('.form-control').val("")
	$('input:button').val("")
	$('.form-control').attr("data-focus", false)
	$('.key').removeClass('disable-btn')

	$('.first-row, .second-row, .third-row, .fourth-row').removeClass('disable-btn')
	var btn = $('.normal-ball');
	if(btn.hasClass('activate')){
		btn.removeClass('activate');
	}	
	array = []
	//console.log(array)
	// normal  (FS)
	$('.winsix-ball').each(function(){
		$(this).removeClass('activate')
		$(this).removeClass('disable-btn')
	})

	$('.oddeven-ball').removeClass('activate')
	$('.direction-ball').removeClass('activate')
	$('.extra-ball').removeClass('activate')

	// // bank leg (DT)
	$('.winsix-ball-bank').removeClass('activate')
});




$('#confirm').click(function(){
	$('#verify').addClass('btn-secondary disable-btn').removeClass('btn-primary').text('Verified')
	
})


});/// End Document===========================




 