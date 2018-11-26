	$(document).ready(function(){
		
		$('.parallax-slider:first-child').addClass('active');
		$('li[data-target="#carousel"]:first-child').addClass('active');
		
		$('.datepicker-days .table-condensed tr th').removeAttr('class');
		
		if($(window).width() > 768){			
			
			$('.parallax-slider').each(function(){
			
				var $this = $(this);

				$(window).scroll(function(){
				
					if($(window).scrollTop() > 50){
						var yPos = -($(window).scrollTop() / $this.data('speed'));
					}
					
					if($(window).scrollTop() == 0){
						var coords = 'center';
					}else{
						var coords = '50% '+ yPos + 'px';
					}
						$this.css({ backgroundPosition: coords });
				});

			});
			
			var tinggiSlider = window.innerHeight;
			$('.parallax-slider').css({height:+ tinggiSlider - $('header').height() +"px"});
			
			
			function animateOnScroll(){
					
				
					
					$('.animateOnScroll:not(.animated)').each(function(){
						var $this = $(this);
							//$dataOffset = $this.find($this.data('offset')),
							//$section	= '\'section.'+$dataOffset+'\'',
							//ini 		= $this.offset().top;						
						
						if($(window).scrollTop() > ($this.offset().top - 600)){
							if($this.data('timeout')){
								window.setTimeout(function(){
								$this.addClass('animated ' + $this.data('animation'));
								$this.css('visibility','visible');
								}, parseInt($this.data('timeout'),10));
							}
						};
					});
					
					$('.animateOnScroll.animated').each(function(){
						var $this = $(this);
						
						if($(window).scrollTop() < ($this.offset().top - 800)){
							$this.removeClass('animated bounceInLeft bounceInRight bounceInUp bounceInDown');
							$this.css('visibility','hidden');
						};
					});
					
				
			};
			
			$('section.news').each(function(){
				$(window).on('scroll',animateOnScroll);
			});
			
			$('section.banner').each(function(){
				$(window).on('scroll',animateOnScroll); 
			});
			
			$('section.gallery').each(function(){
				
				$(window).on('scroll',galleryOnScroll);
					
				function galleryOnScroll(){
					
				
					
					$('.galleryOnScroll:not(.animated)').each(function(){
						var $this = $(this);
							//$dataOffset = $this.find($this.data('offset')),
							//$section	= '\'section.'+$dataOffset+'\'',
							//ini 		= $this.offset().top;						
						
						if($(window).scrollTop() > ($('section.gallery').offset().top - 400)){
							if($this.data('timeout')){
								window.setTimeout(function(){
								$this.addClass('animated ' + $this.data('animation'));
								$this.css('visibility','visible');
								}, parseInt($this.data('timeout'),10));
							}
						};
					});
					
					$('.galleryOnScroll.animated').each(function(){
						var $this = $(this);
						
						if($(window).scrollTop() < ($('section.gallery').offset().top - 400)){
							$this.removeClass('animated bounceInLeft bounceInRight bounceInUp bounceInDown');
							$this.css('visibility','hidden');
						};
					});
					
				
				};
				animateOnScroll();
			});
		}
		
		$('.topMenu').slicknav({
			label:'',
			prependTo:'#m-menu'
		});

		$( "#slider" ).slider({
			value:0,
			min: 5000000,
			max: 20000000,
			step: 500000,
			slide: function( event, ui ) {
			$( "#amount" ).val( "Rp." + ui.value );
		}
		});
		
		$( "#slider2" ).slider({
			value:0,
			min: 3,
			max: 24,
			step: 3,
			slide: function( event, ui ) {
			$( "#tenor" ).val( ui.value + "Bln" );
		}
		});
		
		$( "#slider3" ).slider({
			value:0,
			min: 500000,
			max: 5000000,
			step: 500000,
			slide: function( event, ui ) {
			$( "#dp" ).val( "Rp." + ui.value );
		}
		});
		
		$("#amount").val( "Rp." + $("#slider").slider("value") );
		$("#tenor" ).val($("#slider2").slider("value") + "Bln" );
		$("#dp" ).val( "Rp." + $("#slider3").slider("value") );
		
		var $grid = $('.grid').imagesLoaded( function() {
  		// init Masonry after all images have loaded
  		$grid.masonry({
    	// options...
  		});
		});
		
		$( "#datepicker" ).datepicker({
			autoSize: true
		});


		$( "#searchform" ).click(function() {

          var text = $("#searchText").val();
          //alert(text);
          if(text !='')
          {
            document.myform.submit();
          }
});
		
	});
