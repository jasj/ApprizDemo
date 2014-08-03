getServicesByProduct
========================
Get all services available for a specific product


##Request Data
property  | type | required | comments
----------|------|----------|---------
idSecretClient|string|yes|This is the value given by the bindClient method.
productName|string|yes| Name of the product

##Response Data
property | type | comments
----------|------|---------
services|servicesObject|A dictionary with all the services
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

####servicesObject
> *service_code* : *description*

##Examples

####Request
```json
{
  "idSecretClient" : "rtLtgs9/+XnHhJy/RFq+xTg+KnP2B9OjFaUqKaiU3rYjRjff1kcAxW1veBwboz2Vc5T28vvUXTi5nUes4asHoNJbQsbc7zLNAHirrI8ra6xMnU4bhF8wkDeqBOHmWiomcn/UY858wEYAl+/Dpz53L2qHT9pU7Q+EVSTovgYogJ66WoNt7CoDkfh7zrb9vJZq7ojqskhVA6LUi9O4BhiI3Q==",
  "productName": "Visa-9876"
}
```

####Response

```json
{
  "GP001" : "Block my debit card",
  "GP002" : "Send me the Account Statement:
}
```
