var navExpanded = true,
    nextEventReady = true,
    initialPageLoad = true;
    currentlySelectedLink = '',
    navPinned = false;

$(document).ready(function() {

    openCloseNav();

    updateDebugInfo();

    $('.nav-link').on('click', function() {
	    	initialPageLoad = false; 

            $('.nav-link').not(this).removeClass('selected');
            $(this).addClass('selected');
            /*if($(this).attr('name') !== currentlySelectedLink) {
                var activeSubNav = $('.subside-nav.active');
                activeSubNav.removeClass('active');
            }*/

            currentlySelectedLink = $(this).attr('name');

            nextEventReady = true;
            updateDebugInfo();
    });

    $('#side-nav').on('click', "a[name='treatment']", function() {    
            $('.subside-nav').addClass('active');
            updateDebugInfo();    
    });

    $('#side-nav').on('click', "#nav-pin", function() {    
            $(this).toggleClass('selected');
            navPinned = !navPinned;
    });
 
});

function updateDebugInfo() {
    $('.initial-page-load').html('Initial page load: ' + initialPageLoad.toString().toUpperCase());
    $('.side-nav-state').html('side-nav Open? ' + navExpanded.toString().toUpperCase());
    $('.currently-selected-link').html('Current Page: ' + currentlySelectedLink);
    $('.next-event-ready').html('Next event ready: ' + nextEventReady.toString().toUpperCase());
}

// Returns proximity to a 'target_element' so that user 
// actions can be anticipated before reaching actual target
function openCloseNav() {

    var mX, mY, distanceToTarget,         
        $distanceToTarget = $('.menu-debugging .distance-from-target'),
        $element  = $('#side-nav');

    function calculatedistanceToTarget(elem, mouseX) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width())), 2)));
    }

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        distanceToTarget = calculatedistanceToTarget($element, mX);

        if(!initialPageLoad && distanceToTarget < 40 && nextEventReady && !navPinned) {
            nextEventReady = false;
            navExpanded = !navExpanded; 
            $('#side-nav').toggleClass('collapsed');    
            //$('#side-nav').find('li span').fadeToggle(250);                           
        }
        if(!initialPageLoad && distanceToTarget > 40) {
            nextEventReady = true;
        }
        
        updateDebugInfo()
        $distanceToTarget.text("Mouse distanceToTarget from nav menu: " + distanceToTarget);         
    });    
};

