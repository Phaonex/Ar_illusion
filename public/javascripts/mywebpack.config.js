/**
 * Created by souzaalves on 22/11/2016.
 */
var Vue = require('vue');
Vue.use(require('vue-resource'));

new Vue({
    el: '#my_view',
    data: {
        origin: ''
    },

    ready: function() {

        // GET request
        this.$http.get('http://httpbin.org/ip', function (data, status, request) {

            // set data on vm
            this.$set('origin', data)

        }).error(function (data, status, request) {
            // handle error
        })
    }
})