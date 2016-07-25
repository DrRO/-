// 
// (C) Van den Boom Media 2001-2002
// 
img_speaker="http://www.messletters.nl/images/mobile_speaker.png";
img_folder="http://www.messletters.nl/images/mobile_category.png";
mleft=110;
mtop=45;
bgplay="http://www.ringtonio.nl/images/standardplay.png";
bgsend="http://www.messletters.nl/images/mobile_download_bg.png";
d=document;
bd="http://www.ringtonio.nl";
d.writeln ('<link rel="stylesheet" type="text/css" href="'+bd+'/css/42474.css">');
d.writeln ('<scr'+'ipt>');
d.writeln ('function send (id)');
d.writeln ('{');
d.writeln ('window.open (bd+"/send/?id="+id+"&rtaff=7212&clx=1&rtlo=42474","sendpop","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=617,height=450,screenX=0,screenY=0,top=0,left=0");');
d.writeln ('}');
d.writeln ('function play (id)');
d.writeln ('{');
d.writeln ('window.open (bd+"/play/?id="+id+"&rtaff=7212&clx=1&rtlo=42474","playpop","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=300,height=160,screenX=0,screenY=0,top=0,left=0");');
d.writeln ('}');
d.writeln ('function nix ()');
d.writeln ('{');
d.writeln ('return;');
d.writeln ('}');
d.writeln ('</scr'+'ipt>');
