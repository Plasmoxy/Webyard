
function refresh() {
    $.post("/time", (obj) => {
        $("#time").text(obj.value);
    });
    setTimeout(refresh, 100);
}

$(function() {
    $("#buttonStart").click(refresh);
});