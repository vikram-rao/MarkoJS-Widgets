module.exports = require('marko-widgets').defineComponent({

    template: require('./template.marko'),

    handleButtonClick: function(event, el) {
        console.log("Clicked!");
    },

    init: function() {
        var el = this.el;
    },

    getInitialState: function(input) {
        return {
        };
    },

    getTemplateData: function(state, input) {
        return {
            buttonName:input.buttonName
        };
    }

});