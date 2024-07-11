

var url=app.LoadText( "url" );

 var  rec = JSON.parse(app.LoadText( "userDetails" ));
       var    id=rec.id;
       var    User=rec.user;
       var   token=rec.token;
       var company =rec.company;
       var   ustatus ="";
       var uid = app.LoadText( "uid" );
       var projectarray="";
       var calculatedAge="";
       var position =1;
 var ref1 ="home";
 var ref3 ="home";
 var movep =0;
 var moveid ="";
 var reqtype="";
 var myfiletype2 ="";
var myfilename2 ="";
var myfileext2 ="";
var myfolder2 ="";



function addfolder()
{
if(position==6)
{
app.Alert( "You can not add more step folder !" )
}
else
{
var filename =document.getElementById("folder").value;
var ftype = "folder";
var request2 = "addfolder";

 app.Execute("loader2(1);");   

	var 	req2=new XMLHttpRequest();
	req2.open("GET",app.LoadText( "url" )+"folder.php?id="+id+"&user="+User+"&token="+token+"&req="+request2+"&filename="+filename+"&type="+ftype+"&position="+position+"&ref1="+ref1+"&ref2="+ref2,true);
	req2.onreadystatechange=function(){
if(	req2.readyState==4 && 	req2.status==200){if(	req2.responseText=="ufFygf")
{  

}else{
 if (req2.responseText.trim()==1)
 {
 app.Alert( "error please relogin" );
     app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Error"}');
     app.ClearData(  );
  app.exit();
 }
 else if(req2.responseText.trim()==2)
 {
  app.Alert( "User is blocked" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"User is blocked"}');
 }
 else if(req2.responseText.trim()==3)
 {
  app.Alert( "Permission denied contact admin" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Permission denied"}');
 }
 else if(req2.responseText.trim()==4)
 {
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":"Seccessfully updated"}');
 }
 else if(req2.responseText.trim()==5)
 {
    app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":"Seccessfully added"}');
   $('#folderModal').modal('hide');
   getfolder();
 }
 else
 {

 }
}}}
	req2.send();

}
}

function getfolder()
{


 app.Execute("loader2(1);");   


	var 	req3=new XMLHttpRequest();
	req3.open("GET",app.LoadText( "url" )+"getfolder.php?id="+id+"&user="+User+"&token="+token+"&position="+position+"&ref1="+ref1+"&ref2="+ref2,true);
	req3.onreadystatechange=function(){
if(	req3.readyState==4 && 	req3.status==200){if(	req3.responseText=="ufFygf")
{  

}else{
 if (req3.responseText.trim()==1)
 {
 app.Alert( "error please relogin" );
     app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Error"}');
     app.ClearData(  );
  app.exit();
 }
 else if(req3.responseText.trim()==2)
 {
  app.Alert( "User is blocked" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"User is blocked"}');
 }
 else if(req3.responseText.trim()==3)
 {
  app.Alert( "Permission denied contact admin" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Permission denied"}');
 }
else
{
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":""}');
document.getElementById("myfolder").innerHTML ="";

    var alluser=req3.responseText.trim().split('@');
   for(var i = 0; i < alluser.length ;  i++)
   {
   if (alluser[i].length<3)
   {}
   else
   {
   var  rec = JSON.parse(alluser[i]);
   var  gid =rec.id;
   var  gfilename =rec.filename;
   var  gfilecodename =rec.filecodename;
   var  gtype =rec.type;
   var  gposition =rec.position;
   var  gtype =rec.type;
   var  gext =rec.ext;
   var  gdate =rec.date;
   var  gtime =rec.time;
   var  guser =rec.user;
var icon ="";
var color ="";
var display ="block";
if(gtype=="folder")
{
icon ="fa-folder";
color ="#a88f32;";
var display ="none";
}
else if(gext=="pdf")
{
icon ="fa-file-pdf";
color ="red;";
}
else if(gext=="jpg")
{
icon ="fa-file-image";
color ="green;";
}
else if(gext=="png")
{
icon ="fa-file-image";
color ="green;";
}
else if(gext=="xlsx")
{
icon ="fa-file-excel";
color ="green;";
}
else if(gext=="xlsm")
{
icon ="fa-file-excel";
color ="green;";
}
else if(gext=="doc")
{
icon ="fa-file-word";
color ="blue;";
}
else if(gext=="docx")
{
icon ="fa-file-word";
color ="blue;";
}
else 
{
icon ="fa-file";
color ="dark;";
}

document.getElementById("myfolder").innerHTML = document.getElementById("myfolder").innerHTML  +'<div >'
+'<table style="width:94%;margin-left:3%;"><tr>'
+'<td style="text-align:left;width:5%;">'
+'<i class="F30 fas '+icon+'" style="color:'+color+'"></i>'
+'</td>'
+'<td style="text-align:left;" onclick="showfile('+gid+')">'
+'<strong class="F18" style="font-family:times;padding-left:10px;" id="foldername'+gid+'">'+gfilename+'</strong>'
+'</td>'
+'<td style="width:10%;">'
+'<div class="btn-group dropleft">'
+' <i class="F20 fas fa-ellipsis-v dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
+' </i>'
+'  <div class="F20 dropdown-menu dropdown-menu-right" style="height:160px;">'
+'     <li style="height:25px;padding-left:15px;font-family:times;border:1px solid black;"onclick="fmove('+gid+')" >Move</li>'
+'        <li style="height:25px;padding-left:15px;font-family:times;border:1px solid black;display:'+display+';" onclick="fcopy('+gid+')" >Copy</li>'
+'           <li style="height:25px;padding-left:15px;font-family:times;border:1px solid black;" onclick="rename2('+gid+')">Rename</li>'
+'              <li style="height:25px;padding-left:15px;font-family:times;border:1px solid black;" onclick="fdelete('+gid+')" >Delete</li>'
+'                 <li style="height:25px;padding-left:15px;font-family:times;border:1px solid black;content-align:left;text-align:left;display:'+display+';"><a style="margin:0px;padding:0px;"  href="'+url+'folder/'+gfilecodename+'.'+gext+'" download="'+gfilename+'">Download</a></li>'
+'  </div>'
+'</div>'
+'</td>'
+'</tr>'
+'</table>'
+'</div><hr style="margin:3px;border-color:black;">'
+'<input type="hidden" id="filename'+gid+'" value="'+gfilecodename+'.'+gext+'">'
+'<input type="hidden" id="filenameA'+gid+'" value="'+gfilecodename+'">'
+'<input type="hidden" id="fileext'+gid+'" value="'+gext+'">'
+'<input type="hidden" id="filetype'+gid+'" value="'+gtype+'">'
+'<input type="hidden" id="fileid'+gid+'" value="'+gid+'">'
}}
}

}}}
	req3.send();


}
getfolder();

function fback()
{

if(position==1)
{}
else
{
position =position-1;
   var myref=ref3.split(',');
         ref1 =myref[position-1];
             var mybadge = document.getElementById("badge").innerHTML.split('/');
             document.getElementById("badge").innerHTML="";
   for(var i = 0; i < position ;  i++)
   {var ds="";
   if(position==1)
   {
    document.getElementById("badge").innerHTML ="Home/";
   
   }else{
  document.getElementById("badge").innerHTML =document.getElementById("badge").innerHTML+mybadge[i]+"/";
   }
 
   }
         
         getfolder();
}}
function fmove(fd)
{
movep =fd;
reqtype="move";
document.getElementById("ps1").style.display="block";
document.getElementById("ps2").style.display="block";
}
function pcancel()
{
document.getElementById("ps1").style.display="none";
document.getElementById("ps2").style.display="none";
}
function fcopy(pf)
{
movep =pf;
reqtype="copy";

myfiletype2 =document.getElementById("filetype"+pf).value;
myfilename2 =document.getElementById("filenameA"+pf).value;
myfileext2 =document.getElementById("fileext"+pf).value;
myfolder2=document.getElementById("foldername"+pf).innerHTML;

document.getElementById("ps1").style.display="block";
document.getElementById("ps2").style.display="block";
}

function rename2(pk)
{
 movep =pk;

document.getElementById("filename2").value=document.getElementById("foldername"+pk).innerHTML;
$('#rename2').modal('show');
}
function rename()
{

var myfolder3 =document.getElementById("filename2").value;
$('#rename2').modal('hide');
 app.Execute("loader2(1);");   
	var 	req5=new XMLHttpRequest();
	req5.open("GET",app.LoadText( "url" )+"renamefolder.php?id="+id+"&user="+User+"&token="+token+"&fileid="+movep+"&filename="+myfolder3,true);
	req5.onreadystatechange=function(){
if(	req5.readyState==4 && 	req5.status==200){if(	req5.responseText=="ufFygf")
{  

}else{

 if (req5.responseText.trim()==1)
 {
 app.Alert( "error please relogin" );
     app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Error"}');
     app.ClearData(  );
  app.exit();
 }
 else if(req5.responseText.trim()==2)
 {
  app.Alert( "User is blocked" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"User is blocked"}');
 }
 else if(req5.responseText.trim()==3)
 {
  app.Alert( "Permission denied contact admin" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Permission denied"}');
 }
 else if(req5.responseText.trim()==4)
 {
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":"Seccessfully renamed"}');
   getfolder();
 }
 else if(req5.responseText.trim()==5)
 {
    app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":"Seccessfully copied"}');
 getfolder();
 }
 else
 {
     app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":""}');
getfolder();
 }
}}}
	req5.send();
}

function movepast()
{
 app.Execute("loader2(1);");   
	var 	req5=new XMLHttpRequest();
	req5.open("GET",app.LoadText( "url" )+"movefolder.php?id="+id+"&user="+User+"&token="+token+"&filename="+myfolder2+"&type="+myfiletype2+"&position="+position+"&codename="+myfilename2 +"&extn="+myfileext2+"&req="+reqtype+"&ref3="+movep+"&ref1="+ref1+"&ref2="+ref2,true);
	req5.onreadystatechange=function(){
if(	req5.readyState==4 && 	req5.status==200){if(	req5.responseText=="ufFygf")
{  

}else{

 if (req5.responseText.trim()==1)
 {
 app.Alert( "error please relogin" );
     app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Error"}');
     app.ClearData(  );
  app.exit();
 }
 else if(req5.responseText.trim()==2)
 {
  app.Alert( "User is blocked" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"User is blocked"}');
 }
 else if(req5.responseText.trim()==3)
 {
  app.Alert( "Permission denied contact admin" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Permission denied"}');
 }
 else if(req5.responseText.trim()==4)
 {
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":"Seccessfully moved"}');
   getfolder();
 }
 else if(req5.responseText.trim()==5)
 {
    app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":"Seccessfully copied"}');
 getfolder();
 }
 else
 {
     app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":""}');
getfolder();
 }
}}}
	req5.send();
}

function fdelete(pf)
{
movep =pf;


myfiletype2 =document.getElementById("filetype"+pf).value;
myfilename2 =document.getElementById("filenameA"+pf).value;
myfileext2 =document.getElementById("fileext"+pf).value;
myfolder2=document.getElementById("foldername"+pf).innerHTML;

    ynd = app.CreateYesNoDialog( "Are you sure want to delete" );
    ynd.SetOnTouch( Ynd_OnTouch );
    ynd.Show();

}

function Ynd_OnTouch( result )
{
if(result="yes")
{
 app.Execute("loader2(1);");   

	var 	req2=new XMLHttpRequest();
	req2.open("GET",app.LoadText( "url" )+"deletefolder.php?id="+id+"&user="+User+"&token="+token+"&reqid="+movep+"&filename="+myfilename2+"."+myfileext2+"&position="+position+"&ref1="+ref1+"&ref2="+ref2,true);
	req2.onreadystatechange=function(){
if(	req2.readyState==4 && 	req2.status==200){if(	req2.responseText=="ufFygf")
{  

}else{

 if (req2.responseText.trim()==1)
 {
 app.Alert( "error please relogin" );
     app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Error"}');
     app.ClearData(  );
  app.exit();
 }
 else if(req2.responseText.trim()==2)
 {
  app.Alert( "User is blocked" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"User is blocked"}');
 }
 else if(req2.responseText.trim()==3)
 {
  app.Alert( "Permission denied contact admin" );
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Permission denied"}');
 }
 else if(req2.responseText.trim()==4)
 {
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":"Seccessfully updated"}');
 }
 else if(req2.responseText.trim()==5)
 {
    app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":"Seccessfully added"}');
 
 }
 else
 {
     app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"green","msg":""}');
getfolder();
 }
}}}
	req2.send();
}}
function showfile(pp)
{
var myfiletype =document.getElementById("filetype"+pp).value;
if (myfiletype =="folder")
{
position =position+1;
ref1 =pp;
ref3 =ref3+","+pp;
document.getElementById("badge").innerHTML =document.getElementById("badge").innerHTML+document.getElementById("foldername"+pp).innerHTML+"/";
getfolder();
}
else
{
 app.Execute("loader2(1);");   
var myfilename =document.getElementById("filename"+pp).value;
var myfileext =document.getElementById("fileext"+pp).value;
if (myfileext =="png")
{

document.getElementById("mydoc").src="";
document.getElementById("mydoc").style="width:100%;height:550px;background:url("+url+"folder/"+myfilename+") no-repeat center center; background-size: 100% auto;";
}
else if (myfileext =="jpg")
{
prompt("Please enter your name", url+"folder/"+myfilename);
document.getElementById("mydoc").src="";
document.getElementById("mydoc").style="width:100%;height:550px;background:url("+url+"folder/"+myfilename+") no-repeat center center; background-size: 100% auto;";
}
else
{
document.getElementById("mydoc").src="";
document.getElementById("mydoc").src="https://docs.google.com/gview?url="+url+"folder/"+myfilename+"&embedded=true";
document.getElementById("mydoc").style="width:100%;height:550px;";
}
  $('#viewer').modal('show');
}
}
					$('#viewer').on('hidden.bs.modal', function (e) {
document.getElementById("mydoc").src="";
});
						    
						    function onMyFrameLoad(){
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":""}');
};
						    
						          $("#myfile2").change(function(){
						      $('#rename').modal('show');
               
                document.getElementById("filename").value = document.getElementById('myfile2').files.item(0).name;
             
					});


 function _(el){ 	return document.getElementById(el); }

  function uploadFile2()
  { 
 $('#rename').modal('hide');
var filename =document.getElementById("filename").value;

  		var filep= _("myfile2").files[0]; 	
  // alert(file.name+" | "+file.size+" | "+file.type);
	var formdata = new FormData(); 
		formdata.append("myfile2", filep); 
			var ajax = new XMLHttpRequest(); 
				ajax.upload.addEventListener("progress", progressHandler, false); 	
				ajax.addEventListener("load", completeHandler, false); 	
				ajax.addEventListener("error", errorHandler, false); 	
				ajax.addEventListener("abort", abortHandler, false); 
					ajax.open("POST",app.LoadText( "url" )+"uploadfolder.php?id="+id+"&user="+User+"&token="+token+"&filecodename=&filename="+filename+"&type=file&position="+position+"&ref1="+ref1+"&ref2="+ref2);
					ajax.send(formdata); 
					function progressHandler(event){ 	
					var percent = (event.loaded / event.total) * 100; 	
			//		_("progressBar").value = Math.round(percent); 	
					app.Execute("loader2(2);");   
					
					app.Execute( "updatebar("+Math.round(percent)+");" );
					
					} 
					function completeHandler(event){ 	

				       app.Execute("loader2(4);");   
               app.SaveText("msg",'{"color":"green","msg":"Seccessfully uploded"}');
                getfolder();
					} function errorHandler(event){ 
					       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Uploading failed"}');
						} function abortHandler(event){ 	
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Connection aborted"}');
						} 
						
						}