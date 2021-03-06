(function($){
  $.fn.dTabs = function(o){
		o = $.extend({
			curTab:	1,
			onAfter: function(){},
			onCreate: function(){}
		}, o || {});
		return this.each(function(){

			var dTabs = $(this),
				dNav = $('.d-tabs-nav',dTabs),
				cur = o.curTab - 1,
				idx = Math.floor(Math.random()*9999 + 1);

			o.onCreate.call(dTabs);

			$('.d-tab',dTabs).each(function(i){
				$(this).attr('id','d-tab-'+idx+'-'+(i+1));
			});

			if(o.curTab > 1){
				$('li:eq('+cur+')',dNav).addClass('current');
				$('.d-tab:eq('+cur+')',dTabs).show();
			}else{
				$('li:first-child',dNav).addClass('current');
				$('.d-tab:first',dTabs).show();
			}

			$('a',dNav).each(function(i){
				$(this).click(function(){
					$('li',dNav).removeClass('current');
					$(this).parent().addClass('current');
					$('.d-tab',dTabs).hide();
					$('#d-tab-'+idx+'-'+(i+1)).show();
					o.onAfter.call(dTabs);
					return false;
				});
			});
		});
	};
})(jQuery);
