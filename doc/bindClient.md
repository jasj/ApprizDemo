bindClient Method
================================

This method bind a client with the ACS, and returns a secret identification that should be used to consume the others services of the API.

##Request Data
 property  | type | required | comments
 ----------|------|----------|---------
 secretKey |string|yes|This key will be provided by Appriz
identification|string|yes|Identification used by the entity to know who is the customer.
firstName|string|yes|Customer first name
lastName|string|yes|Customer Lastname
nationality|string| | The API supports this entry but doesn´t do anything with it
sex|enum| |Values: F or M.  The API supports this entry but doesn´t do anything with it
birthDate|date| |Use a timestamp format. The API supports this entry but doesn´t do anything with it
residence|string| |The API supports this entry but doesn´t do anything with it
uuid|string|yes|Universally unique identifier
regId|string|yes|key used to receive "push notifications" 
products|productObject|yes|[see details below]()

####productObject 
the products must be given by an associative array that needs to follow the next structure
> *product_name*:*product_type*

##Response Data

  property | type | comments
 ----------|------|---------
idSecretClient|string|secret identification 
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

##Examples
####Request

```json
{
    "secretKey": "53E9DD3F-3891-476B-B0BD-039E4CE87C79",
    "identification": "123340-3434",
    "firstName": "John"
    "lastName": "Smith",
    "uuid": "df300345ab",
    "regId": "APK0930d090c9453af09bd09e09a09f8323034a",
    "products": {
        "AMEX-7854": "CREDIT CARD",
        "VISA-9876": "DEBID CARD"
    }
}
```

####Response
```json
{
  "idSecretClient": "rtLtgs9/+XnHhJy/RFq+xTg+KnP2B9OjFaUqKaiU3rYjRjff1kcAxW1veBwboz2Vc5T58vvUXTi5nUes4asHoNJbQsbc7zLNAHirrI8ra6xMnU4bhF8wkDeqBOHmWiomcn/UY858fEYAl+/Dpz53R2qHT9pU7Q+EVSTovgYogJ66WoNt7CoDkfh7zrb9vJZq7ojqskhVA6LUi9O4BhiI3Q==",
  "status": 200
}
```
