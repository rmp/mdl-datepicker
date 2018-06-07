(function() {
    'use strict';

    if (typeof epepite == "undefined") {
        window.epepite = {};
    }

    if (typeof epepite.DatePicker == "undefined") {
        epepite.DatePicker = {};
    }

    epepite.DatePicker.Template = function(translator) {
	this.translator = translator;
    };

    epepite.DatePicker.Template.prototype.load = function(name)
    {
        if (typeof epepite.DatePicker.TEMPLATES[name] == "undefined") {
            throw "Undefined template \""+ name +"\"";
        }

        var template  = epepite.DatePicker.TEMPLATES[name],
            constants = epepite.DatePicker.CONSTANTS
        ;

        for (var key in constants) {
            if (constants.hasOwnProperty(key)) {
                var pattern = new RegExp('%'+ key +'%', 'g');
                template = template.replace(pattern, constants[key]);
            }
        }

	if(this.translator) {
            for (var key in [0,1,2,3,4,5,6]) {
		var pattern = new RegExp('%DAY_' + key + '%', 'g');
		template = template.replace(pattern, this.translator.trans('days')[key].substr(0,1));
            }
	}
        return template;
    };

})();
