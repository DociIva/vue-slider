/**
 * Vue slider 
 */
const app = new Vue({
    el: '#app',
    data: {       
        photos: [  
            './image/tiger-jpg.jpg',
            './image/cervo.jpg',
            './image/gatto.jpg',
            './image/delfini.jpg'
        ],
        indexPhoto: 0, 
        intervalId: 0,
    }, 
    created() {
        // cret istanza Vue
        console.log('Creato!')
        this.startLoop();
    },
    
                  // avanti e inditro delle foto 
    methods: {
        prevPhoto() {
            this.indexPhoto -= 1;
            
            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1  
            }
        },
        nextPhoto() {
            this.indexPhoto += 1;

            if(this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },
        setPhoto(index) {
            console.log(index);
            this.indexPhoto = index;
        },
           // per il timer inizio
        startLoop() {
            this.intevalId = setInterval(() => {
               this.nextPhoto();
            }, 3000);
        },  // sotp quando sei sopra
        stopLoop() {
            clearInterval(this.intevalId);
        }
    }

});