//---------------------------------------------------------------------------------------------------------------------//
//                                        Phonegap APPRIZ-API SDK                                                      //
//---------------------------------------------------------------------------------------------------------------------//
		
		
		function addRules(objs){
			var toAppend = '';
			$('#rules_div').html('');
			$.each(objs,function(index,obj){;
				toAppend = "<div class='rule' id='rule_"+obj["idRule"]+"'><div class='rule_header'><div class='rule_header_txt'><p>"+obj["ruleName"]+"</p></div>";
				toAppend = toAppend + "<input type='checkbox' name='toggle_"+obj["idRule"]+"' id='toggle_"+obj["idRule"]+"' class='toggle' "+(obj["active"] ? "checked" : "")+"><label for='toggle_"+obj["idRule"]+"'></label></div>";
				toAppend = toAppend + "<div class='rule_body'><p align='justify' style='100%'>"+obj["description"].replace(/<\[singleAmount\]>/g,"<singleAmount>"+obj['singleAmount']+"</singleAmount>").replace(/<\[trxNo\]>/g,"<trxNo>"+obj['trxNo']+"</trxNo>").replace(/<\[idTime\]>/g,"<idTime>"+obj['idTime']+"</idTime>").replace(/<\[totalAmount\]>/g,"<totalAmount>"+obj['totalAmount']+"</totalAmount>").replace(/<\[varation\]>/g,"<varation>"+obj['varation']+"</varation>") +"</p><table>";
				if("trxNo" in obj ) toAppend = toAppend + "<tr><th>Trx No.</th><td><input type='number' field='trxNo' maxlength='10'  placeholder='"+obj["trxNo"]+"'></td></tr>";
				if("singleAmount" in obj ) toAppend = toAppend + "<tr><th>Amount</th><td><input type='number' field='singleAmount' maxlength='10'  placeholder='"+obj["singleAmount"]+"'/></td></tr>";
				if("totalAmount" in obj ) toAppend = toAppend + "<tr><th>Total Amount</th><td><input type='number' field='totalAmount' maxlength='10'  placeholder='"+obj["totalAmount"]+"'/></td></tr>";
				if("varation" in obj ) toAppend = toAppend + "<tr><th>Variation</th><td><input type='number' field='varation' maxlength='10' placeholder='"+obj["varation"]+"'/></td></tr>";
				if("idTime" in obj ) toAppend = toAppend + "<tr><th>Time</th><td><select class='SelectStyle'>"+SPickerString+"</select></td></tr>";
				toAppend = toAppend + "</table></div></div>";
				$('#rules_div').append(toAppend);
				if("idTime" in obj ) {$('select:last option[value="'+obj["idTime"]+'"]').prop('selected', true); $('idTime:last').html($('select:last option[value="'+obj["idTime"]+'"]').html());}
			});
			$('#rules_div').append("<div style='width: 100%; height: 150px;'></div>");
			
		}
		
		function addProducts(products,view){
			
			$('#products_div').html('');
			for( product in products){
				$('#products_div').append('<div class="product '+view+'">'+product+'</div>');
			}
			$('products_div').append("<div style='width: 100%; height: 150px;'></div>");
		}
		
		function addServices(services){
			
			$('#service_div').html('');
			 console.log(JSON.stringify(services));
			for( service in services){
			
				$('#service_div').append('<div class="service" service="'+service+'">'+services[service]+'</div>');
			}
			$('service_div').append("<div style='width: 100%; height: 150px;'></div>");
		}
		
		
		
		function addRuleChange(idRule,field,value){
			if (!(idRule in  rulesChanges)){
				rulesChanges[idRule] = {"idRule" : idRule}
			}
				rulesChanges[idRule][field] = parseInt(value);
		}
		

		
		function timePicker(objs){
			timePickerString = '<fieldset class="ui-field-contain">';
			$.each(objs,function(index,obj){
				timePickerString = timePickerString + "<option value='"+obj["idTime"]+"'>"+obj["amount"]+" "+obj["unit"]+"</option>";
			});
			return timePickerString+"</fieldset>";
		}