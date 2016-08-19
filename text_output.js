function generateOutputB(){	
o = full_name+" | "+title;;
o += "\n";
o += company_name;
o += "\n";
if(!company_address || !company_city || !company_state || !company_zip){
}
else{
o += company_address+', '+company_city+' '+company_state+' '+company_zip;
o += "\n";
}
if(!direct_phone_a || !direct_phone_b || !direct_phone_c){
}
else{
o += 'Direct Line: '+direct_phone;
o += "\n";
}
if(!cell_a || !cell_b || !cell_c){
}
else{
o += 'Cell: '+cell;
o += "\n";
}
if(!main_phone_a || !main_phone_a || !main_phone_a){
}
else{
o += 'Main Line: '+main_phone+' x.';
o += "\n";
}

if(!fax_a || !fax_b || !fax_c){
}
else{
o += 'Fax Line: '+fax;
o += "\n";
}
if(!toll_free_a || !toll_free_b || !toll_free_c){
}
else{
o += 'Toll Free Line: '+toll_free;
o += "\n";
}

o += "\n";
o += company_url;
o += "\n";
o += "\n";
o += "Connect with us:";
if(!facebook_url || !facebook_logo_url){
}
else{
o += facebook_url;
o += "\n";
}
if(!twitter_url || !twitter_logo_url){
}
else{
o += twitter_url;
o += "\n";
}
if(!youtube_url || !youtube_logo_url){
}
else{
o += youtube_url;
o += "\n";
}
if(!linkedin_url || !linkedin_logo_url){
}
else{
o += linkedin_url;
o += "\n";
}
if(!google_url || !google_logo_url){
}
else{
o += google_url;
o += "\n";
}
o += "\n";

	document.getElementById("smartdev").value = o;
	//document.getElementById("showOutput").innerHTML = o;
}