jQuery(document).ready(function($) {
		var power = 1;

		jQuery.easing['jswing'] = jQuery.easing['swing'];
		jQuery.extend( jQuery.easing,
		{
			kineticOut: function (x, current_time, start_value, end_value, total_time) {
				return ((Math.pow(((Math.pow(x, power)) - 1), 3) + 1) + (1 - Math.pow(((Math.pow(x, power)) - 1), 2)))/2;
			}
		});

		
		$(document).ready(function(){
			//Service Details Dumping
		    $('.service-item').each(function(){
		      var dump_data = $(this).children('.service-details_dump').html();
		      var target_id = $(this).parent('.services-icon-wrap').data('target-id');
		      var pseudo_id = $(this).children('a.customLink').data('sudo-rel');
		      if(pseudo_id == 1)
		      $(this).addClass('current');
		  
		      $('#'+target_id).append(dump_data);
		    });

			setTimeout(function() {

				var serviceActiveHover;
			    //asigning the triangle to active icon
			    $('.service-icon').click(function(){
			        $('.service-icon').removeClass('current');
			        $(this).addClass('current');
			    });
			    //assigning the triangle to relevant icon when hovering the service details panel.
			    $('.service-details').mouseenter(function(){
			        serviceActiveHover = $(this).attr('data-service-active-hover');
			        $('.service-icon').removeClass('current');
			        $('#'+serviceActiveHover).addClass('current');
			    });

				var ulMarginLeft = 0;
				var sudoSlider = $(".service-slider").sudoSlider({
					continuous: false,
					customLink:'a.customLink',
					prevNext:false,
					ease: "kineticOut",
	                			useCSS: false // My custom easing doesn't work with css animations. // TODO: Use CSS timing-function instead.
				});
				$(".service-slider").swipe({
					swipeStatus:swipeStatus,
					threshold:0,
					allowPageScroll:"vertical"
				});		
				var starttime;
				var slideWidth;
				var lasttime;
				var lastDistance;

				function moveSlides(procent) {
					$(".service-slider ul").css("marginLeft",(ulMarginLeft + procent*slideWidth) + "px");
				}

				var N = 20;
				var positionsBuffer = new Array(N);;
				var timeBuffer = [];
	            var gotUlPosition = false;
				function swipeStatus(event, phase, direction, distance)
				{
					if (sudoSlider.getValue('clickable'))
					{
						if (phase == "move" && (direction == "left" || direction == "right"))
						{
							if (!gotUlPosition) {
	                            gotUlPosition = true;
	                            ulMarginLeft = $(".service-slider ul").css("marginLeft");
	                            ulMarginLeft = parseInt(ulMarginLeft, 10);
	                        }
							positionsBuffer = positionsBuffer.slice(1, N);
							timeBuffer = timeBuffer.slice(1, N);
							positionsBuffer.push(Math.abs(lastDistance - Number(distance)));
							timeBuffer.push((new Date() - 0) - lasttime);
							
							lasttime = new Date() - 0;
							slideWidth = $(event.currentTarget).find("li").eq(0).width();
							lastDistance = Number(distance);
							if (direction == "left")
								moveSlides(-lastDistance/slideWidth);
							else
								moveSlides(lastDistance/slideWidth);
								
						}
						else if (phase == "start")
						{
							for (var i = 0; i < N; i++) {
								positionsBuffer[i] = 0;
								timeBuffer[i] = 0;
							}
							lastDistance = 0;
							lasttime = new Date() - 0;
							starttime = new Date();
						}
						else if (phase == "end" || phase == "cancel")
						{
	                        gotUlPosition = false;
							var maxSpeed = 5;
							var time = 0; 
							var distance = 0;
							for (var i = 0; i < N; i++) {
								distance += positionsBuffer[i];
								time += timeBuffer[i];
							}
							// This is in pixels pr. ms. 
							var speed = Math.min(distance / time, maxSpeed);
						
						
							var duration = ((new Date() - starttime)/(lastDistance*speed)) * (slideWidth - lastDistance);
							duration = duration > 1000 ? 1000 : duration;
							
							// TODO: Find direction. 
							
							power = Math.sqrt(((maxSpeed - speed) / maxSpeed)) * 1.3 + 0.2
							sudoSlider.goToSlide((direction == "left") ? 'next' : 'prev', duration);
						}
					}
				}
			}, 800);
		});
});