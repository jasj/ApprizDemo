sendServiceRequest
========================

##Request Data
This service is used by the client to request an entity's service. 

 
 property  | type | required | comments
-----------|------|----------|---------
 idSecretClient|string|yes|This is the value given by the bindClient method.
 code|string|string|yes|Code that use the entity to recognize the service.
 description|string|yes|Description of the service
 idMessage|string| |Id of the message bound to the service
 productName|string| |Product name that is bound to the service.
 
##Response Data

  property | type | command
 ----------|------|---------
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.
 
 
 
