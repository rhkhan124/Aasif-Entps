count = 0;
var diff = 1;

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
    count += diff;
    app.ShowPopup( count )
    // app.SendMessage( count )
}