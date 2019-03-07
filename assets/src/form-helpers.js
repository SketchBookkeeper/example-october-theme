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
})

