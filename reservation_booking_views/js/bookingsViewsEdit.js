(function ($) {
  Drupal.behaviors.showEditWindow = {
    attach: function (context, settings) {
      $('.edit-button').click(function () { // 'Edit' button clicked
        // get the id of the clicked item
        var id = $(this).attr('id');
        // get id of the booking
        var bookingId = id.substr(12);
        // create selector for confirm form
        var selector = '#edit-form-' + bookingId;
        // show element
        $(selector).show();
      });
    }
  };
  Drupal.behaviors.hideEditWindow = {
    attach: function (context, settings) {
      $('.close-window').click(function () { // 'Close window' icon clicked
        // get the id of the clicked item
        var id = $(this).attr('id');
        // get id of the booking
        var bookingId = id.substr(13);
        // create selector for confirm form
        var selector = '#edit-form-' + bookingId;
        // hide element
        $(selector).hide();
      });
    }
  };
})(jQuery);