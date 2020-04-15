(function ($) {
  Drupal.behaviors.showStoreEditWindow = {
    attach: function (context, settings) {
      $('.edit-button').click(function () { // 'Edit' button clicked
        // get the id of the clicked item
        var id = $(this).attr('id');
        // get id of the store
        var storeId = id.substr(12);
        // create selector for edit form
        var selector = '#edit-form-' + storeId;
        // show element
        $(selector).show();
      });
    }
  };
  Drupal.behaviors.hideStoreEditWindow = {
    attach: function (context, settings) {
      $('.close-window').click(function () { // 'Close window' icon clicked
        // get the id of the clicked item
        var id = $(this).attr('id');
        // get id of the store
        var storeId = id.substr(13);
        // create selector for edit form
        var selector = '#edit-form-' + storeId;
        // hide element
        $(selector).hide();
      });
    }
  };
})(jQuery);