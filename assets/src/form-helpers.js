/**
 * Form Helpers
 */

/**
 * Actor Form
 */
$('.js-add-actor-form').on('submit', function(e) {
    e.preventDefault();

    $(this).request('onSaveActor', {
        success: (data) => {
            $.oc.flashMsg({ text: data.message, class: data.type });

            if (data.type === 'success') {
                $(this).find(':input').val('');
                $('#image-result').html('');
            }

        },
        flash: true,
    });
});

/**
 * Contact Form
 */
$('.js-contact-form').on('ajaxSuccess', function(e, context, data, status, jqXHR) {
    // On Successful validation, remove contact form.
    if (data.status === 'message sent') {
        const $inputs = $(this).find(':input');
        $inputs.val('');
        this.remove();
    }
});

/**
 * Movie Filter
 * @TODO, this should be called by component, not theme.
 */
const $form = $('#movie-filter');
const $pageInput = $('#page-number');
const $filterSubmit = $('#filter-submit');

document.addEventListener('click', function(e) {
    if (e.target.closest('[data-page]')) {
        $pageInput.val(e.target.closest('[data-page]').getAttribute('data-page'));
        $form.submit();
    }
});

// Reset page when a new filter is applied.
$filterSubmit.on('click', function(e) {
    e.preventDefault();
    $pageInput.val(1);
    $form.submit();
});
