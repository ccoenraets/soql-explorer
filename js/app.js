var soql = document.getElementById("soql");
var result = document.getElementById("result");

document.getElementById("queryBtn").addEventListener("click", function() {
    force.query(soql.value,
        function (data) {
            result.innerHTML = JSON.stringify(data, undefined, 3);
        },
        function (error) {
            alert("Error: " + JSON.stringify(error));
        });
}, false);

force.login();