<script type="text/javascript">
	function post(path, params, method) {
	    method = method || "post";
	    var form = document.createElement("form");
	    form.setAttribute("method", method);
	    form.setAttribute("action", path);
	    for(var key in params) {
	        if(params.hasOwnProperty(key)) {
	            var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", params[key]);

	            form.appendChild(hiddenField);
	         }
	    }
	    document.body.appendChild(form);
	    form.submit();
	}
	window.onload=function(){
		try {
			if(!!window.chrome) {
				throw 'sorry, Chrome doesn\'t support geolocation on insecure origins';
			}
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(fillInPosition);
			}
		}
		catch(e) {
			alert('An SOS message has been sent without GPS coordinates');
		}
	}
	function fillInPosition(position) {
		alert('An SOS message has been sent');
	}
</script>
