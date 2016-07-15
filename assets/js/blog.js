/*
	Name: TuneUP
	Description: Responsive Html5 Template
	Version: 1.0
	Author: themelog
*/

(function($) { "use strict"; 



	// DOCUMENT READY 
	$(document).ready(function(){
		
		
		
		// ------------------------------
		// FIXED MENU
		var scrollIntervalID,
			orgElement,
			coordsOrgElement,
			leftOrgElement,
			widthOrgElement,
			orgElementPos,
			orgElementTop;

		if($('html').hasClass('fixed-menu') && ($(window).width() > 767)) {
			
			// Create a clone of the menu, right next to original.
			$('.menu-wrapper').addClass('original').clone().insertAfter('.menu-wrapper').addClass('cloned').removeClass('original').hide();
			
			$( window ).on( "scroll", function() {
			
				if($(window).width() > 767) {
					stickIt();  
				}
			  
			});
		}	

		// function : stickIt
		function stickIt() {
			
		  orgElementPos = $('.original').offset();
		  orgElementTop = orgElementPos.top;               
		
		  if ($(window).scrollTop() >= (orgElementTop)) {
			  
			// scrolled past the original position; now only show the cloned, sticky element.
		
			// Cloned element should always have same left position and width as original element.     
			orgElement = $('.original');
			coordsOrgElement = orgElement.offset();
			leftOrgElement = coordsOrgElement.left;  
			widthOrgElement = orgElement.css('width');
		
			$('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement+'px').show();
			$('.original').css('visibility','hidden');
		  } else {
			// not scrolled past the menu; only show the original menu.
			$('.cloned').hide();
			$('.original').css('visibility','visible');
		  }
		}// end function : stickIt
		// ------------------------------
		
		
		
		// ------------------------------
		// RESPONSIVE VIDEOS
		$(".media-wrap").fitVids();
		// ------------------------------
		
		
		// ------------------------------
		// FORM VALIDATION
		if($('.validate-form').length) {
			$('.validate-form').each(function() {
					$(this).validate();
				});
		}
		// ------------------------------
		
	
		// ------------------------------
		// RESPONSIVE NAV MENU
		var $menu = $('#menu'),
			$menuToggle = $('.menu-toggle');
		
		// add classes
		$menu.find('li').each(function(index, element) {
			if($(this).children('ul').length) {
				$(this).addClass('has-submenu');
				$(this).prepend('<span class="submenu-toggle"></span>');
			}
		});
		
		var $submenuTrigger = $('.has-submenu > .submenu-toggle');
	
		// menu link click event
		$menuToggle.on( "click", function(e) {
			e.preventDefault();
			$('html').toggleClass('is-menu-toggled-on');
		});
		
		// submenu link click event
		$submenuTrigger.on( "click", function() {
			$(this).parent().toggleClass('active');
			$(this).siblings('ul').toggleClass('active');
		});
		
		// add active class on hover
		$menu.find('li li').on( "hover", function() {
			if($(window).width() > 768) {
				var subMenu = $(this).find('ul:first');
				if(subMenu.length) {
					$(this).find('a').eq(0).addClass("active");
				}
			}
		}, function(e) {  //hover out
			if($(window).width() > 768) {
				$(this).find('a').eq(0).removeClass("active");	
			}	
		});
		// ------------------------------
		
		
		
		// ------------------------------
		/* HEADER SEARCH TOGGLE */
		$('.search-toggle').on( "click", function() {
			$('html').toggleClass('is-search-toggled-on');
			if($('html').hasClass('is-search-toggled-on')) {
				setTimeout(function(){ $('.search-box').find('input').focus() },500)
			}
			$('.search-box').slideToggle(400);
		});
		// ------------------------------
		
				
		
		// ------------------------------
		/* SOCIAL FEED WIDGET */
		var socialFeed = $('.social-feed');
		if(socialFeed.length) {
			socialFeed.each(function() {
				$(this).socialstream({
					socialnetwork: $(this).data("social-network"),
					limit: $(this).data("limit"),
					username: $(this).data("username")
				})
			});	
		}
		// ------------------------------
		
		
		// ------------------------------
		/* jQuery Ajax Mail Send Script */	
		var contactForm = $( '#contact-form' );
		var $submit = contactForm.find('.submit');
		
		contactForm.on( "submit", function()
		{
			if (contactForm.valid())
			{
				$submit.text("SENDING");
				var formValues = contactForm.serialize();
				
				$.post(contactForm.attr('action'), formValues, function(data)
				{
					if ( data == 'success' )
					{
						setTimeout(function() { 
							$submit.text("DONE");
							contactForm.clearForm();
						},1000);
					}
					else
					{
						$submit.text("ERROR");
					}
				});
			}
			
			return false
		});

		$.fn.clearForm = function() {
		  return this.each(function() {
		    var type = this.type, tag = this.tagName.toLowerCase();
		    if (tag == 'form')
		      return $(':input',this).clearForm();
		    if (type == 'text' || type == 'password' || tag == 'textarea')
		      this.value = '';
		    else if (type == 'checkbox' || type == 'radio')
		      this.checked = false;
		    else if (tag == 'select')
		      this.selectedIndex = -1;
		  });
		};
		// ------------------------------
		
		
	});
	// DOCUMENT READY 
	
	
	// WINDOW LOAD 
	$(window).load(function() {
		
		// ------------------------------
		/* FLEXSLIDER */
		//$('.flexslider').flexslider({ smoothHeight: true, slideshow: false, animation: "slide" });
		// ------------------------------

	});
	// WINDOW LOAD 
	

})(jQuery);
