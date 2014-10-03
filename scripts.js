var navExpanded = true,
    nextEventReady = true,
    initialPageLoad = true;
    currentlySelectedLink = '';

$(document).ready(function() {

    openCloseNav();

    updateDebugInfo();

    $('.nav-link').on('click', function() {
	    	initialPageLoad = false; 

            if($(this).attr('name') !== currentlySelectedLink) {
                var activeSubNav = $('.subnav-menu.active');
                activeSubNav.removeClass('active');
            }

            currentlySelectedLink = $(this).attr('name');

            nextEventReady = true;
            updateDebugInfo();
    });

    $('#nav-menu').on('click', "a[name='treatment']", function() {    
            $('.subnav-menu').addClass('active');
            updateDebugInfo();    
    });

     /*   $('#nav-menu').on('mouseleave', function() {   
        if(!initialPageLoad && !navExpanded) {               
            $('#nav-menu').find('li span').fadeOut(100);
        }       
    });

   $('#nav-menu').on('mouseenter', function() {
        if(navExpanded) {                           
            $('#nav-menu').find('a').show();
            $('#nav-menu').find('li span').fadeIn(200);
            updateDebugInfo();
        }       
    });  */  
});

function updateDebugInfo() {
    $('.initial-page-load').html('Initial page load: ' + initialPageLoad.toString().toUpperCase());
    $('.nav-menu-state').html('Nav-Menu Open? ' + navExpanded.toString().toUpperCase());
    $('.currently-selected-link').html('Current Page: ' + currentlySelectedLink);
    $('.next-event-ready').html('Next event ready: ' + nextEventReady.toString().toUpperCase());
}

// Returns proximity to a 'target_element' so that user 
// actions can be anticipated before reaching actual target
function openCloseNav() {

    var mX, mY, distanceToTarget,         
        $distanceToTarget = $('.menu-debugging .distance-from-target'),
        $element  = $('#nav-menu');

    function calculatedistanceToTarget(elem, mouseX) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width())), 2)));
    }

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        distanceToTarget = calculatedistanceToTarget($element, mX);

        if(!initialPageLoad && distanceToTarget < 40 && nextEventReady) {
            nextEventReady = false;
            navExpanded = !navExpanded; 
            $('#nav-menu').toggleClass('collapsed');    
            $('#nav-menu').find('li span').fadeToggle(200);                           
        }
        if(!initialPageLoad && distanceToTarget > 40) {
            nextEventReady = true;
        }
        
        updateDebugInfo()
        $distanceToTarget.text("Mouse distanceToTarget from nav menu: " + distanceToTarget);         
    });    
};

