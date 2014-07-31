setRulesByProduct
=====================
Set values of a rules of a product. Use first getRulesProduct to get valid fields, otherwise the invockation could result in error.

##Request Data
 property  | type | required | comments
 ----------|------|----------|---------
 idRule|string|yes|Use the value given by getRulesProduct
 idTime|integer| | Id of time selected by th custumer.. Please note that is not a time format,  instead is a id of a time given by getTimePeriods.
 trxNo|integer| |Transaction quantity boundary selected by the customer
 singleAmount|integer|  |Boundery amount of a single transacction selected by the customer 
 totalAmount|integer| |Boundery of accumulative amount on transacctions selecter by the customer 
 varation|integer | 
 
 
 


