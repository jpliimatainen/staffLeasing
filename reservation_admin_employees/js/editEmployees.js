(function ($) {
  Drupal.behaviors.showEmployeeEditWindow = {
    attach: function (context, settings) {
      $('.edit-button').click(function () { // 'Edit' button clicked
        // get the id of the clicked item
        var id = $(this).attr('id');
        // get id of the employee
        var employeeId = id.substr(12);
        // create selector for edit form
        var selector = '#edit-form-' + employeeId;
        // show element
        $(selector).show();
      });
    }
  };
  Drupal.behaviors.hideEmployeeEditWindow = {
    attach: function (context, settings) {
      $('.close-window').click(function () { // 'Close window' icon clicked
        // get the id of the clicked item
        var id = $(this).attr('id');
        // get id of the employee
        var employeeId = id.substr(13);
        // create selector for edit form
        var selector = '#edit-form-' + employeeId;
        // hide element
        $(selector).hide();
      });
    }
  };
})(jQuery);