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
					var evalString = '{';
					for (var key in i) {
						evalString += key + ": i."+key+","
					}
					evalString += '}';
					Y.log('string:: ' + evalString);
					eval("content += Y.substitute( htmlSnip, " + evalString + ");");
					
				}, this);
				this.get('wrapperNode').set('innerHTML', content);
			}
		});
		
		Y.fastTemplate = fastTemplate;
		
}, '0.0.1' ,{requires:[ 'node', 'base', 'substitute']});