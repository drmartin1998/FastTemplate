YUI.add('fastTemplate', function(Y) {

		function fastTemplate( config) 
		{
	 		fastTemplate.superclass.constructor.apply( this, arguments );
		}
		
		fastTemplate.NAME = "fastTemplate";
		
		fastTemplate.ATTRS = {
			data : {},
			variables: {},
			templateNode: {},
			wrapperNode: {}
		};
		
		Y.extend( fastTemplate, Y.Base, {
			process : function() {
				var content = '';
				var myData = this.get('data');
				var htmlSnip = this.get('templateNode').get('innerHTML');
				Y.each(myData, function(i){
					content += Y.substitute( htmlSnip, i);	
				}, this);
				this.get('wrapperNode').set('innerHTML', content);
			}
		});
		
		Y.fastTemplate = fastTemplate;
		
}, '0.0.1' ,{requires:[ 'node', 'base', 'substitute']});
