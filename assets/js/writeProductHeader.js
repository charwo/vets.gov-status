
function writeProductDetails() {
    var URL = window.location.href;
    var name = URL.substring(URL.indexOf("?") + 1).replace(/_/g, ' ');
    name = "Product: " + name;
    $("#product_heading").append(name);
}