getMessagesByClient
=======================
This method brings all the messages sent to an specific customer that were not yet delivered.


##Request Data
property  | type | required | comments
----------|------|----------|---------
idSecretClient|string|yes|This is the value given by the bindClient method.
filter|arrayOfInt| |Select type of messages to bring up. <br>**default all**.<br> 1: My Alerts<br> 2: Fraud Warnings<br> 3: Promotions <br> 4: Notifications

##response Data

property | type | comments
----------|------|---------
idMessage|string|Unique message identifier in the whole entity 
type|integer| 1: My Alert<br> 2: Fraud Warning<br> 3: Promotion <br> 4: Notification <br> 5: Service  
shortMessage|string|Subject of the message
longMessage|string|Body of the message
postdate|datetime|Timestamp
services|servicesObject|Services available [see below]()
appends|ArrayOfAppendsObject|For an example of a transaction information [see below]()	
status|integer| 200: OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

####servicesObject
	
> *service_code* : *description*

####appendsObject
> *field* : *value*

##Examples

####Request

```json
{
"idSecretClient": "rtLtgs9/+XnHhJy/RFq+xTg+KnP2B9OjFaUqKaiU3rYjRjff1kcAxW1veBwboz2Vc5T28vvUXTi5nUes4asHoNJbQsbc7zLNAHirrI8ra6xMnU4bhF8wkDeqBOHmWiomcn/UY858wEYAl+/Dpz53L2qHT9pU7Q+EVSTovgYogJ66WoNt7CoDkfh7zrb9vJZq7ojqskhVA6LUi9O4BhiI3Q=="
}
```

####Response
```json
{
    "idMessage" : 3045,
    "type" : 1,
    "shortMessage": "A transaction was made with your AMEX-7540",
    "longMessage" : "Dear Smith, a transaction was made with your AMEX-7540 for an amount of US$3000.",
    "postdate" :  1407060641267,
    "appends" : [
    	{
	    	"Amount" : "3000",
	    	"Currency" : "USD",
	    	"business": "McDonald's"
	 }
    ],
    "satus": 200
}
```
