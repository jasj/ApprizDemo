bindClient Metod
================================

This method bind a client with the ACS, and it´s return a secret identification that should be used for consume the others services of the API.

 property  | type | required | comments
 ----------|------|----------|---------
 secretKey |string|yes| this key will be provided by Appriz
identification|string|yes|Identification used by the entity to know who is the custumer.
firstName|string|yes|Custumer first name
lastName|string|yes|Custumer Lastname
nationality|string| | The API support this entry but don´t do anything with it
sex|enum| |Values: F or M.  The API support this entry but don´t do anything with it
birthDate|date| |Use a timestamp format. The API support this entry but don´t do anything with it
residence|string| |The API support this entry but don´t do anything with it
uuid|string|yes|Universally unique identifier
regId|string|yes| key used for receive "push notifications" 
products|productObject|yes|[see details below]()

###productObject 
the products are given by an associative array that must to follow the next structure
> *productName*:*productType*


