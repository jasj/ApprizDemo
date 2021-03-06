getTimePeriods
==========================
Get all periods defined by the entity

##Request Data
 property  | type | required | comments
 ----------|------|----------|---------
 secretKey |string|yes| This key will be provided by Appriz
 language|string| | Language of the unit text<br>**Default: en**<br>Values:<br> en: English <br> es: Spanish
 
##Response Data
  property | type | comments
 ----------|------|---------
periods|timeObject|Times defined by the entity
status|integer| 200: OK<br> 452: Request data missed <br> 506: Internal Error due invalid request data
error|object| Use a JSON.stringify. ONLY FOR STATUS 452.

####timeObject
 property | type | comments
----------|------|---------
idTime|integer| Identification of the time
amount|integer| Amount of the transaction
unit|string| This value could be<br>Minutes(s)<br>Hours(s)<br>Day(s)

##Examples

####Request
```json
{
 "secretKey": "53E9DD3F-3891-476B-B0BD-039E4CE87C79",
}
```

####Response
```json
{
 "periods" : [
  {
    "idTime": 1,
    "amount":  10,
    "unit": "Minutes(s)"
  },
  {
    "idTime": 2,
    "amount":  30,
    "unit": "Minutes(s)"
  },
  {
    "idTime": 4,
    "amount":  12,
    "unit": "Hours(s)"
  },
  {
    "idTime": 1,
    "amount":  10,
    "unit": "Day(s)"
  }
 ],
 "status" 200
}
```

