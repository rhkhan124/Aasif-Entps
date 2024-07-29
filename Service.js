count = 0;
var diff = 1;
var url=app.LoadText( "url" );
app.Alert( url )
 var  rec = JSON.parse(app.LoadText( "userDetails" ));
       var    id=rec.id;
       var    User=rec.user;
       var   token=rec.token;
       

//Called when service is started.
function OnStart()
{


    //Start a timer to do some regular work.
    setInterval( DoWork, 5000 );
}

//Called when we get a message from main app.
function OnMessage( msg )
{
    app.Debug( msg );

    //Handle commands from main App.
    if( msg == "change" ) diff = (diff > 0 ? -1 : 1);
    // code
    
}

function DoWork()
{
   var 	req1=new XMLHttpRequest();
	req1.open("GET",app.LoadText( "url" )+"fetchsms.php?user="+User+"&token="+token+"&uid="+uid,true);
	req1.onreadystatechange=function(){
if(	req1.readyState==4 && 	req1.status==200){if(	req1.responseText=="ufFygf")
{  

}else{
app.ShowPopup( req1.responseText.trim() )


}}}
	req1.send();
}
