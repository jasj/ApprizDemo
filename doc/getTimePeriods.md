getTimePeriods
==========================
Get all periods defined by the entity

##Request Data
 property  | type | required | comments
 ----------|------|----------|---------
 secretKey |string|yes| this key will be provided by Appriz
 language|string| | **Default: en**<br>Values:<br> en : English <br> es : Spanish
 
##Response Data
  property | type | comments
 ----------|------|---------
periods|timeObject|Times defined by the entity
status|integer| 200 : OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| use a JSON.stringify. ONLY FOR STATUS 452.

####timeObject
 property | type | comments
----------|------|---------
idTime|integer| Identification of the period
amount|integer| Amount of time
unit|string| this value could be<br>Minutes(s)<br>Hours(s)<br>Day(s)

