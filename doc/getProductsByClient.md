getProductsByClient
=====================
Get the products of a client

##Request Data
property  | type | required | comments
----------|------|----------|---------
idSecretClient|string|yes|This is the value given by the bindClient method.

##Response Data

  property | type | comments
 ----------|------|---------
products|productObject|A dictionary with all the products
status|integer| 200: OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| Use a JSON.stringify. ONLY FOR STATUS 452.

####productObject
> *product_name*:*product_type*

##Examples

####Request
```json
{ 
  "idSecretClient" : "rtLtgs9/+XnHhJy/RFq+xTg+KnP2B9OjFaUqKaiU3rYjRjff1kcAxW1veBwboz2Vc5T28vvUXTi5nUes4asHoNJbQsbc7zLNAHirrI8ra6xMnU4bhF8wkDeqBOHmWiomcn/UY858wEYAl+/Dpz53L2qHT9pU7Q+EVSTovgYogJ66WoNt7CoDkfh7zrb9vJZq7ojqskhVA6LUi9O4BhiI3Q=="
}
```

####Response
```json
{ 
  "products":{
    "AMEX-6545" : "CREDIT CARD",
    "VISA-9876" : "DEBIT CARD"
  },
  "status": 200
}
```
