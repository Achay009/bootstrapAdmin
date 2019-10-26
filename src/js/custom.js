(function(){
    "use strict";

    $('[data-toggle="sidebar"]').click(function(event){
        // console.log('sidebar toggle was clicked');
        event.preventDefault();
        $('.app').toggleClass('sidebar-toggled');
        // $('.app-content').toggleClass('sidebar-toggled');
    })
})();