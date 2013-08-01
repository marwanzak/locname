function Controller() {
    function setUserCoords() {
        Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
        Titanium.Geolocation.distanceFilter = 10;
        Titanium.Geolocation.getCurrentPosition(function(e) {
            longi = e.coords.longitude;
            lati = e.coords.latitude;
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.main_top_view = Ti.UI.createView({
        top: "0",
        backgroundColor: "#006977",
        width: Ti.UI.FILL,
        height: "10%",
        id: "main_top_view"
    });
    $.__views.index.add($.__views.main_top_view);
    $.__views.main_logo = Ti.UI.createImageView({
        top: "10%",
        image: "/images/logo.png",
        width: "200dp",
        height: "40dp",
        id: "main_logo"
    });
    $.__views.index.add($.__views.main_logo);
    $.__views.seach_view = Ti.UI.createView({
        layout: "horizontal",
        height: "10%",
        top: "20%",
        id: "seach_view"
    });
    $.__views.index.add($.__views.seach_view);
    $.__views.left_search_view = Ti.UI.createView({
        left: "0",
        width: "70%",
        id: "left_search_view"
    });
    $.__views.seach_view.add($.__views.left_search_view);
    $.__views.main_search_text = Ti.UI.createTextField({
        width: "90%",
        right: "0",
        height: Ti.UI.FILL,
        id: "main_search_text"
    });
    $.__views.left_search_view.add($.__views.main_search_text);
    $.__views.right_search_view = Ti.UI.createView({
        right: "0",
        width: "30%",
        id: "right_search_view"
    });
    $.__views.seach_view.add($.__views.right_search_view);
    $.__views.search_but = Ti.UI.createImageView({
        image: "/images/search_but.png",
        left: "0",
        id: "search_but"
    });
    $.__views.right_search_view.add($.__views.search_but);
    $.__views.reg_loc_but = Ti.UI.createImageView({
        image: "/images/regnew_but.png",
        height: "10%",
        top: "5%",
        id: "reg_loc_but"
    });
    $.__views.index.add($.__views.reg_loc_but);
    $.__views.main_bottom_view = Ti.UI.createView({
        backgroundColor: "#F0E9EB",
        width: Ti.UI.FILL,
        height: "10%",
        id: "main_bottom_view"
    });
    $.__views.index.add($.__views.main_bottom_view);
    $.__views.step1_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        id: "step1_win"
    });
    $.__views.step1_win && $.addTopLevelView($.__views.step1_win);
    $.__views.__alloyId1 = Ti.UI.createView({
        top: "0",
        backgroundColor: "#006977",
        width: Ti.UI.FILL,
        height: "10%",
        id: "__alloyId1"
    });
    $.__views.step1_win.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        image: "/images/back_but.png",
        left: "10dp",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.new_top_label = Ti.UI.createLabel({
        color: "black",
        left: "50%",
        text: "Step 1",
        id: "new_top_label"
    });
    $.__views.__alloyId1.add($.__views.new_top_label);
    $.__views.new_pos_top_view = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "45%",
        layout: "vertical",
        id: "new_pos_top_view"
    });
    $.__views.step1_win.add($.__views.new_pos_top_view);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId3"
    });
    $.__views.new_pos_top_view.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "black",
        left: "5dp",
        width: "30%",
        text: "Country",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.country_text = Ti.UI.createTextField({
        width: "60%",
        id: "country_text"
    });
    $.__views.__alloyId3.add($.__views.country_text);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId5"
    });
    $.__views.new_pos_top_view.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "black",
        left: "5dp",
        width: "30%",
        text: "City",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.city_text = Ti.UI.createTextField({
        width: "60%",
        id: "city_text"
    });
    $.__views.__alloyId5.add($.__views.city_text);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId7"
    });
    $.__views.new_pos_top_view.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "black",
        left: "5dp",
        width: "30%",
        text: "Search word",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.pos_word_text = Ti.UI.createTextField({
        width: "60%",
        id: "pos_word_text"
    });
    $.__views.__alloyId7.add($.__views.pos_word_text);
    $.__views.get_place_but = Ti.UI.createImageView({
        image: "/images/get_place_but.png",
        top: "5dp",
        id: "get_place_but"
    });
    $.__views.new_pos_top_view.add($.__views.get_place_but);
    $.__views.new_pos_bottom_view = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "45%",
        layout: "vertical",
        id: "new_pos_bottom_view"
    });
    $.__views.step1_win.add($.__views.new_pos_bottom_view);
    $.__views.new_bottom_label = Ti.UI.createLabel({
        color: "#cc8316",
        top: "20%",
        text: "Register a LocName to Your current place",
        id: "new_bottom_label"
    });
    $.__views.new_pos_bottom_view.add($.__views.new_bottom_label);
    $.__views.check_pos = Ti.UI.createImageView({
        image: "/images/check_pos.png",
        top: "20%",
        id: "check_pos"
    });
    $.__views.new_pos_bottom_view.add($.__views.check_pos);
    $.__views.countries_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        id: "countries_win"
    });
    $.__views.countries_win && $.addTopLevelView($.__views.countries_win);
    $.__views.countries_scroll = Ti.UI.createScrollView({
        height: "90%",
        width: Ti.UI.FILL,
        id: "countries_scroll"
    });
    $.__views.countries_win.add($.__views.countries_scroll);
    $.__views.__alloyId9 = Ti.UI.createView({
        backgroundColor: "#F0E9EB",
        width: Ti.UI.FILL,
        height: "10%",
        id: "__alloyId9"
    });
    $.__views.countries_win.add($.__views.__alloyId9);
    $.__views.countries_back = Ti.UI.createButton({
        image: "/images/back_but.png",
        left: "10dp",
        id: "countries_back"
    });
    $.__views.__alloyId9.add($.__views.countries_back);
    $.__views.cities_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        id: "cities_win"
    });
    $.__views.cities_win && $.addTopLevelView($.__views.cities_win);
    $.__views.cities_scroll = Ti.UI.createScrollView({
        height: "90%",
        width: Ti.UI.FILL,
        id: "cities_scroll"
    });
    $.__views.cities_win.add($.__views.cities_scroll);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundColor: "#F0E9EB",
        width: Ti.UI.FILL,
        height: "10%",
        id: "__alloyId10"
    });
    $.__views.cities_win.add($.__views.__alloyId10);
    $.__views.cities_back = Ti.UI.createButton({
        image: "/images/back_but.png",
        left: "10dp",
        id: "cities_back"
    });
    $.__views.__alloyId10.add($.__views.cities_back);
    $.__views.step2_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        id: "step2_win"
    });
    $.__views.step2_win && $.addTopLevelView($.__views.step2_win);
    $.__views.__alloyId11 = Ti.UI.createView({
        top: "0",
        backgroundColor: "#006977",
        width: Ti.UI.FILL,
        height: "10%",
        id: "__alloyId11"
    });
    $.__views.step2_win.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        image: "/images/back_but.png",
        left: "10dp",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        color: "black",
        text: "Step 2",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.step2_map = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "70%",
        id: "step2_map"
    });
    $.__views.step2_win.add($.__views.step2_map);
    $.__views.step2_third_view = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "10%",
        backgroundColor: "gray",
        id: "step2_third_view"
    });
    $.__views.step2_win.add($.__views.step2_third_view);
    $.__views.step2_bottom_label = Ti.UI.createLabel({
        color: "black",
        id: "step2_bottom_label"
    });
    $.__views.step2_third_view.add($.__views.step2_bottom_label);
    $.__views.step2_bottom_view = Ti.UI.createView({
        id: "step2_bottom_view"
    });
    $.__views.step2_win.add($.__views.step2_bottom_view);
    $.__views.to_step3_but = Ti.UI.createImageView({
        image: "/images/to_step3.png",
        id: "to_step3_but"
    });
    $.__views.step2_bottom_view.add($.__views.to_step3_but);
    $.__views.step3_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        id: "step3_win"
    });
    $.__views.step3_win && $.addTopLevelView($.__views.step3_win);
    $.__views.__alloyId14 = Ti.UI.createView({
        top: "0",
        backgroundColor: "#006977",
        width: Ti.UI.FILL,
        height: "10%",
        id: "__alloyId14"
    });
    $.__views.step3_win.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createImageView({
        image: "/images/back_but.png",
        left: "10dp",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "black",
        left: "50%",
        text: "Step 3",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.step3_top_view = Ti.UI.createView({
        height: "70%",
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "step3_top_view"
    });
    $.__views.step3_win.add($.__views.step3_top_view);
    $.__views.__alloyId17 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId17"
    });
    $.__views.step3_top_view.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        color: "black",
        left: "5dp",
        width: "30%",
        text: "LocName",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.step3_name_text = Ti.UI.createTextField({
        width: "60%",
        id: "step3_name_text"
    });
    $.__views.__alloyId17.add($.__views.step3_name_text);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId19"
    });
    $.__views.step3_top_view.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        color: "black",
        left: "5dp",
        width: "30%",
        text: "Catagory",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.step3_cat_text = Ti.UI.createTextField({
        width: "60%",
        id: "step3_cat_text",
        editable: "false"
    });
    $.__views.__alloyId19.add($.__views.step3_cat_text);
    $.__views.__alloyId21 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId21"
    });
    $.__views.step3_top_view.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        color: "black",
        left: "5dp",
        width: "30%",
        text: "Part",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.step3_pp_text = Ti.UI.createTextField({
        width: "60%",
        id: "step3_pp_text",
        editable: "false"
    });
    $.__views.__alloyId21.add($.__views.step3_pp_text);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "horizontal",
        height: "100",
        top: "5dp",
        id: "__alloyId23"
    });
    $.__views.step3_top_view.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "black",
        left: "5dp",
        width: "30%",
        text: "Address",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.step3_address_text = Ti.UI.createTextArea({
        width: "60%",
        height: "100",
        id: "step3_address_text",
        editable: "false"
    });
    $.__views.__alloyId23.add($.__views.step3_address_text);
    $.__views.step3_bottom_view = Ti.UI.createView({
        height: "20%",
        width: Ti.UI.FILL,
        id: "step3_bottom_view"
    });
    $.__views.step3_win.add($.__views.step3_bottom_view);
    $.__views.to_step4_but = Ti.UI.createImageView({
        image: "/images/to_final.png",
        id: "to_step4_but"
    });
    $.__views.step3_bottom_view.add($.__views.to_step4_but);
    $.__views.step4_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        id: "step4_win"
    });
    $.__views.step4_win && $.addTopLevelView($.__views.step4_win);
    $.__views.cat_win = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "black",
        opacity: "0.5",
        id: "cat_win"
    });
    $.__views.cat_win && $.addTopLevelView($.__views.cat_win);
    $.__views.cat_view = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: "2dp",
        borderRadius: "5dp",
        top: "25%",
        width: "80%",
        height: Ti.UI.SIZE,
        id: "cat_view"
    });
    $.__views.cat_win.add($.__views.cat_view);
    $.__views.personal_label = Ti.UI.createLabel({
        color: "black",
        text: "Personal",
        id: "personal_label"
    });
    $.__views.cat_view.add($.__views.personal_label);
    $.__views.business_label = Ti.UI.createLabel({
        color: "black",
        text: "Business",
        id: "business_label"
    });
    $.__views.cat_view.add($.__views.business_label);
    $.__views.event_label = Ti.UI.createLabel({
        color: "black",
        text: "Event",
        id: "event_label"
    });
    $.__views.cat_view.add($.__views.event_label);
    $.__views.pp_win = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "black",
        opacity: "0.5",
        id: "pp_win"
    });
    $.__views.pp_win && $.addTopLevelView($.__views.pp_win);
    $.__views.pp_view = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: "2dp",
        borderRadius: "5dp",
        top: "25%",
        width: "80%",
        height: Ti.UI.SIZE,
        id: "pp_view"
    });
    $.__views.pp_win.add($.__views.pp_view);
    $.__views.public_label = Ti.UI.createLabel({
        color: "black",
        text: "Public",
        id: "public_label"
    });
    $.__views.pp_view.add($.__views.public_label);
    $.__views.private_label = Ti.UI.createLabel({
        color: "black",
        text: "Private",
        id: "private_label"
    });
    $.__views.pp_view.add($.__views.private_label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var fb = require("facebook");
    fb.appid = "491428974265133";
    fb.permissions = [ "email" ];
    var longi;
    var lati;
    var lat_delta;
    var long_delta;
    var is_set = false;
    var user_id;
    $.step4_win.add(fb.createLoginButton({
        top: 50,
        style: fb.BUTTON_STYLE_WIDE
    }));
    fb.addEventListener("login", function(e) {
        e.success && fb.requestWithGraphPath("me", {}, "GET", function(evn) {
            if (evn.success) {
                alert(evn.result);
                var data = JSON.parse(evn.result);
                var xhr1 = Titanium.Network.createHTTPClient();
                xhr1.open("GET", "http://www.locname.com/getjson/getAllUsers");
                xhr1.send();
                xhr1.onload = function() {
                    is_set = false;
                    var get_data = JSON.parse(this.responseText);
                    for (var i = 0; get_data.length > i; i++) if (data.email == get_data[i].Email) {
                        is_set = true;
                        user_id = get_data[i].Id;
                    }
                    if (is_set) {
                        var xhr2 = Titanium.Network.createHTTPClient();
                        xhr2.open("POST", "http://www.locname.com/getjson/getUserById");
                        xhr2.send({
                            user_id: user_id
                        });
                        xhr2.onload = function() {
                            alert("exist");
                            alert(this.responseText);
                        };
                    } else {
                        var xhr2 = Titanium.Network.createHTTPClient();
                        xhr2.open("POST", "http://www.locname.com/insertjson/insertUser");
                        xhr2.send({
                            firstname: data.first_name,
                            lastname: data.last_name,
                            email: data.email,
                            password: null,
                            gender: data.gender,
                            birth: null,
                            photo: null
                        });
                        xhr2.onload = function() {
                            alert(this.responseText);
                        };
                    }
                };
            } else evn.error ? alert(evn.error) : alert("Unknown response");
        });
    });
    fb.addEventListener("logout", function() {
        alert("Logged out");
    });
    $.reg_loc_but.addEventListener("click", function() {
        $.step1_win.open();
    });
    $.get_place_but.addEventListener("click", function() {
        $.step2_win.open();
    });
    $.countries_back.addEventListener("click", function() {
        $.countries_win.close();
    });
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
            if ("OK" == data.status) {
                mapview.addAnnotation(Titanium.Map.createAnnotation({
                    image: "/images/ann.png",
                    animate: true,
                    myid: 2,
                    title: data.results[0].formatted_address,
                    latitude: data.results[0].geometry.location.lat,
                    longitude: data.results[0].geometry.location.lng
                }));
                mapview.setRegion({
                    latitude: data.results[0].geometry.location.lat,
                    longitude: data.results[0].geometry.location.lng
                });
            } else alert("No results");
        };
    });
    setUserCoords();
    mapview = Titanium.Map.createView({
        mapType: Titanium.Map.STANDARD_TYPE,
        animate: true,
        regionFit: true,
        userLocation: true,
        region: {
            latitude: lati,
            longitude: longi,
            latitudeDelta: .01,
            longitudeDelta: .01
        }
    });
    $.step2_map.add(mapview);
    mapview.addEventListener("regionChanged", function(e) {
        lati = e.latitude;
        longi = e.longitude;
        lat_delta = e.latitudeDelta;
        long_delta = e.longitudeDelta;
    });
    mapview.addEventListener("longpress", function(evt) {
        mapview.removeAllAnnotations();
        mapview.actualRegion || mapview.region;
        var widthInPixels = mapview.rect.width;
        var heightInPixels = mapview.rect.height;
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
                image: "/images/ann.png",
                animate: true,
                myid: 2,
                title: result.results[0].formatted_address,
                latitude: lat,
                longitude: lon
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;