//sphone bring
	
	//$('#lab_input_uuid').val(device.uuid);
	
	 // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
		try{
			
			
			 var element = document.getElementById('deviceProperties');
        element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                            'Device Cordova: '  + device.cordova  + '<br />' +
                            'Device Platform: ' + device.platform + '<br />' +
                            'Device UUID: '     + device.uuid     + '<br />' +
                            'Device Version: '  + device.version  + '<br />';

		}catch(error){alert(error);}
	
		pushNotification = window.plugins.pushNotification;
		
		if ( device.platform == 'android' || device.platform == 'Android' )
		{
			pushNotification.register(
				successHandler,
				errorHandler, {
					"senderID":"125107308805",
					"ecb":"onNotificationGCM"
				});
		}
		else
		{
			pushNotification.register(
				tokenHandler,
				errorHandler, {
					"badge":"true",
					"sound":"true",
					"alert":"true",
					"ecb":"onNotificationAPN"
				});
		}
		
        var element = document.getElementById('deviceProperties');

       
    }

	
	
	// result contains any message sent from the plugin call
	function successHandler (result) {
    console.log('result = ' + result);
}

// result contains any error description text returned from the plugin call
function errorHandler (error) {
    alert('error = ' + error);
}


	
	
	//lab functions. Simulate  bank WS
	function labProducts(){
	var prd_lab_tmp = {};
		$('#lab_products tbody tr').each(function(){
			$(this).find('input').replaceWith($(this).find('input').val());
			$(this).find('select').replaceWith($(this).find('option:selected').val());
			
			prd_lab_tmp[$(this).find('td').eq(0).html()+""] = $(this).find('td').eq(1).html();
			
			
		});
		console.log(JSON.stringify(prd_lab_tmp));
		
		return prd_lab_tmp;
	}
	$('#btn_bindClient').click(function(){
	//		 $.jStorage.set('lab_div', btoa($('#lab_div').html()));
	
			BindClient($('#lab_input_id').val(),$('#lab_input_first').val(),$('#lab_input_lastname').val(),$('#lab_input_uuid').val(),eregid,labProducts());
		});
		

		
	// Android
function onNotificationGCM(e) {
    $("#app-status-ul").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');

    switch( e.event )
    {
    case 'registered':
        if ( e.regid.length > 0 )
        {
			eregid = e.regid
            $("#app-status-ul").append('<li>REGISTERED -> REGID:' + e.regid + "</li>");
            // Your GCM push server needs to know the regID before it can push to this device
            // here is where you might want to send it the regID for later use.
            console.log("regID = " + e.regid);
        }
    break;

    case 'message':
		callNewMSG();
		
        // if this flag is set, this notification happened while we were in the foreground.
        // you might want to play a sound to get the user's attention, throw up a dialog, etc.
        if ( e.foreground )
        {
            $("#app-status-ul").append('<li>--INLINE NOTIFICATION--' + '</li>');

            // if the notification contains a soundname, play it.
            var my_media = new Media("/android_asset/www/"+e.soundname);
            my_media.play();
        }
        else
        {  // otherwise we were launched because the user touched a notification in the notification tray.
            if ( e.coldstart )
            {
                $("#app-status-ul").append('<li>--COLDSTART NOTIFICATION--' + '</li>');
            }
            else
            {
                $("#app-status-ul").append('<li>--BACKGROUND NOTIFICATION--' + '</li>');
            }
        }

        $("#app-status-ul").append('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
        $("#app-status-ul").append('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
    break;

    case 'error':
        $("#app-status-ul").append('<li>ERROR -> MSG:' + e.msg + '</li>');
    break;

    default:
        $("#app-status-ul").append('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
    break;
  }
}