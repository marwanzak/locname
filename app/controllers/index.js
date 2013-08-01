var fb = require('facebook');
fb.appid = "491428974265133";
fb.permissions = ['email'];
var longi;
var lati;
var lat_delta;
var long_delta;
var is_set = false;
var user_id;
$.step4_win.add(fb.createLoginButton({
	top : 50,
	style : fb.BUTTON_STYLE_WIDE
}));

fb.addEventListener('login', function(e) {
	if (e.success) {
		fb.requestWithGraphPath('me', {}, 'GET', function(evn) {
			if (evn.success) {
				alert(evn.result);
				var data = JSON.parse(evn.result);
				var xhr1 = Titanium.Network.createHTTPClient();
				xhr1.open("GET", "http://www.locname.com/getjson/getAllUsers");
				xhr1.send();
				xhr1.onload = function() {
					is_set = false;
					var get_data = JSON.parse(this.responseText);
					for (var i = 0; i < get_data.length; i++) {
						if (data.email == get_data[i].Email) {
							is_set = true;
							user_id = get_data[i].Id;
						}
					}
					if (!is_set) {
						var xhr2 = Titanium.Network.createHTTPClient();
						xhr2.open("POST", "http://www.locname.com/insertjson/insertUser");
						xhr2.send({
							"firstname" : data.first_name,
							"lastname" : data.last_name,
							"email" : data.email,
							"password" : "null",
							"gender" : data.gender,
							"birth" : "null",
							"photo" : "null"
						});
						xhr2.onload = function() {
							//alert(this.responseText);
						}
					} else {
						var xhr2 = Titanium.Network.createHTTPClient();
						xhr2.open("POST", "http://www.locname.com/getjson/getUserById");
						xhr2.send({
							"user_id" : user_id
						});
						xhr2.onload = function() {
							//alert("exist");
							//alert(this.responseText);
						}
					}
				};
			} else if (evn.error) {
				alert(evn.error);
			} else {
				alert('Unknown response');
			}
		});
	}
});
fb.addEventListener('logout', function(e) {
	alert('Logged out');
});

$.reg_loc_but.addEventListener("click", function() {
	$.step1_win.open();
});

$.get_place_but.addEventListener("click", function() {
	$.step2_win.open();
});

//close countries windows on clicking back button
$.countries_back.addEventListener("click", function() {
	$.countries_win.close();
});

//close cities windows on clicking back button
$.cities_back.addEventListener("click", function() {
	$.cities_win.close();
});

$.get_place_but.addEventListener("click", function() {
	var country = $.country_text.getValue();
	var city = $.city_text.getValue();
	var word = $.pos_word_text.getValue();
	var xhr1 = Titanium.Network.createHTTPClient();
	xhr1.open("GET", "http://maps.googleapis.com/maps/api/geocode/json?address=" + country + "," + city + "," + word + "&sensor=false");
	xhr1.send();
	xhr1.onload = function() {
		var data = JSON.parse(this.responseText);
		if (data.status == "OK") {
			mapview.addAnnotation(Titanium.Map.createAnnotation({
				image : "/images/ann.png",
				animate : true,
				myid : 2,
				title : data.results[0].formatted_address,
				latitude : data.results[0].geometry.location.lat,
				longitude : data.results[0].geometry.location.lng
			}));
			mapview.setRegion({
				latitude : data.results[0].geometry.location.lat,
				longitude : data.results[0].geometry.location.lng

			})
		} else
			alert("No results");
	}
});

setUserCoords();

mapview = Titanium.Map.createView({
	mapType : Titanium.Map.STANDARD_TYPE,
	animate : true,
	regionFit : true,
	userLocation : true,
	region : {
		latitude : lati,
		longitude : longi,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	},
});

$.step2_map.add(mapview);

function setUserCoords() {
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 10;
	Titanium.Geolocation.getCurrentPosition(function(e) {
		longi = e.coords.longitude;
		lati = e.coords.latitude;
	});
}

function addAnnotion(lat, lng, antitle, adsubtitle, mapv) {
	var anno = Titanium.Map.createAnnotation({
		latitude : lat,
		longitude : lng,
		title : antitle,
		subtitle : ansubtitle,
		animate : true,
		image : "/images/ann.png"
	});
	mapv.add(anno);
}

mapview.addEventListener("regionChanged", function(e) {
	lati = e.latitude;
	longi = e.longitude;
	lat_delta = e.latitudeDelta;
	long_delta = e.longitudeDelta;
});

mapview.addEventListener('longpress', function(evt) {
	mapview.removeAllAnnotations();
	var region = mapview.actualRegion || mapview.region;
	var widthInPixels = mapview.rect.width;
	var heightInPixels = mapview.rect.height;
	// should invert because of the pixel reference frame
	heightDegPerPixel = -lat_delta / heightInPixels;
	widthDegPerPixel = long_delta / widthInPixels;

	var lat = (evt.y - heightInPixels / 2) * heightDegPerPixel + lati;
	var lon = (evt.x - widthInPixels / 2) * widthDegPerPixel + longi;
	var xhr1 = Titanium.Network.createHTTPClient();
	xhr1.open("GET", "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&sensor=false");
	xhr1.send();
	xhr1.onload = function() {
		var result = JSON.parse(this.responseText);
		mapview.addAnnotation(Titanium.Map.createAnnotation({
			image : "/images/ann.png",
			animate : true,
			myid : 2,
			title : result.results[0].formatted_address,
			latitude : lat,
			longitude : lon
		}));
		$.step3_address_text.setValue(result.results[0].formatted_address);
	};

});

$.cat_win.addEventListener("click", function() {
	$.cat_win.close();
});

$.pp_win.addEventListener("click", function() {
	$.pp_win.close();
});

$.step3_cat_text.addEventListener("click", function() {
	$.cat_win.open();
});

$.step3_pp_text.addEventListener("click", function() {
	$.pp_win.open();
});

$.public_label.addEventListener("click", function() {
	$.step3_pp_text.setValue("Public");
});

$.private_label.addEventListener("click", function() {
	$.step3_pp_text.setValue("Private");
});

$.personal_label.addEventListener("click", function() {
	$.step3_cat_text.setValue("Personal");
});

$.business_label.addEventListener("click", function() {
	$.step3_cat_text.setValue("Business");
});

$.event_label.addEventListener("click", function() {
	$.step3_cat_text.setValue("Event");
});
$.to_step3_but.addEventListener("click", function() {
	$.step3_win.open();
});
$.to_step4_but.addEventListener("click", function() {
	$.step4_win.open();
});

$.index.open();

