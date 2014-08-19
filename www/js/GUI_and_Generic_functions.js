//-------------------------------------------------------//
// 					GUI AND GENERIC FUNCTIONS            //
//-------------------------------------------------------//
		
		
		//hide & helpers all views
		$('.view').hide();
		$('.iconp , .icons, .iconRight').hide();
		$('.management').hide();

		$('.vertical_menu').hide();
		
		//Show first view
		$('.view.active').show();
		
		//NAVEGATION BAR
		$('.principal_menu .fa').click(function(){
			if(!$.isEmptyObject(rulesChanges)){
				if (confirm("Save Changes?") == true) {
					processRuleChange();
				} else {
					rulesChanges = {};
				}
			}
			$('.principal_menu .fa.active').removeClass('active');
			$(this).addClass('active');
			$('.view.active').hide().removeClass('active');
			
			$('#'+$(this).attr('div')).show().addClass('active');
			
			$('.iconp ,.icons, .iconRight').hide();
			$('#'+$(this).attr('iconp')+'').show();
			$('#'+$(this).attr('iconl')+'').show();
			$('.vertical_menu,#config_rules,#service_luncher , div#products').hide();
			$('.vertical_menu').hide();
			$('.management').hide();
			$('#detail_msg').hide();
		});
		
		
	
		
		//Back from detail msg to list or from rules config to productos list
			$(".fa.fa-arrow-circle-o-left.iconp").click(function(){
				$(this).hide();
				if(!$.isEmptyObject(rulesChanges)){
					if (confirm("Save Changes?") == true) {
						processRuleChange();
					} else {
						rulesChanges = {};
					}
				}
				$('#detail_msg , #service_luncher , #config_rules , div#products').hide();
				
				$('.management').hide();
				
			});
		
		
		//swip for delete message & scroll 
		var oneTimeSendAjax = false;
		function makeSwipe(){
			$(".message").swipe( {
				
				//Generic swipe handler for all directions
				swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
					oneTimeSendAjax =false;
					var msg = $(this);msg.prev().css({"width":  0});
					msg.css({"margin-left": 0});
					if(direction=='right' & distance > 250){msg.remove(); $.jStorage.set('msg_div', btoa($('#message_div').html())); } else {msg.css({"margin-left": 0}) ;} 
					
				},
				
				swipeStatus:function(event, phase, direction, distance , duration , fingerCount) {
					var msg = $(this);
					if(direction=='right'){
						msg.css({"margin-left": distance});
						msg.prev().css({"width":  distance-1});
						
						if (distance< 250) {
							msg.prev().css({"background-color":  "#FDC111"});
						}else{
							msg.prev().css({"background-color":  "#FF3553"});
						}
					}
					else if(direction=='down') {
						
						if((msg.parent().scrollTop() < 1) && (distance > 100) && (oneTimeSendAjax == false)){ oneTimeSendAjax = true; callNewMSG();}
						msg.parent().scrollTop(msg.parent().scrollTop() - distance);
					
					}
					else if(direction=='up') {
					//alert('up');
						msg.parent().scrollTop(msg.parent().scrollTop() + distance);
					}
				   
				   if((phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL )& distance == 0)  {
						//read message
						$(this).removeClass('unread');
						$.jStorage.set('msg_div', btoa($('#message_div').html()));
						$("#shortMSG").html($(this).find('td').eq(0).html());
						$("#longMSG").html($(this).attr('longMSG'));
						$('.iconp').hide();
						$('#detail_msg img.typeIcon').attr('src',$(this).find('img').eq(0).attr('src'));
						$('#detail_msg').show();
						$(".fa.fa-arrow-circle-o-left.iconp").show();
						//Include services
						   management = "";
						   
						   strAppends = "";
						  var mpi = management;
						  var array_serv = JSON.parse(atob(msg.attr('services')));
							for(serv in  array_serv){
								management = management +"<li msg='"+msg.attr('id')+"' services='"+serv+"'>"+array_serv[serv]+"</li>";
							}
							
							try{
							  strHistory = "";
						
								
								tmp_hist = atob(msg.attr('history')).split(';');
								console.log(tmp_hist.length);
								for(var i = 0; i < tmp_hist.length ; i++){
									tmp_history = tmp_hist[i].split(':');
									strHistory = strHistory + "<table><tr><th>"+tmp_history[0]+"</th></tr><tr><td>"+tmp_history[1]+"</td></tr></table>"
								};
								$('.history_view').html(strHistory);
							}
							catch(e){
								$('.history_view').html("");
							}
							try{
							var array_appends = JSON.parse(atob(msg.attr('appends')));
							$.each(array_appends,function(key,value){
								strAppends = strAppends + "<table>";
								for( field in value){
									//if(field == "Fecha_Hora"){var dd = new Date(value[field]); strAppends = strAppends +"<tr><th>"+field+"</th><td>"+dd.toLocaleString()+"</td></tr>";} 
									if(field == "Fecha_Hora"){var dd = new Date(value[field]); strAppends = strAppends +"<tr><th>"+field+"</th><td>"+dd.toLocaleString()+"</td></tr>";} 
									else strAppends = strAppends +"<tr><th>"+field+"</th><td>"+value[field]+"</td></tr>";}
								strAppends = strAppends + "</table>";
							});
							}
							catch(e){$('div[view=trx_view]').hide();}
							
							$('.trx_view').html(strAppends);
							
						if(strAppends == ""){$('div[view=trx_view]').hide();}else{$('div[view=trx_view]').show()};
							
						
						if(management == "") {$('.ui-btn.mng').hide(); }else{
							$('.management ul').html(management);
							$('.ui-btn.mng').show();
						}
						
						
						
						
						
				   }
				 },
				//Default is 75px, set to 0 for demo so any distance triggers swipe
				 threshold:0
			});
		}
		
		//Show filter menu
		$('#filter').click(function(){
			$('.vertical_menu').toggle();
		});
		
		//Filter selection logic
		$('.vertical_menu li').click(function(){
			//close the filter menu
			if($(this).hasClass('close_filter')){
				$('.vertical_menu').hide();
			}else
			if($(this).find('i').hasClass('fa-check-square-o')){
				$(this).find('i').removeClass('fa-check-square-o').addClass('fa-square-o');
				$('.message img[src="'+$(this).find('img').attr('src')+'"]').parent().hide();
			}else{
				$(this).find('i').removeClass('fa-square-o').addClass('fa-check-square-o');
				$('.message img[src="'+$(this).find('img').attr('src')+'"]').parent().show();
			}
		});
		
		
		
		
		
		
		//scroll and update
		
			$(".message").swipe( {
				
				//Generic swipe handler for all directions
				swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
					oneTimeSendAjax =false;
					var msg = $(this);msg.prev().css({"width":  0});
					msg.css({"margin-left": 0});
					if(direction=='right' & distance > 250){msg.remove(); } else {msg.css({"margin-left": 0}) ;} 					
				},
				
				swipeStatus:function(event, phase, direction, distance , duration , fingerCount) {
					var msg = $(this);
					if(direction=='right'){
						msg.css({"margin-left": distance});
						msg.prev().css({"width":  distance-1});
						
						if (distance< 250) {
							msg.prev().css({"background-color":  "#FDC111"});
						}else{
							msg.prev().css({"background-color":  "#FF3553"});
						}
					}
					else if(direction=='down') {
						
						if((msg.parent().scrollTop() < 1) && (distance > 100) && (oneTimeSendAjax == false)){ oneTimeSendAjax = true; callNewMSG();}
						msg.parent().scrollTop(msg.parent().scrollTop() - distance);
					
					}
					else if(direction=='up') {
					//alert('up');
						msg.parent().scrollTop(msg.parent().scrollTop() + distance);
					}
				   
				   if((phase === $.fn.swipe.phases.PHASE_END || phase === $.fn.swipe.phases.PHASE_CANCEL )& distance == 0)  {
						//read message
						$(this).removeClass('unread');
						 $.jStorage.set('msg_div', btoa($('#message_div').html())); 
						$("#shortMSG").html($(this).find('td').eq(0).html());
						$("#longMSG").html($(this).attr('longMSG'));
						$('.iconp').hide();
						$('#detail_msg img.typeIcon').attr('src',$(this).find('img').eq(0).attr('src'));
						$('#detail_msg').show();
						$(".fa.fa-arrow-circle-o-left.iconp").show();
						//Include services
						   management = "";
						  var mpi = management;
						  var array_serv = JSON.parse(atob(msg.attr('services')));
							for(serv in  array_serv){
								console.log(msg.attr('id'));
								management = management +"<li msg='"+msg.attr('id')+"' services='"+serv+"'>"+array_serv[serv]+"</li>";
							}
							
						
						if(management == "") {$('.ui-btn.mng').hide(); }else{
							$('.management ul').html(management);
							$('.ui-btn.mng').show();
						}
						
						
						
				   }
				 },
				//Default is 75px, set to 0 for demo so any distance triggers swipe
				 threshold:0
			});
			
			$( document ).on('click','li[services]',function(){
				console.log(JSON.stringify({"idMessage": $(this).attr('msg'), "code": $(this).attr('services'), "description": $(this).html()}));
				requestService({"idMessage": $(this).attr('msg'), "code": $(this).attr('services'), "description": $(this).html()});
				
			});
			
		
		
		//Flush all message
		$('#flush').click(function(){
			if(confirm("Delete all messages?")){
				$('#message_div').html("");
				$.jStorage.set('msg_div', btoa($('#message_div').html()));
			}
			
		});
		
		
		
		//Control for sliders
		//$('.internal_header .fa-plus-square-o').parent().click(function(){
		$( document).on('click','.internal_header',function(){
			
			$('.div_content2').hide();
			if($(this).find('.fa-plus-square-o').hasClass('fa-plus-square-o')){
				$(this).find('.fa-plus-square-o').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
				$('.'+$(this).attr('view')).show();
			}else if($(this).find('.fa-minus-square-o').hasClass('fa-minus-square-o')){
				$('.div_content2').hide();
			$(this).find('.fa-minus-square-o').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
			$('.'+$(this).attr('view')).hide();
			}
			
		});
		
		
	$.fn.hasAttr = function(name) {  
		return this.attr(name) !== undefined;
	};
	//settings page
	$('.ui-last-child').click(function(){
		$('#'+$(this).attr('view')).show();
		if($(this).hasAttr('eval')){eval($(this).attr('eval'));}
		$(".fa.fa-arrow-circle-o-left.iconp").show();
	});
		
		
		
		$(document).on('click','.product',function(){ 
			currentProduct = $(this).html();
			console.log(currentProduct);
		});
		 //getRules();
	
	$(document).on('click','div.product.rules',function(){
		getRules($(this).html());
		$('#config_rules').show();
		$('div#products').hide();
		$('#config_rules p.title').html('My Alerts <i class="fa fa-angle-double-right"></i> '+$(this).html());
	});
	
	$(document).on('click','div.product.services',function(){
		getServices($(this).html());
		$('#service_luncher').show();
		$('div#products').hide();
		$('#service_luncher p.title').html('Services <i class="fa fa-angle-double-right"></i> '+$(this).html());
	});

		 //open rules details
	$(document).on('click','.rule_header p',function(){
		if($(this).parent().parent().parent().height() < 61){
			$(this).parent().parent().parent().css({"height":"auto"})
			$(this).parent().parent().parent().find('.rule_body').show();
		}else{
				$(this).parent().parent().parent().css({"height":"60px"})
			$(this).parent().parent().parent().find('.rule_body').hide();
			
			}
	});
	
	//active rule
	$( document ).on('change','input.toggle',function(){
		var rId = $(this).parent().parent().attr('id').replace(/rule_(\S+)/,"$1");
		console.log(rId);
		if($(this).is(":checked")){
			console.log('checked');
			$(this).parent().parent().find('table input').each(function(){
				console.log('table input');
				addRuleChange(rId,$(this).attr('field'),$(this).val() == "" ? $(this).attr("placeholder") : $(this).val());
				
			});
			$(this).parent().parent().find('table option:selected').each(function(){
				addRuleChange(rId,'idTime',$(this).val());
			});

		}else{
			rulesChanges[rId] = {"idRule" : rId} // disable rule
		}
	});
	
	//change values on rule description
	$(document).on('keyup','.rule_body input',function(){
		$(this).parent().parent().parent().parent().parent().parent().find($(this).attr('field')).html($(this).val());
		addRuleChange($(this).parent().parent().parent().parent().parent().parent().attr('id').replace(/rule_(\S+)/,"$1"),$(this).attr('field'),$(this).val());
		$(this).parent().parent().parent().parent().parent().parent().find('input[type=checkbox]').attr('checked','true');
	});
	
	$(document).on('change','.SelectStyle',function(){
		$(this).parent().parent().parent().parent().parent().parent().find('idTime').html($(this).find('option:selected').html());
		$(this).css({"color" : "#1A73B6"});
		addRuleChange($(this).parent().parent().parent().parent().parent().parent().attr('id').replace(/rule_(\S+)/,"$1"),'idTime',$(this).find('option:selected').val());
		$(this).parent().parent().parent().parent().parent().parent().find('input[type=checkbox]').attr('checked','true');
		
	});
	//load past
	try{
		if($.jStorage.index().indexOf('msg_div') > -1){
		$('#message_div').html(atob($.jStorage.get('msg_div')));}
		if($.jStorage.index().indexOf('lab_div') > -1){
		$('#lab_div').html(atob($.jStorage.get('lab_div')));}
		if($.jStorage.index().indexOf('idSecretClient') > -1){
			idScretClient = $.jStorage.get('idSecretClient');
		}		
	}
	catch(e){}
	
	//start service by product
	$(document).on('click','#service_div .service',function(){
		
		requestService({"productName": currentProduct, "code": $(this).attr('service'), "description": $(this).html()});
		
	});	
	
	getValidTimePeriods();
	callNewMSG();
	makeSwipe();