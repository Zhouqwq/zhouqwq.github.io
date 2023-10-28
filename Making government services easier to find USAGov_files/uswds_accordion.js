(function ($, Drupal) {
  Drupal.behaviors.uswds_ckeditor_integration_accordion = {
    attach: function (context, settings) {

      // Seems to be a bug in ckeditor5 using buttons and maintaining text
      // See https://github.com/ckeditor/ckeditor5/issues/13268
      $('div.usa-accordion__button').each(function () {
        let outer = this.outerHTML;

        // Replace opening tag
        let regex = new RegExp('<' + this.tagName, 'i');
        let newTag = outer.replace(regex, '<button');

        // Replace closing tag
        regex = new RegExp('</' + this.tagName, 'i');
        newTag = newTag.replace(regex, '</button');

        $(this).replaceWith(newTag);
      });

      let $containerCounter = 0;
      $('main .usa-accordion').each(function () {
        let $itemCounter = 0;
        $('.usa-accordion__button', this).each(function () {
          $(this).attr('aria-controls', $containerCounter + '-' + $itemCounter);
          $itemCounter++;
        });

        $itemCounter = 0;
        $('.usa-accordion__content', this).each(function () {
          $(this).attr('id', $containerCounter + '-' + $itemCounter);
          $itemCounter++;
        });

        $containerCounter++;
      });
    }
  };
})(jQuery, Drupal);
