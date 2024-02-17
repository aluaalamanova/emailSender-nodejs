$(document).ready(function() {
    $('#emailForm').submit(function(e) {
        e.preventDefault();
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };

        $.ajax({
            type: 'POST',
            url: '/send-email',
            data: formData,
            success: function(response) {
                $('#response').text(response);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});
