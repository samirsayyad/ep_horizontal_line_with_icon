var eejs = require('ep_etherpad-lite/node/eejs/');
var Changeset = require("ep_etherpad-lite/static/js/Changeset");

function eejsBlock_editbarMenuLeft(hook_name,args,cb){
	args.content += eejs.require('ep_horizontal_line/templates/hrLineButton.ejs');
	return cb();

}

function getLineHTMLForExport(hook,context){
	var hr = checkHrInLine(context.attribLine,context.apool);
	if(hr){
		return '<hr></hr>';
	}
}


function checkHrInLine(lineAttrib,pool){
	var hr= null;
	if(lineAttrib){
		var iter = ChangeSet.opIterator(lineAttrib);
		while(iter.hasNext()){

			var op = iter.next();
			hr =  ChangeSet.opAttributeValue(op,'hrline',pool);
 		}

	}
}

exports.eejsBlock_editbarMenuLeft = eejsBlock_editbarMenuLeft;
exports.getLineHTMLForExport = getLineHTMLForExport;