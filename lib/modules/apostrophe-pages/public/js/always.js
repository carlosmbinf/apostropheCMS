$('#users-form').submit(function () {
    $.post('/clients/insert', $('#users-form').serialize(), function (result) {
        if (result.status === 200) {
            alert('Gracias por elegirnos!');
            $('#users-form').trigger('reset');
        } else {
            alert('ups..., algo salio mal...');
        }
    });
    return false;
});