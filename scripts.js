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
                var activeSubNav = $('.subnav-menu.active');
                activeSubNav.removeClass('active');
            }

            currentlySelectedLink = $(this).attr('name');

            updateDebugInfo();
    });
    $('#nav-menu').on('mouseenter', function() {
     	if(!navExpanded) {     		
    		$('#nav-menu').toggleClass('collapsed');
    		navExpanded = !navExpanded;
            updateDebugInfo()
     	}    	
    });    
    $('#nav-menu').on('mouseleave', function() {
     	if(navExpanded && !initialLoadPage) {   	
    		$('#nav-menu').toggleClass('collapsed');
    		navExpanded = !navExpanded;   
            updateDebugInfo()	
     	}    	
    });
    $('#nav-menu').on('click', "a[name='treatment']", function() {    
            $('.subnav-menu').addClass('active');
            updateDebugInfo()    
    });
});

function updateDebugInfo() {
    $('.nav-menu-state').html('Nav-Menu Open? ' + navExpanded.toString().toUpperCase());
    $('.currently-selected-link').html('Current Page: ' + currentlySelectedLink);
}

