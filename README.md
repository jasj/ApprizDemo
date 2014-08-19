Appriz Mobile API
===================================
Disclaimer:
This software is designed to be used with the "Appriz Cloud Services (ACS)", any other use is prohibited. The use of this API is forbidden for people without permission.

===================================
###How use:
**Rest API:** This API is consumed using POST protocols, so you could use any REST client. **Why POST?** Simple,  cause  the target of Appriz is to expose financial information through the web, we must keep all the information encrypted and take advantage of the SSL channels, avoiding to show information such as Client's ID into the URL.

**Using Phonegap**: Using jQuery to consume the API,  you could invocke any methods as it is shown below:
> $.post(API_URL,method_name,request_data function(data){});

**Using Andorid SDK**:
[see this link](http://hmkcode.com/android-parsing-json-data/)

**Using xCode**
[see this link](http://spring.io/guides/gs/consuming-rest-ios/)

###Change Logs:
  1. [First Commit](changelogs/2014-07-18.md)

###Methods Availble:
  1. [bindClient](doc/bindClient.md)
  2. [getMessagesByClient](doc/getMessagesByClient.md)
  3. [getRulesByProduct](doc/getRulesByProduct.md)
  4. [setRulesByProduct](doc/setRulesByProduct.md)
  5. [getTimePeriods](doc/getTimePeriods.md)
  6. [getProductsByClient](doc/getProductsByClient.md)
  7. [getServicesByProduct](doc/getServicesByProduct.md)
  8. [sendServiceRequest](doc/sendServiceRequest.md)

###Errors:
  1. [Errors Codes](doc/error_codes.md)

