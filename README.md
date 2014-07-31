ApprizDemo
===================================
Disclaimer:
This software is designed to be used with the "Appriz Cloud Services(ACS)", any other use is prohibited. Using this API is also forbidden for people without specific permission.

===================================
###How use:
**Rest API:** This API is consumed using POST protocols, so you could use any REST clients to use it. **Why POST?** Simple, as the target of Appriz is to expose financial  information trough  the web , we must to keep all the information encrypted and take advantage  of the SSL channels, avoiding show information such as Client's ID into the URL.

**Using Phonegap**: Using jQuery to consume the API,  you could invocke method as is shown below:
> $.post(API_URL,method_name,request_data function(data){});

**Using Andorid SDK**:

**Using xCode**

###Change Logs:
  1. [First Commit](changelogs/2014-07.18.md)

###Methos Availbles:
  1. [bindClient](docs/bindClient.md)
  2. [getMessagesByClient]()
  3. [getRulesByProduct]()
  4. [setRulesByProduct]()
  5. [getTimePeriods]()
  6. [getProductsByClient]()
  7. [getServicesByProduct]()
  8. [sendServiceRequest]()

###Errors:
  1. [Errors Codes]()

