 function _(el){ 	return document.getElementById(el); }
var zxc ="";
  function uploadFile(uid,filelocation,z)
  { 
var url =app.LoadText( "url" );
var filename = uid;
zxc= uid;
var filelocation = filelocation;

  		var filep= _("myfile").files[0]; 	
  // alert(file.name+" | "+file.size+" | "+file.type);
	var formdata = new FormData(); 
		formdata.append("myfile", filep); 
			var ajax = new XMLHttpRequest(); 
				ajax.upload.addEventListener("progress", progressHandler, false); 	
				ajax.addEventListener("load", completeHandler, false); 	
				ajax.addEventListener("error", errorHandler, false); 	
				ajax.addEventListener("abort", abortHandler, false); 
					ajax.open("POST", url+"file_upload_parser.php?name="+filename+"&location="+filelocation); 	
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
               if(z==1)
               {
         
               document.getElementById("img").src="user.png";
               setTimeout(changeimg, 5000);
               //document.getElementById("img").src=url+"folder/"+uid+".png";
               }
					} function errorHandler(event){ 
					       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Uploading failed"}');
						} function abortHandler(event){ 	
       app.Execute("loader2(4);");   
   app.SaveText("msg",'{"color":"red","msg":"Connection aborted"}');
						} 
						
						}
						function changeimg()
						{
						document.getElementById("img").src=url+"folder/"+zxc+".png";
						app.Alert( "Please refresh page for change image" )
						}