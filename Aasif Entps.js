
        var back =1;
        var  id="";
        var User="";
        var token="";
        var uid="";
        var key=0;
        var type =1;
        var update =0; // update ==1;
        
        /*
        app.SetOnError( OnError )
        function OnError()
        {
        
        app.ClearData(  );
         login();
         
        }
        
        */
        
        crypt = app.CreateCrypt();
         theme = app.CreateTheme( "Light" );
        theme.AdjustColor( 35, 0, -10 );
        theme.SetBackColor( "#ffffffff" );
        theme.SetBtnTextColor( "#ffffffff" );
        theme.SetButtonOptions( "custom" );
        theme.SetButtonStyle( "#4285F4","#4285F4",2,"#999999",0,1,"#ff9000" );
        theme.SetCheckBoxOptions( "dark" );
	   	theme.SetTextEditOptions( "underline" );
        theme.SetDialogColor( "#ffffffff" );
        theme.SetDialogBtnColor( "#ffeeeeee" );
        theme.SetDialogBtnTxtColor( "#ff666666" );
        theme.SetTitleHeight( 42 );
        theme.SetTitleColor( "#ff888888" ); 
        theme.SetTitleDividerColor( "#ff0099CC" );
        theme.SetTextColor( "#ff666666" );
        app.SetTheme( theme );
        var parm = parm2();

         
        app.SaveText( "url",parm );
        if (app.LoadText( "first" ).length==0)
        {
         app.SaveText("theme","E6E6E6");
        app.SaveText("themeF","ffffff");
        app.SaveText("themeB","808080");
        app.SaveText("fontA","000000");
        app.SaveText("fontB","009dd1");
        app.SaveText("fontC","ff0000");
        
        var themeColor ='{"c1":"'+app.LoadText("theme")+'","c2":"'+app.LoadText("themeF")+'","c3":"'+app.LoadText("themeB")+'","c4":"'+app.LoadText("fontA")+'","c5":"'+app.LoadText("fontB")+'","c6":"'+app.LoadText("fontC")+'"}';
        app.SaveText("themeColor",themeColor);
        app.SaveText("size","0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,");
       
        app.SaveText("first",4);
        app.SaveText("mytheme","2");
        app.SaveText("xfont","2");
        }
        app.SetScreenMode( "Game" );
        app.SetOrientation( "Portrait" );
        app.EnableBackKey( false );
        /////// Security Section
        function OnStart()
        {
        
        
        
        layLogin = app.CreateLayout( "linear", "FillXY" );	
        layLogin.SetBackColor("white");
        app.AddLayout( layLogin );
        
        webLogin = app.CreateWebView( 1,1,"FillXY,NoScrollbar,IgnoreErrors");
        webLogin.LoadUrl( "login.html" );
        layLogin.AddChild(webLogin); 
       
           var userDetails = app.LoadText("userDetails" );
       if (userDetails.length==0)
       {
       login();
           }
           else
           {
           
            var  rec = JSON.parse(userDetails);
           
var  response=rec.response;
var  roletype =rec.role;
var  empid=rec.empid;
app.SaveText( "empid", empid)
app.SaveText( "empid2", empid)

 if (response==4)
 {
 if( roletype=="Employee")
 {
 type=2;
 }
 else
 {
 type=1;
 }
Main();
 }
 else
 {
 login();
 }   
 
          }    
  

 
        }
        
        function signup()
        {
        webLogin.LoadUrl( "signup.html" );   
        }
        function forgot()
        {
        webLogin.LoadUrl( "forgot.html" );

        }
        function login()
        {
        webLogin.LoadUrl( "login.html" );
        
        }
        function newpass()
        {
        webLogin.LoadUrl( "newPassword.html" );    
        }
        app.SetOnShowKeyboard( OnKeyboard );
        function OnKeyboard(shown)
        {
        var height = 1;
        if(shown){
        height -= app.GetKeyboardHeight();
        webLogin.SetSize( 1,.5);
        if(key==1)
        {
        web.SetSize( 1,.45);
        }
        }
        else
        {
        webLogin.SetSize(1,1);
        if(key==1)
        {
        web.SetSize(1,1);
        }
        }
        }
        ////// Home Page Section
        function Main()
        {
        var userDetails = app.LoadText("userDetails" );

           
            var  rec = JSON.parse(userDetails);
           
var  response=rec.response;
var  roletype =rec.role;

 if( roletype=="Employee")
 {
 type=2;
 if(app.LoadText( "empid" ).length==0)
 {
 app.Exit(  );
 }
 }
 else
 {
 type=1;
 }

        key=1;
        back =2;
        app.SetScreenMode( "Normal" );
        
        var themeColor ='{"c1":"'+app.LoadText("theme")+'","c2":"'+app.LoadText("themeF")+'","c3":"'+app.LoadText("themeB")+'","c4":"'+app.LoadText("fontA")+'","c5":"'+app.LoadText("fontB")+'","c6":"'+app.LoadText("fontC")+'"}';
        app.SaveText("themeColor",themeColor);
        
        //Create a layout with objects vertically centered.
        lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
        lay.SetBackColor("white");
        
        layTop=app.CreateLayout("Linear", "Horizontal,FillX,Left,VCenter");
        layTop.SetSize(1,.08)
        lay.AddChild(layTop);
        
        webbar = app.CreateWebView( 1, 0.08,"FillXY,NoScrollbar,IgnoreErrors");
        webbar.LoadUrl( "bar.html" );
        layTop.AddChild( webbar );
        
        layContent = app.CreateLayout( "Frame", "VCenter,FillXY" );
        lay.AddChild( layContent );
        
        web = app.CreateWebView( 1, 0.92,"FillXY,NoScrollbar,IgnoreErrors");
        layContent.AddChild( web );
        
        if(type==2)
        {
         web.LoadUrl( "empindex.html");
        }
        else
        {
         web.LoadUrl( "index.html");
        }
        
        
        CreateDrawer();
        
        app.AddLayout( lay );
        app.AddDrawer( drawerScroll, "Left", drawerWidth );
        
         //Start/connect to our service.
    svc = app.CreateService( "this", "this", OnServiceReady );
    svc.SetOnMessage( OnServiceMessage );

    //This will cause your service to start at boot.
    //(Set it to "none" if you need to stop it starting)
    app.SetAutoBoot( true);


        	usercheck(app.LoadText( "check1" ),app.LoadText( "check2" ));
        	
  loc2 = app.CreateLocator( "GPS,Network" )
	loc2.SetOnChange( loc2_OnChange ) 
		loc2.SetRate( 60 ) //10 seconds.
	loc2.Start()
        }
        
        //Called after our service has started.
function OnServiceReady()
{
    app.Debug( "Service Ready" );
}

//Called when messages comes from our service.
function OnServiceMessage( msg )
{
    //recieve message from service
}
        
        
        
        
   function loc2_OnChange( data )
{
		app.SaveText( "loc", data.latitude+","+data.longitude );
		loc2.Stop();
		}
        
	

	function usercheck(myuser,mypass)
	{
	var 	reqrefresh=new XMLHttpRequest();
	reqrefresh.open("GET",app.LoadText( "url" )+"login.php?user="+myuser+"&password="+mypass,true);
	reqrefresh.onreadystatechange=function(){
if(	reqrefresh.readyState==4 && 	reqrefresh.status==200){if(	reqrefresh.responseText=="ufFygf")
{  

}else{

app.SaveText( "userDetails",  reqrefresh.responseText.trim());
}}}
	reqrefresh.send();
	}
        
           if(app.LoadText( "userDetails" ).length==0)
           {}
           else
           {
           var  rec = JSON.parse(app.LoadText( "userDetails" ));
           id=rec.id;
           User=rec.user;
           token=rec.token;
           uid=rec.uid;
          }
          
          function getloc()
          {
          	loc = app.CreateLocator( "GPS,Network" )
	loc.SetOnChange( loc_OnChange ) 
	//	loc.SetRate( 10 ) //10 seconds.
	loc.Start()
          }
          function loc_OnChange( data )
{
		app.SaveText( "loc", data.latitude+","+data.longitude );
	  web.Execute( "setloc()" );
		loc.Stop();
		}
      
          function myalert()
          {
        	var 	req1=new XMLHttpRequest();
	req1.open("GET",app.LoadText( "url" )+"alert.php?id="+id+"&user="+User+"&token="+token+"&uid="+uid,true);
	req1.onreadystatechange=function(){
if(	req1.readyState==4 && 	req1.status==200){if(	req1.responseText=="ufFygf")
{  

}else{
app.SaveText( "alert",req1.responseText.trim() );
webbar.Execute( "alert1()");


}}}
	req1.send();
        }

      function parm2()
      {
      var myparm= crypt.Decrypt( "+e1Kptddrl/tL/0Ss55h+waHEQFRKkD5JKSfbJUNlpLoD2FHaJwLFC7UTQosQwmX", "mymanage.com");
      return myparm;
      }


        function loader2(g)
        {
        webbar.Execute( "loader("+g+")" );
        
        }
        function createuser()
        {
        web.LoadUrl( "creatuser.html" );
        }
        
        function mynoti()
        {
        web.LoadUrl( "notification.html" );
        }
        
        function home()
        {
        web.LoadUrl( "index.html" );
        }
        
        function home2()
        {
        web.LoadUrl( "empindex.html" );
        }
        
        function record()
        {
        web.LoadUrl( "gpsrecord.html" );
        }
        function addonline()
        {
        web.LoadUrl( "gps.html" );
        }
        
        function addlbr()
        {
        web.LoadUrl( "addlbr.html" );
        }
        function pedit()
        {
        web.LoadUrl( "updateproject.html" );
        }
        function userinfo()
        {
        web.LoadUrl( "userinfo.html" );
        }
        function empinfo()
        {
        web.LoadUrl( "empmain.html" )
        }
          function employeesmain()
        {
        web.LoadUrl( "empmain.html" )
        }
        function payment()
        {
        web.LoadUrl( "payment.html" )
        }
        
        function emppayment()
        {
        web.LoadUrl( "emppayment.html" )
        }
         function projectinfo()
        {
        web.LoadUrl( "projectinfo.html" )
        }
        function viewtrash()
        {
        web.LoadUrl( "employees2.html" )
        }
        
        function addsalary()
        {
        web.LoadUrl( "addsalary.html" )
        app.CloseDrawer( "left" );
        }
        
        function addsalary2()
        {
        web.LoadUrl( "addsalary2.html" )
        app.CloseDrawer( "left" );
        }
        function lbrinfo()
        {
        web.LoadUrl( "lbrinfo.html" )
        app.CloseDrawer( "left" );
        }
        function report()
        {
        web.LoadUrl( "report.html" );
        app.CloseDrawer( "left" );
        }
        
        function empreport()
        {
        web.LoadUrl( "empreport.html" );
        app.CloseDrawer( "left" );
        }
        function inventory()
        {
        web.LoadUrl( "inventory.html" );
        app.CloseDrawer( "left" );
        }
        function inventory2()
        {
        web.LoadUrl( "inventory2.html" );
        app.CloseDrawer( "left" );
        }
        function employees()
        {
        web.LoadUrl( "employees.html" );
        app.CloseDrawer( "left" );
        }
        function addemp()
        {
        web.LoadUrl( "addemp.html" );
        app.CloseDrawer( "left" );
        }
        
        function account()
        {
        web.LoadUrl( "empaccount.html" );
       app.CloseDrawer( "left" );
         }
        
          function empdocument()
        {
        web.LoadUrl( "empdocument.html" );
        app.CloseDrawer( "left" );
        }
        function docupload()
        {
        web.LoadUrl( "docupload.html" );
        app.CloseDrawer( "left" );
        }
        function addpaid()
        {
        web.LoadUrl( "addpaid.html" );
       app.CloseDrawer( "left" );
         }
          function addpaid2()
        {
        web.LoadUrl( "addpaid2.html" );
       app.CloseDrawer( "left" );
         }
        
        function project()
        {
        web.LoadUrl( "project.html" );
       app.CloseDrawer( "left" );
         }
         
        function project2()
        {
        web.LoadUrl( "projectinfo2.html" );
       app.CloseDrawer( "left" );
         }
         function addproject()
        {
        web.LoadUrl( "addproject.html" );
        app.CloseDrawer( "left" );
        }
        
        function CreateDrawer()
        {
        //Create a layout for the drawer.
        //(Here we also put it inside a scroller to allow for long menus)
        drawerWidth = 0.7;
        drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" );
        drawerScroll.SetBackColor( "White" );
        layDrawer = app.CreateLayout( "Linear", "Left" );
        drawerScroll.AddChild( layDrawer );
        
        //Create layout for top of drawer.
        layDrawerTop = app.CreateLayout( "Absolute" );
        layDrawerTop.SetBackground( "/Sys/Img/GreenBack.jpg" );
        layDrawerTop.SetSize( drawerWidth, 0.23 );
        layDrawer.AddChild( layDrawerTop );
        
        //Add an icon to top layout.
        webM = app.CreateWebView( 0.8, 0.8,"FillXY,NoScrollbar,IgnoreErrors" );
        webM.SetSize( drawerWidth, 0.23 );
        webM.LoadUrl("image.html");
        layDrawerTop.AddChild( webM );

        
        //Create menu layout.
        var layMenu = app.CreateLayout( "Linear", "Left" );
        layDrawer.AddChild( layMenu );
        
        webside = app.CreateWebView( 0.7, 1,"FillXY,NoScrollbar,IgnoreErrors" );
        webside.SetSize( drawerWidth, 0.77 );
        
        layMenu.AddChild( webside );
        
        if(type==2)
        {
         webside.LoadUrl("empsideBar.html");
        }
        else
        {
         webside.LoadUrl("sideBar.html");
        }
        
        
        }
        
        if(update==1)
        {
        
        var updateapp=new XMLHttpRequest();
updateapp.open("GET","http://www.aasifenterprises.com/apps/appsupdate.php?version="+app.GetVersion(),true);
updateapp.onreadystatechange=function(){
if(updateapp.readyState==4 && updateapp.status==200){if(updateapp.responseText=="hwhwvzyw"){
}else{
update =updateapp.responseText;
if (updateapp.responseText.trim().length>10)
{
 yesNo34kjtrpsaqw= app.CreateYesNoDialog("A new version update available , download now ?");
  yesNo34kjtrpsaqw.SetOnTouch( yesNo34kjtrpsaqw_OnTouch );
  yesNo34kjtrpsaqw.Show();
}}}}
updateapp.send();
}

    
    

    function yesNo34kjtrpsaqw_OnTouch(result)
    {
    if(result=="Yes")
    {
app.OpenUrl( update );
yesNo34kjtrpsaqw.Hide();
}
}
        
        
        function openBar()
        {
        app.OpenDrawer();   
        }
   
        function user2()
        {
        web.LoadUrl("user2.html");
        }
   
        function user()
        {
        web.LoadUrl("user.html");
        }
             function trashlist()
        {
        web.LoadUrl("usermanagement2.html");
        }
        function updatebar(u)
        {
        webbar.Execute( "update("+u+");" );
        }
             function myuser()
        {
        web.LoadUrl("usermanagement.html");
        app.CloseDrawer( "left" );
        }
          function barrefresh()
        {
        webM.LoadUrl("image.html");
        }
        function Theme()
        {
        var Theme = app.CreateDialog();
        Theme.SetSize(0.8,0.6);
        
        layTheme = app.CreateLayout( "linear" );	
        layTheme.SetBackColor("white");
        Theme.AddLayout( layTheme );
        
        Themeweb = app.CreateWebView( 0.8,1 ,"NoScrollbar,IgnoreErrors" );
        layTheme.AddChild( Themeweb );
        Themeweb.LoadUrl( "theme.html");
        app.CloseDrawer();
        Theme.Show();
        }
        
        
        function OnBack()
        {
        app.HideProgress();
        webbar.Execute( "stoploader();" );
        if (back==1)
        {
        if(webLogin.CanGoBack())
        {
        webLogin.Back();
        }else
        {
        app.Exit(  );
        }
        }
        else
        {
        if(app.LoadText("Change")=="exit") 
        {
        app.Exit();   
        }
        else
        {
        web.LoadUrl(app.LoadText("Change"));
        myalert();
        }
        }
        } 