(function ($) {
  Drupal.behaviors.showMerchantEditWindow = {
    attach: function (context, settings) {
      $('.edit-button').click(function () { // 'Edit' button clicked
        // get the id of the clicked item
        var id = $(this).attr('id');
        // get id of the merchant
        var merchantId = id.substr(12);
        // create selector for edit form
        var selector = '#edit-form-' + merchantId;
        // show element
        $(selector).show();
      });
    }
  };
  Drupal.behaviors.hideMerchantEditWindow = {
    attach: function (context, settings) {
      $('.close-window').click(function () { // 'Close window' icon clicked
        // get the id of the clicked item
        var id = $(this).attr('id');
        // get id of the merchant
        var merchantId = id.substr(13);
        // create selector for edit form
        var selector = '#edit-form-' + merchantId;
        // hide element
        $(selector).hide();
      });
    }
  };
})(jQuery);