sendServiceRequest
========================

##Request Data
This service is used by the client to request an entity's service. 

 
 property  | type | required | comments
-----------|------|----------|---------
 idSecretClient|string|yes|This is the value given by the bindClient method.
 code|string|yes|Code that use the entity to recognize the service.
 description|string|yes|Description of the service
 idMessage|string| |Id of the message bound to the service
 productName|string| |Product name that is bound to the service.
 
##Response Data

  property | type | comments
 ----------|------|---------
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

##Examples

####Request

######Bound to MSG
```json
{
 "idSecretClient" : "rtLtgs9/+XnHhJy/RFq+xTg+KnP2B9OjFaUqKaiU3rYjRjff1kcAxW1veBwboz2Vc5T28vvUXTi5nUes4asHoNJbQsbc7zLNAHirrI8ra6xMnU4bhF8wkDeqBOHmWiomcn/UY858wEYAl+/Dpz53L2qHT9pU7Q+EVSTovgYogJ66WoNt7CoDkfh7zrb9vJZq7ojqskhVA6LUi9O4BhiI3Q==",
 "code": "GM00001",
 "description": "Call me!",
 "idMessage" : 3405
}

```

######Bound to Product

```json
{
 "idSecretClient" : "rtLtgs9/+XnHhJy/RFq+xTg+KnP2B9OjFaUqKaiU3rYjRjff1kcAxW1veBwboz2Vc5T28vvUXTi5nUes4asHoNJbQsbc7zLNAHirrI8ra6xMnU4bhF8wkDeqBOHmWiomcn/UY858wEYAl+/Dpz53L2qHT9pU7Q+EVSTovgYogJ66WoNt7CoDkfh7zrb9vJZq7ojqskhVA6LUi9O4BhiI3Q==",
 "code": "GP0001",
 "description": "block debit card",
 "productName" : "visa-9876"
}
```

####Response
```json
{
 "status": 200
}
```
 
 
 
