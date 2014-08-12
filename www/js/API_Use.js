//-------------------------------------------------------//
//                 		 API USE						 //
//-------------------------------------------------------//
		
		//BindClient		
		function BindClient(identification,firstName,lastName,uuid,regId,products){
			
			$.post('http://'+IP+':8089/appriz/bindClient',{"identification": identification,"firstName":firstName,"lastName":lastName,"uuid":uuid,"regId" :regId,"products":products,secretKey:secretKey},function(data){
					$.jStorage.set('idSecretClient', data['idSecretClient']);
					idScretClient = data['idSecretClient'];
					console.log(JSON.stringify(data));
			});
		}		
		
		//bring message for this client
		function callNewMSG(){
		date = new Date();
			$('.refreshing_list').show();
			$('#loadingIndicator').show();
			$.post('http://'+IP+':8089/appriz/getMessagesByClient',{"idSecretClient": idScretClient},function(data){
				
				$.each(data,function(index, message){
					//child msg
					if( ( 'idParent' in message) && ($('#message_div #'+message['idParent']).length>0)){
						if($('#message_div #'+message['idParent']).hasAttr('history')){
							$('#message_div #'+message['idParent']).attr('history',btoa(atob($('#message_div #'+message['idParent']).attr('history'))+";"+message['shortMessage']+":"+message['longMessage']));
						
						}else{
							$('#message_div #'+message['idParent']).attr('history',btoa(message['shortMessage']+":"+message['longMessage']));
						}
						console.log(atob($('#message_div #'+message['idParent']).attr('history')));
					}else{ 
				
					var img_msg = message['type'] == 1 ? "img/ic_90_iPhone_ios7_myalerts.png"  : message['type'] == 2 ? "img/ic_90_iPhone_ios7_alerts.png" : message['type'] == 3 ? "img/ic_90_iPhone_ios7_notific.png" :  message['type'] == 4 ?  "img/ic_90_iPhone_ios7_publicidad.png" : "img/ic_90_iPhone_ios7_gestion.png";
						$('#message_div').append("<div class='delete_indicator'>Delete&nbsp;&nbsp; </div><div  class='message unread' id='"+message['idMessage']+"' longMSG='"+message['longMessage']+"' services='"+btoa(JSON.stringify(message['services']))+"' appends='"+btoa(JSON.stringify(message['appends']))+"'><img src='"+img_msg+"'/><table><tr><td>"+message['shortMessage']+"</td></tr><tr><td class='date_stamp'><i class='fa fa-calendar'></i> "+date.toLocaleString()+" </td></tr></table></div>");
						
						$.jStorage.set('msg_div', btoa($('#message_div').html()));
						makeSwipe();
						console.log(JSON.stringify(data));
					}
					
					$.jStorage.set('msg_div', btoa($('#message_div').html()));
				});
				
				$('#loadingIndicator').hide();
				
			},'json') .fail(function(e) {
					$('.refreshing_list').css({"background-color" : "#888"}).html('Conexion error!').hide(1000,function(){$('.refreshing_list').css({"background-color" : "#F5F5Ff"}).html('Refreshing list');});
			
				//alert( JSON.stringify(e));getRules(kilomanyaroB)
			}).done(function(){makeSwipe(); $('.refreshing_list').hide(); });
		}