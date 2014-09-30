$(document).ready(function() {
	navExpanded = true;
	var initialLoadPage = true;
	var currentLinkName;
    updateNavMenuState();

    $('.nav-link').on('click', function() {
    	if($(this).attr('name') !== currentLinkName) {
  /*  		currentLinkName = $(this).attr('name');
	    	navExpanded = !navExpanded;
	    	$('#push-panel').toggleClass('collapsed');*/
	    	initialLoadPage = false;
            updateNavMenuState(); 	   	
    	}
    });
    $('#nav-menu').on('mouseenter', function() {
     	if(!navExpanded) {     		
    		$('#push-panel').toggleClass('collapsed');
    		navExpanded = !navExpanded;
            updateNavMenuState()
     	}    	
    });
    $('#nav-menu').on('mouseleave', function() {
     	if(navExpanded && !initialLoadPage) {   	
    		$('#push-panel').toggleClass('collapsed');
    		navExpanded = !navExpanded;   
            updateNavMenuState()	
     	}    	
    });
    $('#nav-menu').on('click', "a[name='treatment']", function() {    
            $('.treatment-subnav').addClass('active');
            updateNavMenuState()    
    });
});

function updateNavMenuState() {
    $('.nav-menu-state').html('Nav <br>open?<br>' + navExpanded.toString().toUpperCase());
}

