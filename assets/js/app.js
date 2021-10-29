var root = new Vue({
    el: '#root',
    data: {
        activeClass: true,
        counter: 0,
        slides: [
            {
                item: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                item: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                item: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                item: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                item: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ]
    },
    methods: {

        autoPlay: function () {
            setInterval(function () {


            }, 3000);
        },

        slideUp() {
            --this.counter;
            if (this.counter < 0) {
                this.counter = this.slides.length - 1;
            };
        },
        slideDown() {
            ++this.counter;
            if (this.counter > this.slides.length - 1) {
                this.counter = 0;
            }
            return this.slideDown()
        }
    },
    mounted() {
        this.autoPlay()
    }

})
