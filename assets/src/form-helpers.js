/**
 * Form Helpers
 */

$('.js-add-actor-form').on('submit', function(e) {
    e.preventDefault();

    $(this).request('onSaveActor', {
        success: (data) => {
            $.oc.flashMsg({ text: data.message, class: data.type });

            if (data.type === 'success') {
                $(this).find(':input').val('');
            }

        },
        flash: true,
    });
});

$('.js-contact-form').on('ajaxSuccess', function(e, context, data, status, jqXHR) {
    // On Successful validation, remove contact form.
    if (data.status === 'message sent') {
        const $inputs = $(this).find(':input');
        $inputs.val('');
        this.remove();
    }
});
