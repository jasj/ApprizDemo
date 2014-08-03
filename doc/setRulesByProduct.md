setRulesByProduct
=====================
Set values of a rules of a product. Use first getRulesProduct to get valid fields, otherwise the invockation could result in error.

##Request Data
property  | type | required | comments
----------|------|----------|---------
idSecretClient|string|yes|
productName|string|yes|
rules|arrayOfRulesObject|yes|[see below]()

#### ruleObject
 property  | type | required | comments
 ----------|------|----------|---------
 idRule|string|yes|Use the value given by getRulesProduct
 idTime|integer| | Id of time selected by th custumer.. Please note that is not a time format,  instead is a id of a time given by getTimePeriods.
 trxNo|integer| |Transaction quantity boundary selected by the customer
 singleAmount|integer|  |Boundery amount of a single transacction selected by the customer 
 totalAmount|integer| |Boundery of accumulative amount on transacctions selecter by the customer 
 varation|integer | 
 
##Response Data

  property | type | comments
 ----------|------|---------
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

##Examples

####Request
```json
{
  "idSecretClient": "rtLtgs9/+XnHhJy/RFq+xTg+KnP2B9OjFaUqKaiU3rYjRjff1kcAxW1veBwboz2Vc5T28vvUXTi5nUes4asHoNJbQsbc7zLNAHirrI8ra6xMnU4bhF8wkDeqBOHmWiomcn/UY858wEYAl+/Dpz53L2qHT9pU7Q+EVSTovgYogJ66WoNt7CoDkfh7zrb9vJZq7ojqskhVA6LUi9O4BhiI3Q==",
  "productName" : "Visa-9876",
  "rules":[
   {
    "idRule": "Apild+dldlfn3498aj4398d9n984/d094349c434s8093Qn==",
    "idTime" 3,
    "trxNo" : 4
  },
    {
    "idRule": "Apild+dl6767894839409fdg9+32\43d094349c434s8093Qn==",
    "singleAmount" : 4
  },
  
 ]
}
```

####Response
```json
{
 "status" : 200
}
```
 
 


