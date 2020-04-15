(function ($) {
  Drupal.behaviors.reservationMerchantBookingsForm = {
    attach: function (context, settings) {
      $('.edit-link').click(function () { // 'Edit' link clicked
        // get id of the link item
        var id = $(this).attr('id');
        // get id of the booking
        var bookingId = id.substr(15);
        // create selector for item edit fields
        var selector = '#booking-item-edit-item-' + bookingId;
        // toggle element
        $(selector).toggle();
      });
      
      $('.cancel-edit-link').click(function () { // 'Cancel' link clicked
        // get id of the link item
        var id = $(this).attr('id');
        // get id of the booking
        var bookingId = id.substr(22);
        // create selector for item edit fields
        var selector = '#booking-item-edit-item-' + bookingId;
        // hide element
        $(selector).hide();
      });
    }
  };
})(jQuery);