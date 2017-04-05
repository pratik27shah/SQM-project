

function hide(status) {
    try {

        switch (status) {
            case "login":
				sessionStorage.clear();
                $("#headerlistbugname").css("display", "none");
                $("#header-projectdeveloper-list").css("display", "none");
                $("#header-home").css("display", "none");
                $("#header-signout").css("display", "none");
                break;
        

			case "adduser":
            
                $("#headerlistbugname").css("display", "none");
                $("#header-projectdeveloper-list").css("display", "none");
                $("#header-home").css("display", "none");
				 $("#headerlistbugname").css("display", "none");
                $("#header-signout").css("display", "none");
				$("#header-createaccount").css("display","none");
				break;
			case "add-project":
				$("#header-createaccount").css("display","none");
				 $("#headerlistbugname").css("display", "none");
			break;
            }

    } catch (er) {
        alert(str(err));
    }
}

function projecthomepage()
{
	try{
		
		window.location.href = 'projecthome.html'
	}
	catch(err){alert(str(err));}
	
	
}