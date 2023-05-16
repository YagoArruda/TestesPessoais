
var users={};
function consultaUsuario() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/randomuser',
        headers: { 'X-Api-Key': 'CxUu2rhBXA8GYcHgYVEy+A==DyNdQdEk7Ahcgp35'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            insert_from_api(useres[0]);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}