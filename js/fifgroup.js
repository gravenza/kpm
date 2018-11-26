	$(document).ready(function(){
			
		$('#carousel .item:first-child').addClass('active');
		$('#carousel .carousel-indicators li:first-child').addClass('active');
		
		$('#accordionInner1').on('shown.bs.collapse',function(){
				
			$('#accordionInner1 a[aria-expanded="true"]').find('i.fa').removeClass('fa-plus');
			$('#accordionInner1 a[aria-expanded="true"]').find('i.fa').addClass('fa-minus');	
				
		});
			
		$('#accordionInner1').on('hidden.bs.collapse',function(){
				
			$('#accordionInner1 a[aria-expanded="false"]').find('i.fa').addClass('fa-plus');
			$('#accordionInner1 a[aria-expanded="false"]').find('i.fa').removeClass('fa-minus');	
				
		});

		$('#popup-spektra').modal('show');	

		$('.counter').countUp();

		$('#carousel-amitra').carousel({
			interval: 7000
		})

		$('#carousel, #carousel-amitra').each(function(){
			$('.carousel-caption h1').each(function(){
				new WOW().init();
			})
		});

		$('#carousel, #carousel-amitra').on('slide.bs.carousel', function () {

			$('.carousel-caption h1').each(function(){
				new WOW().init();
			});
		});
		
		$('.fifastra-spriter,.parallax-spektra-inner,.danastra-slider,.amitra-slider').each(function(){
			wow = new WOW(
                      {
                      boxClass:     'wow1',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       false,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
		});

		$('.menu').slicknav();

		var $grid = $('.grid').masonry({
			//columnWidth: 200,
			itemSelector: '.grid-item,.grid-item2'
		});

		// layout Masonry after each image loads
		$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
		});

		// Cache the Window object
		var $window = $(window);
		
		$('.promotion-feature .thumbnail a').hover(function(){
			$(this).find('h4.link').toggleClass('hidden');
			$('h4.title').toggleClass('animated bounceInLeft');
		});
		
		$('.pages table').addClass('table table-bordered table-striped');
		
		$('#carousel .carousel-indicators li:first-child').addClass('active');
		$('.carousel-inner .parallax-slider:first-child').addClass('active');
		
		$('section.news .animateOnScroll:first-child').attr('data-animation','bounceInLeft');
		$('section.news .animateOnScroll:nth-child(2)').attr('data-animation','bounceInDown');
		$('section.news .animateOnScroll:last-child').attr('data-animation','bounceInRight');
		
		$('section.promotion-feature .promoOnScroll:nth-child(n+2)').attr('data-animation','bounceInLeft');
		$('section.promotion-feature .promoOnScroll:nth-child(n+3)').attr('data-animation','bounceInRight');



		if($(window).width() > 768){
			
			var cekLebar = window.innerWidth;
			var cekTinggi = window.innerHeight;
			var headerHeight = $('header').height();
			var footerHeight = $('footer').height();
		
			//$('content').append('<p style="position:absolute;z-index:5"> Lebar Screen ini adalah:'+ cekTinggi +'</p>');
		
			//$('.fifgroup-slider .parallax-slider').css({height:+ cekTinggi - headerHeight +"px"});
			$('.parallax-overview').css({height:+ cekTinggi - footerHeight +"px"});
			//$('.fifastra-slider .parallax-slider').css({height:+ cekTinggi - headerHeight +"px"});
			//$('.spektra-slider .parallax-slider').css({height:+ cekTinggi - headerHeight +"px"});
			$('.parallax-spektra-inner .sprite-left,.parallax-spektra-inner .sprite-right').css({height:+ cekTinggi - headerHeight +"px"});
			//$('.danastra-slider .parallax-slider, .amitra-slider .parallax-slider').css({height:+ cekTinggi - headerHeight +"px"});
			
			if(cekTinggi > 637){
				$('.fifastra-inner .fifastra-spriter > div.spritebox').css({height:+ (cekTinggi - headerHeight) + 280 +"px"});
				$('.fifastra-inner .fifastra-spriter').css({width:+ cekLebar / 3 +"px",height:+ (cekTinggi - headerHeight) + 280 +"px"});
				//$('.fifastra-inner .news,.spektra-inner .news,.danastra-inner .news,.amitra-inner .news').css({height:+ (cekTinggi - footerHeight) + 200 +"px"});
			}else{
				$('.fifastra-inner .fifastra-spriter > div.spritebox').css({height:+ (cekTinggi - headerHeight) + 150 +"px"});
				$('.fifastra-inner .fifastra-spriter').css({width:+ cekLebar / 3 +"px",height:+ (cekTinggi - headerHeight) + 150 +"px"});
			}
			
			var mrg = $('.fifastra-inner .fifastra-spriter .caption').height();
			
			$('.fifastra-inner .fifastra-spriter .caption').css({top:+ cekTinggi - (headerHeight + mrg) +"px"});
			$('.fifastra-inner .fifastra-spriter .caption h4').css({margin:+ (mrg - 19) / 2 +"px "+ 0});
			
			if($.browser.mozilla){
				$('.parallax-slider').height(cekTinggi - headerHeight);
			}
			
			
			$('.parallax-slider').hover(function(){
				//$('.testwow').toggle('slow','easeOutBounce', function(){
					//$(this).removeClass('wow1 bounceInLeft');
					//$(this).css('animation-name','unset');
				//});	
			});
			
			$('.btn-hotdeals').click(function(){
				$('.hotdeals-body').toggle('slow','easeOutBounce', function(){
					//$(this).removeClass('wow1 bounceInLeft');
					//$(this).css('animation-name','unset');
				});	
			});
			
			$('section.services').each(function(){
				
				var cekHight = $('section.services').offset().top;
			
				$window.on('scroll', showDeal);
				
				function showDeal(){
					if($(window).scrollTop() > cekHight){
						$('.hotdeals').css('visibility','visible');
					}
					
					if($(window).scrollTop() < cekHight){
						$('.hotdeals').css('visibility','hidden');
					}
				}
				
			});
			
			
			// SECTION FIFASTRA
			$('section.fifastra').each(function(){

				var $thisSection = $(this);

				$window.on('scroll', fifastraOnScroll);

			function fifastraOnScroll(){
				var scrolled 			= $window.scrollTop();

				$(".fifastraOnScroll:not(.animated)").each(function(){
					var $this 		= $(this),
						offsetTop 	= $('section.fifastra').offset().top;

					if (scrolled > ($('.parallax-fifastra').offset().top - 300)) {
						if($this.data('timeout')){
							window.setTimeout(function(){
							$this.addClass('animated ' + $this.data('animation'));
							$this.css('visibility','visible');
							}, parseInt($this.data('timeout'),10));

						}else{
							$this.addClass('animated ' + $this.data('animation'));
							$this.css('visibility','visible');
						};
					};

				});

				$(".fifastraOnScroll.animated").each(function(index) {
					var $this   = $(this),
					offsetTop 	= $this.offset().top;

					if (scrolled < ($('.parallax-fifastra').offset().top - 500)) {
						$this.removeClass('animated bounceInLeft bounceInRight fadeInUp flipInX lightSpeedIn fadeInUpBig');
						$this.css('visibility','hidden');
					}
				});

			};

			fifastraOnScroll();

		});

		// SECTION SPEKTRA
		$('section.spektra').each(function(){

			var $thisSection = $(this);

			$window.on('scroll', spektraOnScroll);

			function spektraOnScroll(){
				var scrolled 			= $window.scrollTop();

				$(".spektraOnScroll:not(.animated)").each(function(){
					var $this 		= $(this),
						offsetTop 	= $('section.fifastra').offset().top;

					if (scrolled > ($('.parallax-spektra').offset().top - 300)) {
						if($this.data('timeout')){
							window.setTimeout(function(){
							$this.addClass('animated ' + $this.data('animation'));
							$this.css('visibility','visible');
							}, parseInt($this.data('timeout'),10));

						};
					};

				});

				$(".spektraOnScroll.animated").each(function(index) {
					var $this   = $(this),
					offsetTop 	= $this.offset().top;

					if (scrolled < ($('.parallax-spektra').offset().top - 600)) {
						$this.removeClass('animated bounceInLeft bounceInRight fadeInUp flipInX lightSpeedIn fadeInUpBig');
						$this.css('visibility','hidden');
					}
				});

			};

			spektraOnScroll();

		});

		// SECTION DANASTRA
		$('section.danastra').each(function(){

			var $thisSection = $(this);

			$window.on('scroll', danastraOnScroll);

			function danastraOnScroll(){
				var scrolled 			= $window.scrollTop();

				$(".danastraOnScroll:not(.animated)").each(function(){
					var $this 		= $(this),
						offsetTop 	= $('section.fifastra').offset().top;

					if (scrolled > ($('.parallax-danastra').offset().top - 300)) {
						if($this.data('timeout')){
							window.setTimeout(function(){
							$this.addClass('animated ' + $this.data('animation'));
							$this.css('visibility','visible');
							}, parseInt($this.data('timeout'),10));

						};
					};

				});

				$(".danastraOnScroll.animated").each(function(index) {
					var $this   = $(this),
					offsetTop 	= $this.offset().top;

					if (scrolled < ($('.parallax-danastra').offset().top - 500)) {
						$this.removeClass('animated bounceInLeft bounceInRight fadeInUp flipInX lightSpeedIn fadeInUpBig');
						$this.css('visibility','hidden');
					}
				});

			};

			danastraOnScroll();

		});

		// SECTION AMITRA
		$('section.amitra').each(function(){

			var $thisSection = $(this);

			$window.on('scroll', amitraOnScroll);

			function amitraOnScroll(){
				var scrolled 			= $window.scrollTop();

				$(".amitraOnScroll:not(.animated)").each(function(){
					var $this 		= $(this),
						offsetTop 	= $('section.fifastra').offset().top;

					if (scrolled > ($('.parallax-amitra').offset().top - 300)) {
						if($this.data('timeout')){
							window.setTimeout(function(){
							$this.addClass('animated ' + $this.data('animation'));
							$this.css('visibility','visible');
							}, parseInt($this.data('timeout'),10));

						};
					};

				});

				$(".amitraOnScroll.animated").each(function(index) {
					var $this   = $(this),
					offsetTop 	= $this.offset().top;

					if (scrolled < ($('.parallax-amitra').offset().top - 500)) {
						$this.removeClass('animated bounceInLeft bounceInRight fadeInUp flipInX lightSpeedIn fadeInUpBig');
						$this.css('visibility','hidden');
					}
				});

			};

			amitraOnScroll();

		});

		// SPEKTRA NEWS

		$('section.news').each(function(){

			var $thisSection = $(this);

			$window.on('scroll', animateOnScroll);

			function animateOnScroll(){
				var scrolled 			= $window.scrollTop();

				$(".animateOnScroll:not(.animated)").each(function(){
					var $this 		= $(this);

					if (scrolled > ($('section.news').offset().top - 600)) {
						if($this.data('timeout')){
							window.setTimeout(function(){
							$this.addClass('animated ' + $this.data('animation'));
							$this.css('visibility','visible');
							}, parseInt($this.data('timeout'),10));

						};
					};

				});

				$(".animateOnScroll.animated").each(function(index) {
					var $this   = $(this);

					if (scrolled < ($('section.news').offset().top - 600)) {
						$this.removeClass('animated bounceInLeft bounceInRight fadeInUp bounceInDown lightSpeedIn fadeInUpBig');
						$this.css('visibility','hidden');
					}
				});

			};

			animateOnScroll();

		});
		
		// PROMO FEATURE

		$('section.promotion-feature').each(function(){

			var $thisSection = $(this);

			$window.on('scroll', promoOnScroll);

			function promoOnScroll(){
				var scrolled 			= $window.scrollTop();

				$(".promoOnScroll:not(.animated)").each(function(){
					var $this 		= $(this);

					if (scrolled > ($('section.promotion-feature').offset().top - 600)) {
						if($this.data('timeout')){
							window.setTimeout(function(){
							$this.addClass('animated ' + $this.data('animation'));
							$this.css('visibility','visible');
							}, parseInt($this.data('timeout'),10));

						};
					};

				});

				$(".promoOnScroll.animated").each(function(index) {
					var $this   = $(this);

					if (scrolled < ($('section.promotion-feature').offset().top - 600)) {
						$this.removeClass('animated bounceInLeft bounceInRight');
						$this.css('visibility','hidden');
					}
				});

			};

			promoOnScroll();

		});

		// Parallax Backgrounds
		// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641

				$('.middle-logo').click(function(){
					var x = $(".parallax-fifastra").offset();
	        alert("Top: " + x.top + " Left: " + x.left);
				});


		$('section[data-type="background"],li[data-type="background"],li:eq(2)[data-type="background"]').each(function(){
			var $bgobj = $(this); // assigning the object

			$(window).scroll(function() {

			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!
			if($bgobj.data('order')==0){
			if($window.scrollTop() > 0){
				var yPos = -(($window.scrollTop() - $('.fifgroup-slider').offset().top) / $bgobj.data('speed'));
			}
			}

			if($bgobj.data('order')==1){
			if($window.scrollTop() > 200){
			var yPos = -(($window.scrollTop() - $('.parallax-fifastra').offset().top) / $bgobj.data('speed'));
			}
			}

			if($bgobj.data('order')==2){
			if($window.scrollTop() > 700){
			var yPos = -(($window.scrollTop() - $('.parallax-spektra').offset().top) / $bgobj.data('speed'));
			}
			}

			if($bgobj.data('order')==3){
			if($window.scrollTop() > 1300){
			var yPos = -(($window.scrollTop() - $('.parallax-danastra').offset().top) / $bgobj.data('speed'));
			}
			}

			if($bgobj.data('order')==4){
			if($window.scrollTop() > 1800){
			var yPos = -(($window.scrollTop() - $('.parallax-amitra').offset().top) / $bgobj.data('speed'));
			}
			}

			// Put together our final background position
			

			var coords = '50% '+ yPos ;
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			//$bgobj.css({ zIndex: $window.scrollTop() });

			}); // end window scroll
		});

		$('.fifastra-inner').each(function(){
		//var $fifastraSpriterCaption = $(window).width() - ($('.fifastra-spriter').offset().left + $('.fifastra-spriter').outerWidth(true));
		//$('.fifastra-spriter .caption').css('width', + $fifastraSpriterCaption );
		});

		$('.fifastra-spriter').each(function(){
			new WOW().init();
		});

		$('.parallax-slider').each(function(){
			var $this = $(this);

			$(window).scroll(function() {
				if($.browser.mozilla){
					if($window.scrollTop() > 0){
						var yPos = (($window.scrollTop()) / $this.data('speed'));
					}
				}else{
					
					if($window.scrollTop() > 0){
						var yPos = -(($window.scrollTop()) / $this.data('speed'));
					}
					
				}

				if($window.scrollTop() == 0){
					var coords = 'center';
				}else{
					var coords = '50% '+ yPos + 'px';
				}

				$this.css({ backgroundPosition: coords });
			});

		});

		//$('.danastra-slider .slide-spriter').each(function(){

			// $(window).on('load', function(){
			//
			// 	$(window).scroll(function() {
			// 	if($window.scrollTop() == 0){
			// 		$('.slide-spriter').each(function(){
			// 		new WOW().init();
			// 		});
			// 	}
			// 	});
			//
			// 	new WOW().init();
			// });


		//});

	};

	});
