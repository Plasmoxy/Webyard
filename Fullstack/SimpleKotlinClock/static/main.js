
function refresh() {
    $.post("/time", (data) => {
        let obj = JSON.parse(data);
        $("#time").text(obj.value);
    });
    setTimeout(refresh, 100);
}

$(function() {
    $("#buttonStart").click(refresh);
});