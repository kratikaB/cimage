jQuery(document).on('click', '.bg_color input[type="checkbox"]', function() {      
jQuery('.bg_color input[type="checkbox"]').not(this).prop('checked', false);      
});
jQuery(document).on('click', '.txt_color input[type="checkbox"]', function() {      
jQuery('.txt_color input[type="checkbox"]').not(this).prop('checked', false);      
});
jQuery(document).on('click', '.fnt_style input[type="checkbox"]', function() {      
jQuery('.fnt_style input[type="checkbox"]').not(this).prop('checked', false);      
});
jQuery(".all").submit(function(e){
e.preventDefault();
let tx = jQuery("#texthwere").val();
jQuery('#txtareacolor').val(tx);
let checkedVal = jQuery('input[name=bgcolor]:checked', '.all').val();
let textVal = jQuery('input[name=bgtext]:checked', '.all').val();
let fontStyle = jQuery('input[name=fontstyle]:checked', '.all').val();
jQuery('#txtareacolor').css('background', checkedVal);
jQuery('#txtareacolor').css('color', textVal);
jQuery('#txtareacolor').css('font-style', fontStyle);
});
jQuery("#download").click(function() { 
html2canvas($("#txtareacolor"), {
useCORS: true,
onrendered: function(canvas) {
saveAs(canvas.toDataURL(), 'download.png');
}
});
});
function saveAs(uri, filename) {
var link = document.createElement('a');
if (typeof link.download === 'string') {
link.href = uri;
link.download = filename;
//Firefox requires the link to be in the body
document.body.appendChild(link);
//simulate click
link.click();
//remove the link when done
document.body.removeChild(link);
} else {
window.open(uri);
}
}