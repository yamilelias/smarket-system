(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

// Global Values
var total_p1 = 0.00;
var total_p2 = 0.00;
var total_p3 = 0.00;

// This is for ajax updater
function loadList(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    updateList(this);
        }
    };
    xmlhttp.open("GET", "filename.xml", true);
    xmlhttp.send();
}
function updateList(xml){
    var xmlDoc = xml.responseXML;
    var xmlLength = xmlDoc.getElementsByTagName("product");
    var i;
    var total = 0.00;

    for (i = 0; i<xmlLength.length; i++){
	var values = xmlDoc.getElementsByTagName("product")[i].childNodes[0].nodeValue;
	total = total + addProducts(values);
    }

    updatePrice(total);
}

function addProducts(value){
    var p1 = "122016697675";
    var p2 = "128016691675";
    var p3 = "671860013525";
    var total = 0.00;

    var products = [p1, p2, p3];

    if(value == products[0]){
	if (total_p1 === undefined) {
    	    total_p1 = 1.00;
        }
    	doc = document.getElementById('table');
	var total_product = total_p1 * 28.95; 
	doc.insertAdjacentHTML('beforeend', '<tr><td>'+ total_p1 +'</td><td>Kleenex Neutro 100</td><td>$'+ total_product +'</td></tr>');
	return total_product;
    } else if(value == products[1]){
	if (total_p2 === undefined) {
    	    total_p2 = 1.00;
    	}
    	doc = document.getElementById('table');
	var total_product = total_p2 * 37.15;
	doc.insertAdjacentHTML('beforeend', '<tr><td>'+ total_p2 +'</td><td>Lomo de Atún Tuny</td><td>$'+ total_product +'</td></tr>');
	return total_product;
    } else if(value == products[2]){
	if (total_p3 === undefined) {
    	    total_p3 = 1.00;
    	}
    	doc = document.getElementById('table');
	var total_product = total_p3 * 65.25; 
	doc.insertAdjacentHTML('beforeend', '<tr><td>'+ total_p2 +'</td><td>Café Soluble Nescafé</td><td>$'+ total_product +'</td></tr>');
	return total_product;
    }
 
    
}

function updatePrice(totalPrice){
    document.getElementById("total").value = totalPrice;
}

function UpdateTable(){
    while(0){
    	var wait = 500;
    	setTimeout( function(){
	     loadList();
    	}, wait);    
    }

}


