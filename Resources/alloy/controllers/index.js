function Controller() {
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
    $.__views.new_position_win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        layout: "vertical",
        id: "new_position_win"
    });
    $.__views.new_position_win && $.addTopLevelView($.__views.new_position_win);
    $.__views.main_top_view = Ti.UI.createView({
        top: "0",
        backgroundColor: "#006977",
        width: Ti.UI.FILL,
        height: "10%",
        id: "main_top_view"
    });
    $.__views.new_position_win.add($.__views.main_top_view);
    $.__views.__alloyId1 = Ti.UI.createImageView({
        image: "/images/back_but.png",
        left: "10dp",
        id: "__alloyId1"
    });
    $.__views.main_top_view.add($.__views.__alloyId1);
    $.__views.new_top_label = Ti.UI.createLabel({
        left: "50%",
        text: "Step 1",
        id: "new_top_label"
    });
    $.__views.main_top_view.add($.__views.new_top_label);
    $.__views.new_pos_top_view = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "45%",
        layout: "vertical",
        id: "new_pos_top_view"
    });
    $.__views.new_position_win.add($.__views.new_pos_top_view);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId2"
    });
    $.__views.new_pos_top_view.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        left: "5dp",
        color: "black",
        width: "30%",
        text: "Country",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.country_text = Ti.UI.createTextField({
        width: "60%",
        id: "country_text"
    });
    $.__views.__alloyId2.add($.__views.country_text);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId4"
    });
    $.__views.new_pos_top_view.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: "5dp",
        color: "black",
        width: "30%",
        text: "City",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.city_text = Ti.UI.createTextField({
        width: "60%",
        id: "city_text"
    });
    $.__views.__alloyId4.add($.__views.city_text);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "horizontal",
        height: "20%",
        top: "5dp",
        id: "__alloyId6"
    });
    $.__views.new_pos_top_view.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        left: "5dp",
        color: "black",
        width: "30%",
        text: "Search word",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.pos_word_text = Ti.UI.createTextField({
        width: "60%",
        id: "pos_word_text"
    });
    $.__views.__alloyId6.add($.__views.pos_word_text);
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
    $.__views.new_position_win.add($.__views.new_pos_bottom_view);
    $.__views.new_bottom_label = Ti.UI.createLabel({
        top: "20%",
        color: "#cc8316",
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
    $.__views.__alloyId8 = Ti.UI.createView({
        backgroundColor: "#F0E9EB",
        width: Ti.UI.FILL,
        height: "10%",
        id: "__alloyId8"
    });
    $.__views.countries_win.add($.__views.__alloyId8);
    $.__views.countries_back = Ti.UI.createButton({
        image: "/images/back_but.png",
        left: "10dp",
        id: "countries_back"
    });
    $.__views.__alloyId8.add($.__views.countries_back);
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
    $.__views.__alloyId9 = Ti.UI.createView({
        backgroundColor: "#F0E9EB",
        width: Ti.UI.FILL,
        height: "10%",
        id: "__alloyId9"
    });
    $.__views.cities_win.add($.__views.__alloyId9);
    $.__views.cities_back = Ti.UI.createButton({
        image: "/images/back_but.png",
        left: "10dp",
        id: "cities_back"
    });
    $.__views.__alloyId9.add($.__views.cities_back);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.reg_loc_but.addEventListener("click", function() {
        $.new_position_win.open();
    });
    $.index.open();
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
            "OK" == data.status ? alert(data.results[0].geometry.location.lat) : alert("No results");
        };
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;