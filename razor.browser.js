var scripts = global.document.getElementsByTagName('script');
Razor.findView = function findViewInDocument(id, cb) {
	for(var i = 0, ii = scripts.length, script; i < ii && (script = scripts[i]); i++){
		if(script.type === 'application/x-razor-js' &&
			script.getAttribute('data-view-id') === id) {
				if(typeof cb === 'function') cb(script.innerHTML);
				return script.innerHTML;
			}
	}
};

global.Razor = Razor;