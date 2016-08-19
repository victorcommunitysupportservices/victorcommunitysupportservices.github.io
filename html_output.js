function generateOutput(){
	full_name = first_name+" "+last_name;
	name_title = full_name+" &nbsp;|&nbsp; "+title;
	direct_phone = direct_phone_a+'-'+direct_phone_b+'-'+direct_phone_c;
	main_phone = main_phone_a+'-'+main_phone_b+'-'+main_phone_c;
	cell = cell_a+'-'+cell_b+'-'+cell_c;
	fax = fax_a+'-'+fax_b+'-'+fax_c;
	toll_free = toll_free_a+'-'+toll_free_b+'-'+toll_free_c;
		
o ='<table border="0" cellpadding="0" cellspacing="0" style="width:100%; font-family:Arial, font-size:10pt; color:black;">';
o += '<tr><td style="font-size: 10px; color:black; padding:10px 10px 0 5px">';
o += '</td></tr>';
//o += '<tr><td style="color: rgb(75, 63, 39); font-size:12px; font-weight:bold; padding:10px 0 0 5px;">'+name_title+'</td></tr>';
o += '<tr><td style="font-family:Arial; font-size:10pt; color:black; padding:0 0 0 5px">';
o += '<span style="font-family:Arial; font-size:10pt;font-weight:bold;"><strong>' + full_name + '</strong></span><br /><br />';
o += company_name + '<br />';
o += title + '<br />';
if(!company_address || !company_city || !company_state || !company_zip){
	alert(company_zip);
}
else{
o += company_address+', '+company_city+' '+company_state+' '+company_zip+'<br />';
}
if (!main_phone_a || !main_phone_b || !main_phone_c) {
}
else {
    o += 'Phone: ' + main_phone + '<br />';
}
if(!direct_phone_a || !direct_phone_b || !direct_phone_c){
}
else{
o += 'Direct: '+direct_phone+'<br />';
}
if(!cell_a || !cell_b || !cell_c){
}
else{
o += 'Cell: '+cell+'<br />';
}
if(!fax_a || !fax_b || !fax_c){
}
else{
o += 'Fax Line: '+fax+'<br />';
}
if(!toll_free_a || !toll_free_b || !toll_free_c){
}
else{
o += 'Toll Free Line: '+toll_free+'<br />';
}
o += '</td></tr>';
o += '<tr><td style="font-family:Arial; font-size:10pt; color:black; padding:0 0 0px 5px">';
o += '<a href="mailto:'+company_url+'">'+company_url+'</a>';
o += '<tr><td style="font-family:Arial; font-size:10pt; color:black; padding:0 0 0px 5px">';
if(!facebook_url || !facebook_logo_url){
}
else{
o += '<a href="'+facebook_url+'"><img src="'+facebook_logo_url+'"></a>&nbsp;&nbsp;';
}
if(!twitter_url || !twitter_logo_url){
}
else{
o += '<a href="'+twitter_url+'"><img src="'+twitter_logo_url+'"></a>&nbsp;&nbsp;';
}
if(!youtube_url || !youtube_logo_url){
}
else{
o += '<a href="'+youtube_url+'"><img src="'+youtube_logo_url+'"></a>&nbsp;&nbsp;';
}
if(!linkedin_url || !linkedin_logo_url){
}
else{
o += '<a href="'+linkedin_url+'"><img src="'+linkedin_logo_url+'"></a>&nbsp;&nbsp;';
}
if(!google_url || !google_logo_url){
}
else{
o += '<a href="'+google_url+'"><img src="'+google_logo_url+'"></a>&nbsp;&nbsp;';
}
o += '<a style="border:none" href="http://whiteconstruction.com/"><img src="http://whiteconstruction.com/wci/wci/white-logo.png" /></a>';
o += '<a style="border:none" href="http://www.iea.net/"><img src="http://whiteconstruction.com/wci/wci/white-pf.png" /></a>';
o += '</td></tr>';
o += '</table>';


	document.getElementById("output").value = o;
	document.getElementById("showOutput").innerHTML = o;
	generateOutputB();
}