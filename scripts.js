var navExpanded,
    initialLoadPage,
    currentlySelectedLink;

$(document).ready(function() {
	navExpanded = true;
	initialLoadPage = true;

    updateDebugInfo();

    $('.nav-link').on('click', function() {
	    	initialLoadPage = false;            

            if($(this).attr('name') !== currentlySelectedLink) {
                var activeSubNav = $('.treatment-subnav.active');
                activeSubNav.removeClass('active');
            }

            currentlySelectedLink = $(this).attr('name');

            updateDebugInfo();
    });
    $('#nav-menu').on('mouseenter', function() {
     	if(!navExpanded) {     		
    		$('#push-panel').toggleClass('collapsed');
    		navExpanded = !navExpanded;
            updateDebugInfo()
     	}    	
    });    
    $('#nav-menu').on('mouseleave', function() {
     	if(navExpanded && !initialLoadPage) {   	
    		$('#push-panel').toggleClass('collapsed');
    		navExpanded = !navExpanded;   
            updateDebugInfo()	
     	}    	
    });
    $('#nav-menu').on('click', "a[name='treatment']", function() {    
            $('.treatment-subnav').addClass('active');
            updateDebugInfo()    
    });
});

function updateDebugInfo() {
    $('.nav-menu-state').html('Nav-Menu Open? ' + navExpanded.toString().toUpperCase());
    $('.currently-selected-link').html('Current Page: ' + currentlySelectedLink);
}

