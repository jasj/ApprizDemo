getRulesByProduct
===============================
Get the rules of a product. In the case where the user did not choose rules values or has it disabled, the API will return the values defined by the entity, otherwise it's will return chosen values by the customer.
##Request
 Data
property  | type | required | comments
----------|------|----------|---------
idSecretClient|string|yes|This is the value given by the bindClient method.
productName|string|yes| Name of the product

##Response Data
property | type | comments
----------|------|---------
rules|rulesObject|a dictionary with all the rules
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

####rulesObject
property | type | comments
----------|------|---------
idRule|string|Rule identification
ruleName|string| Small text that describe the rule. 
active|boolean| flag that indicate if the user has this rule On.
description|string| Long description of the rules, could have wildcards of the variables. Ex: <[idTime]>
totalAmount|integer| Accumulated amount of the transactions 
trxNo|integer|quantity of transactions 
singleAmount|integer| Individual amount
varation|integer| 
idTime|integer| Time identificator, use "getTimePeriods" to match with the right time


