getMessagesByClient
=======================
This service read from the old Messaging platform and return it's records according with the new format. Also this module 
filter those messages that comes from other Entities. 

##Request Data
property  | type | required | comments
----------|------|----------|---------
idSecretClient|string|yes|This is the value given by the bindClient method.

##response Data

property | type | comments
----------|------|---------
idMessage|string|Unique message identifier in the whole the entity 
type|integer| 1: My Alert<br> 2 : Fraud Warning<br> 3 : Promotion <br> 4: Notification <br> 5: Service  
shortMessage|string|Subject of the message
longMessage|string|body of the message
postdate|datetime|timestamp
services|servicesObject|Services available [see below]()
appends|appendsObject|For example transaccition information [see below]()	
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

####servicesObject
	
> *service_code* : *description*

####appendsObject
> *field* : *value*
