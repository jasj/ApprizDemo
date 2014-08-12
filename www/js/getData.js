function getRules(productName){
		
				$.post('http://'+IP+':8089/appriz/getRulesByProduct',{"idSecretClient": idScretClient,"productName":productName,},function(data){
					if (data["status"]== 200){
						addRules(data["rules"]);
					}
				
			},'json') .fail(function(e) {
					alert("conexion error!");
				//alert( JSON.stringify(e));
			}).done(function(){makeSwipe(); $('.refreshing_list').hide(); });			
		}		
		
		function getServices(productName){
		
				$.post('http://'+IP+':8089/appriz/getServicesByProduct',{"idSecretClient": idScretClient,"productName":productName,},function(data){
					if (data["status"]== 200){
						addServices(data["services"]);
					}
				
			},'json') .fail(function(e) {
					alert("conexion error!");
				//alert( JSON.stringify(e));
			}).done(function(){makeSwipe(); $('.refreshing_list').hide(); });			
		}
		
		function requestService(serviceObj){
				$.post('http://'+IP+':8089/appriz/sendServiceRequest',$.extend({"idSecretClient": idScretClient},serviceObj),function(data){
					if (data["status"]== 200){
						alert('Sucessfull!');
					}
				
				},'json') .fail(function(e) {
					alert("conexion error!");
				//alert( JSON.stringify(e));
				}).done(function(){});
			}
		
		
		function getProducts(view){
		
				$.post('http://'+IP+':8089/appriz/getProductsByClient',{"idSecretClient": idScretClient,"view":view,},function(data){
					if (data["status"]== 200){
						addProducts(data["products"],view);
					}
				
			},'json') .fail(function(e) {
					alert("conexion error!");
				//alert( JSON.stringify(e));
			}).done(function(){$('#products p.title').html((view == 'rules' ? 'My Alerts' : 'Services')+'<i class="fa fa-angle-double-right"></i>Products </p>')});
			
		}
		
		function getValidTimePeriods(){
					$.post('http://'+IP+':8089/appriz/getTimePeriods',{"secretKey" : secretKey},function(data){
					if (data["status"]== 200){
						SPickerString = timePicker(data["periods"]);
					}
				
			},'json') .fail(function(e) {
					alert("conexion error!");
				//alert( JSON.stringify(e));
			}).done(function(){});
			
		}