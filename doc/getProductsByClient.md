getProductsByClient
=====================
Get the products of a client

##Request Data
property  | type | required | comments
----------|------|----------|---------
idSecretClient|string|yes|This is the value given by the bindClient method.

##Response Data

  property | type | command
 ----------|------|---------
products|productObject|a dictionary with all the products
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

####productObject
> *product_name*:*product_type*
