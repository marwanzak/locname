$.reg_loc_but.addEventListener("click", function() {
	$.new_position_win.open();
});
$.index.open();

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
			alert(data.results[0].geometry.location.lat);
			//for (var i = 0; i < data.results.length; i++) {
			//		alert(data.results[i].geometry.location.lat);
			//}
		} else
			alert("No results");

	}
});
