jQuery(document).ready(function($) {


    $(window).load(function(){
        setTimeout(function() {
            $('.vertical-center').each(function(){
                var parent_height = $(this).parent().height();
                var image_height = $(this).height();

                var top_margin = (parent_height - image_height)/2;

                //center it
                $(this).css( 'padding-top' , top_margin);
                //uncomment the following if ithe element to be centered is an image
                //$('.vertical-center-img').css( 'margin-top' , top_margin);
            });
        }, 1000);
        
        



        $('.text-rotator').each(function(){
            
            var text_rotator_content = $(this).html();
            $(this).empty();
            $(this).html('<div class="rotator-wrap"></div>')
            this_item = $(this).children('.rotator-wrap');
            var text_rotator_content_split = text_rotator_content.split(', ');
            var item_size = text_rotator_content_split.length;
            nova_text_rotator(text_rotator_content_split, this_item, item_size);
        });

        
        
        
        
        

        function nova_text_rotator(item_array, this_item, item_size, my_index){
            
            if(my_index == undefined)
                var my_index = -1;

            my_index++

            if(my_index < item_size)
            {

                this_item.fadeOut(800, function(){
                    this_item.html('<span>'+ item_array[my_index] +'</span>');
                    this_item.fadeIn(800);
                    
                });
            }
            else
            {
                my_index = -1;
            }

            setTimeout(function() {
                 nova_text_rotator(item_array, this_item, item_size, my_index);
            }, 2500);
            

        }
    });  
});    