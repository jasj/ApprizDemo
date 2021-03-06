getRulesByProduct
===============================
Get the rules of a product. In the case where the user did not choose rules values or has them disabled, the API will return the values suggested by the entity, otherwise it will return customer's chosen values.

##Request Data
property  | type | required | comments
----------|------|----------|---------
idSecretClient|string|yes|This is the value given by the bindClient method.
productName|string|yes| Name of the product

##Response Data
property | type | comments
----------|------|---------
rules|arrayOfRulesObject|An array with all the rules
status|integer| 200: OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| Use a JSON.stringify. ONLY FOR STATUS 452.

####rulesObject
property | type | comments
----------|------|---------
idRule|string|Rule identification
ruleName|string| Small text that describe the rule. 
active|boolean| Flag that indicate if the user has this rule On.
description|string| Long description of the rules, could have wildcards of the variables. Ex: <[idTime]>
totalAmount|integer| Accumulated amount of the transactions 
trxNo|integer|Quantity of transactions 
singleAmount|integer| Individual amount
variation|integer| 
idTime|integer| Time identificator, use "getTimePeriods" to match with the right time

##Examples

####Request
```json
{
  "idSecretClient" : "rtLtgs9/+XnHhJy/RFq+xTg+KnP2B9OjFaUqKaiU3rYjRjff1kcAxW1veBwboz2Vc5T28vvUXTi5nUes4asHoNJbQsbc7zLNAHirrI8ra6xMnU4bhF8wkDeqBOHmWiomcn/UY858wEYAl+/Dpz53L2qHT9pU7Q+EVSTovgYogJ66WoNt7CoDkfh7zrb9vJZq7ojqskhVA6LUi9O4BhiI3Q==",
  "productName" : "VISA-9876"
}
```

####Response
```json
[
  {
    "idRule" : "rtysds/ddfkndn/UY858wEYAl+/Dpz53inojRjff1kcAxW1venoifn==",
    "ruleName": "Number of local purchases made over an specified time",
    "description": "Alert me when there are more than <[trxNo]> local purchases in the last <[idTime]>.",
    "trxNo": 3,
    "idTime" : 2
  },
  {
    "idRule" : "rtysds/ddfkndn/UY858wEgkas+dlfkdkdkdkgj54ojRjff1kcAxW1venoifn==",
    "ruleName" : "Purchase amount in a supermarket",
    "description" : "Alert me when any individual transaction in a supermarket is over <amount>.",
    "singleAmount": 200
  }
  
]
```

