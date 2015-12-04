if ( window.NOTE == undefined ) { NOTE = {}; }
NOTE.menubar = function() {
	var self = this;
	this.init = function() {
		$('#index-notebar').jdMenuTree(NOTE.menuObject);
	};
	this.addMenubarStyle = function() {
		
	};
	
}


$(function(){
	new NOTE.menubar().init();
});