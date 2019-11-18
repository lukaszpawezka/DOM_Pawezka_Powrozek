function create_append_to_nav() {
    var newItem = document.createElement("LI");
    var textNode = document.createTextNode("Append\n");
    newItem.appendChild(textNode);
    document.getElementById("navigation").appendChild(textNode);
}

function insert_to_nav() {
    var newItem = document.createElement("LI");
    var textNode = document.createTextNode("Insert");
    newItem.appendChild(textNode);
    var list = document.getElementById("navigation");
    list.insertBefore(newItem, list.childNodes[0]);
}

function replace_in_nav() {
    var newItem = document.createElement("LI");
    var textNode = document.createTextNode("\nReplace");
    newItem.appendChild(textNode);
    var list = document.getElementById("navigation");
    list.replaceChild(textNode, list.childNodes[0]);
}

function remove_from_nav() {
    var list = document.getElementById("navigation");
    list.removeChild(list.childNodes[0]);
}

function parent_node() {
    var parent_node = document.getElementById("navigation").parentNode.nodeName;
    alert("Parent node = " + parent_node);
}

function change_background_color() {
    var select_bg_color = document.getElementById("select_bg_color");
    var new_bg_color = select_bg_color.options[select_bg_color.selectedIndex].value;

    document.body.style.backgroundColor = new_bg_color;
}

function change_text_color() {
    var select_txt_color = document.getElementById("select_txt_color");
    var new_txt_color = select_txt_color.options[select_txt_color.selectedIndex].value;
    document.body.style.color = new_txt_color;
}

function change_font_family() {
    var select_font_family = document.getElementById("select_font_family");
    var new_font_family = select_font_family.options[select_font_family.selectedIndex].value;
    document.body.style.fontFamily = new_font_family;
}

function a() {
    document.getElementById("form_clear").addEventListener("focus", b);
}

function b() {
    tooltip.pop(this, 'Lorem ipsum dolor...mauris');
}