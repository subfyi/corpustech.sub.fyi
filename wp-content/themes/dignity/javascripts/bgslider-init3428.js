// BGSLIDER-INIT.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is  JS file that activates a type of BG Image Slideshow used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: DIGNITY.
// Author: Designova.
// Website: http://www.designova.net 
// Copyright: (C) 2013 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */
jQuery(document).ready(function($) {

    (function(){
    "use strict";


        $(function ($) {

            if(slider_options.fx == 'zoom')
            {
                //BG SLIDESHOW WITH ZOOM EFFECT
                $.mbBgndGallery.buildGallery({
                    containment:"body",
                    timer:1000,
                    effTimer:15000,
                    controls:false, //updated in v1.1
                    grayScale:false,
                    shuffle:true,
                    preserveWidth:false,
                    preserveTop: true,
                    effect: slider_options.fx,
                    //effect:{enter:{transform:"scale("+(1+ Math.random()*2)+")",opacity:0},exit:{transform:"scale("+(Math.random()*2)+")",opacity:0}},

                    // If your server allow directory listing you can use:
                    // (however this doesn't work locally on your computer)

                    folderPath:false,

                    // else:

                     images: slider_options.slides,

                    onStart:function(){},
                    onPause:function(){},
                    onPlay:function(opt){},
                    onChange:function(opt,idx){},
                    onNext:function(opt){},
                    onPrev:function(opt){}
                });
            }
            else if(slider_options.fx == 'fade')
            {
                //BG SLIDESHOW WITH FADE EFFECT
                $.mbBgndGallery.buildGallery({
                    containment:"body",
                    timer:3000,
                    effTimer:1500,
                    controls:false, //updated in v1.1
                    grayScale:false,
                    shuffle:true,
                    preserveWidth:false,
                    preserveTop: true,
                    effect: slider_options.fx,
        //effect:{enter:{transform:"scale("+(1+ Math.random()*2)+")",opacity:0},exit:{transform:"scale("+(Math.random()*2)+")",opacity:0}},

                    // If your server allow directory listing you can use:
                    // (however this doesn't work locally on your computer)

                    //folderPath:"testImage/",

                    // else:

                     images: slider_options.slides,

                    onStart:function(){},
                    onPause:function(){},
                    onPlay:function(opt){},
                    onChange:function(opt,idx){},
                    onNext:function(opt){},
                    onPrev:function(opt){}
                });
            }
            else
            {
                //BG SLIDESHOW WITH FADE EFFECT
                $.mbBgndGallery.buildGallery({
                    containment:"body",
                    timer:5000,
                    effTimer:2500,
                    controls:false, //updated in v1.1
                    grayScale:false,
                    shuffle:true,
                    preserveWidth:false,
                    preserveTop: true,
                    effect: slider_options.fx,
        //effect:{enter:{transform:"scale("+(1+ Math.random()*2)+")",opacity:0},exit:{transform:"scale("+(Math.random()*2)+")",opacity:0}},

                    // If your server allow directory listing you can use:
                    // (however this doesn't work locally on your computer)

                    //folderPath:"testImage/",

                    // else:

                     images: slider_options.slides,

                    onStart:function(){},
                    onPause:function(){},
                    onPlay:function(opt){},
                    onChange:function(opt,idx){},
                    onNext:function(opt){},
                    onPrev:function(opt){}
                });
            }


        });
        // $(function ($)  : ends

    })();
    //  JSHint wrapper $(function ($)  : ends

});







	

