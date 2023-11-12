(() => {
    jQuery('.markdown-body :not(a) > img, .markdown-body > img').each(function() {
        var $image = jQuery(this);
        var imageUrl = $image.attr('data-src') || $image.attr('src');
        var $imageWrap = $image.wrap(`
          <a class="fancybox fancybox.image" href="${imageUrl}"
            itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`
        ).parent('a');
        if ($imageWrap.length !== 0) {
          if ($image.is('.group-image-container img')) {
            $imageWrap.attr('data-fancybox', 'group').attr('rel', 'group');
          } else {
            $imageWrap.attr('data-fancybox', 'default').attr('rel', 'default');
          }
  
          var imageTitle = $image.attr('title') || $image.attr('alt');
          if (imageTitle) {
            $imageWrap.attr('title', imageTitle).attr('data-caption', imageTitle);
          }
        }
      });
  
      jQuery.fancybox.defaults.hash = false;
      jQuery('.fancybox').fancybox({
        protect: true,
        loop: false,
        arrows: true,
        infobar: false,
        toolbar: true,
        buttons : [
            // 'slideShow',
            // 'fullScreen',
            // 'thumbs',
            // 'share',
            //'download',
            // 'zoom',
            'close'
        ],
        dblclickContent: 'zoom',
        btnTpl: {
          arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
                        '<svg width="18" height="18">' +
                          '<use xlink:href="#chevron-left"></use>' +
                        '</svg>' +
                      '</button>',
          arrowRight : '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
                          '<svg width="18" height="18">' +
                            '<use xlink:href="#chevron-right"></use>' +
                          '</svg>' +
                        '</button>'
        },
        mobile: {
          // protect: false,
          clickSlide: 'close',
          dblclickContent: 'zoom',
          dblclickSlide: 'zoom'
        }
      });
})()