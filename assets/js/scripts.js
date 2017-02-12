/*
Author       : Theme_Ocean.
Template Name: Nurjahan - Creative Architecture & Interior HTML5 Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
        $('#datepicker').datepicker();

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
						
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 

	  /*START PROGRESS BAR*/
		$('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/
			
		/*START SLIDER JS*/
			$('.carousel').carousel({
				interval:10000,
				pause:'false',
			});
		/*END SLIDER JS*/

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 5000, //Set AutoPlay to 3 seconds
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/

		 /*START PORTFOLIO POPUP JS*/
		  $("a[data-rel^='prettyPhoto']").prettyPhoto();				 
		  $('#projectModal').on('shown.bs.modal', function () {
			  $('#myInput').focus()
		  })
		  /*END PORTFOLIO POPUP JS*/ 
		  
		/*START GOOGLE MAP*/
		function initialize() {
		  var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(50.0854411, 14.4170942)
		  };
		  var map = new google.maps.Map(document.getElementById('map'),
			  mapOptions);
		  var marker = new google.maps.Marker({
			position: map.getCenter(),
			//icon: 'assets/img/map_pin.png',
			map: map
		  });
		}

		function initMap() {
			var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: new google.maps.LatLng(50.0854411, 14.4170942)
			};
			var map = new google.maps.Map(document.getElementById('map'),
				mapOptions);
			var infowindow = new google.maps.InfoWindow();
			var service = new google.maps.places.PlacesService(map);

			service.getDetails({
				placeId: 'ChIJZ01HPe-UC0cRcJQaaV0ort4'
			}, function(place, status) {
				console.log(place);
				console.log(status);
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					var marker = new google.maps.Marker({
						map: map,
						position: place.geometry.location
					});
					google.maps.event.addListener(marker, 'click', function() {
						infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +

							place.formatted_address + '<br>'+
							'<a class="map_a" target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=50.085474,14.417094&amp;z=19&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3&amp;cid=16045806904028075120"> <span> View on Google Maps </span> </a></div>');
						infowindow.open(map, this);
					});
					infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +

						place.formatted_address + '<br>'+
						'<a class="map_a" target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=50.085474,14.417094&amp;z=19&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3&amp;cid=16045806904028075120"> <span> View on Google Maps </span> </a></div>');

					infowindow.open(map, marker);
				}
			});
		}
		google.maps.event.addDomListener(window, 'load', initMap);
		/*END GOOGLE MAP*/	
			
	}); 		

	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


  

