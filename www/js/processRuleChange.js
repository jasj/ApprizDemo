		function processRuleChange(){
			var tmp_ruleChange = [];
			for ( ruleChange in rulesChanges){
				tmp_ruleChange.push(rulesChanges[ruleChange]);
			}
			rulesChanges = {};
			console.log(JSON.stringify(tmp_ruleChange));
			$('#loadingIndicator').show();
			$.post('http://'+IP+':8089/appriz/setRulesByProduct',{"idSecretClient": idScretClient,"productName": currentProduct, "rules":tmp_ruleChange},function(data){
					if (data["status"]== 200){
						SPickerString = timePicker(data["periods"]);
					}
				
			},'json') .fail(function(e) {
					alert("conexion error!");
				//alert( JSON.stringify(e));
			}).done(function(){});
			$('#loadingIndicator').hide();
			return tmp_ruleChange;
		}