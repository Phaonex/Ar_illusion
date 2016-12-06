/**
 * Created by souzaalves on 08/11/2016.
 */


var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('app-links', {
    props: ['link'],
    template: '<li><a v-bind:href="link.url">{{ link.links }}</a></li>'
});
var app7 = new Vue({
    el: '#app-nav',
    data: {
        pages: [
            { links: 'home', url: '#home' },
            { links: 'services', url: '#services' },
            { links: 'reference', url: '#reference' },
            { links: 'about', url: '#about' },
            { links: 'contact', url: '#contact' }
        ]
    }
});

Vue.component('app-find', {
    props:['searchble'],
    template: '<input type="search" v-bind:value="searchble" placeholder="search">'
});
var app8 = new Vue({
    el: '#app-search',
    data: {
        searchble: []
    }
});

var indicators = {
    props: ['img'],
    template: '<div class="slidersindicators">{{img.idx}}</div>'
};

var img = {
    props: ['img'],
    template: '<img src="images/slide/slideimage.png"  alt="slide images">'
};


var tempSlider = {
    props: ['img'],
    template: '<div>' +
    '<img src="images/slide/slideimage.png" alt="slide images">' +
    '<a href="" class="fordward"> > </a>' +
    '<app-indicators-links v-for="item in img" v-bind:img="item"></app-indicators-links>' +
    '<a href="" class="back"> < </a>' +
    '</div>'
};

Vue.component('app-temp',{
    props:['slideImg'],
    template: '<div>' +
    '<img :src="links[idx]" alt="slide images">' +
    '<a href="" class="fordward"> > </a>' +
    '<div class="slidersindicators" v-for="(value, key, index) in links"  v-on:click="idx = key" >{{key}}</div>' +
    '<a href="" class="back"> < </a>' +
    '</div>',
    data: function(){

        return slideImg ={links: [
            'images/slide/slideimage.png',
            'images/slide/steps.png',
            'images/slide/ironman.jpeg',
            'images/slide/adidas.jpg',
            'images/slide/images-1.jpeg',
        ],idx:0}


    },

    methods: {
        imgChange: function (event) {
            // `this` inside methods points to the Vue instance

            // `event` is the native DOM event
            this.idx++
        }
    }

});

var app9 = new Vue({
    el: '#app-slide',
    /*components:{
        'app-indicators-links': indicators,
        'app-img-slider': img,
        'app-temp': tempSlider

    },*/
});

var tempTestemonial = {
    props: ['witness'],
    template: '<div>' +
    '<img src="" id="teste_1" class="picFrame"/>' +
    '<h3>{{ witness.title }}</h3>'+
    '<p>{{ witness.text }}</p>' +
    '</div>'
};

Vue.component('app-testimonial', {
    props: ['link'],
    template: '<div>' +
    '<img :src="link.links" :id= "link.idx[1]"  class="picFrame"/>' +
    '<h3>{{ link.title }}</h3>'+
    '<p>{{ link.text }}</p>' +
    '</div>'
});

var app7 = new Vue({
    el: '#app-testemonial',
    data: {
        witness: [
            { links: '/images/googleGlass.png', idx: [1,'teste_1'],  title: 'IT\'S NOT A FUTURISTIC DREAM, IT’S HERE NOW.',
                text: 'Augmented reality (AR) is cutting-edge technology that allows for a digitally enhanced view of the real world, connecting you with more meaningful content in your everyday life.'
            },
            { links: '/images/arthur2.png', idx: [2,'teste_2'], title: 'RR INLUSION leads the way in augmented reality and interactive print.',
                text: 'Helping to bridge the gap between the print and digital worlds. The Layar App has been downloaded over 38 million times is used by over 80,000 publishers and editors.'
            },
            { links: '/images/holoMan.png', idx: [3,'teste_3'], title: 'We believe in augmented reality',
                text: 'It has the power to effect change in the way people discover and interact with useful and educational information. Our Sponsored Pages program – which provides Creator credits to educatorsgrowth in the global community.'
            }
        ]
    },
    methods: {
        imgChange: function (event) {
            // `this` inside methods points to the Vue instance
            alert('Hello ' + this.name + '!');
            // `event` is the native DOM event
            alert(event.target.tagName)
        }
    }
});


var social = {
    props: ['social'],
    template: '<a  v-bind:href="social.links" class="partners"></a>',

};
var app10 = new Vue({
    el: '#partners',
    components:{
        'app-socials': social

    },
    data: {
        socials: [
            { links: 'https://de.yahoo.com/', idx: 1 },
            { links: 'https://www.facebook.com/', idx: 2 },
            { links: 'https://www.google.com/', idx: 3 },
            { links: 'https://www.twitter.com/', idx: 4 },
            { links: 'https://www.apple.com/', idx: 5 },
            { links: 'https://www.microsoft.com/', idx: 6 }
        ]
    }
});

var listas = {
    props: ['items'],
    template: '<ul>' +
    '<li v-for="(value, key, index) in list" >{{value}}</li>' +
    '</ul>',
    data:function() {
        return Items = {list:['hello']}
    }
};

var ItemsVue = new Vue({
    el: '#Itemlist',
    components:{
        'app-listas': listas,
        'app-social': social

    },
    ready: function() {

        // GET request
        this.$http.get('http://httpbin.org/ip', function (data, status, request) {

            // set data on vm
            this.$set('Items', data)

        }).error(function (data, status, request) {
            // handle error
        })
    }
});

var appVue = new Vue({
    el: '#my_view',
    data: {
        origin: ''
    },

    ready: function() {

        // GET request
        this.$http.get('http://httpbin.org/ip', function (data) {
            // set data on vm
            this.$set('origin', data)

        }).error(function (data, status, request) {
            // handle error
        })

    }
});

