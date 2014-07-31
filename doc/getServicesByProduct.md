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
services|servicesObject|a dictionary with all the services
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

####servicesObject
> *service_code* : *description*
