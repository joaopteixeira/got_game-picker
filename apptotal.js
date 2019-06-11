// Initialize Firebase
var config = {
  apiKey: "AIzaSyC7gRSr_RmE8zL_EQzHcBeIKboJmidxdE8",
  authDomain: "teste-e9ceb.firebaseapp.com",
  databaseURL: "https://teste-e9ceb.firebaseio.com",
  projectId: "teste-e9ceb",
  storageBucket: "teste-e9ceb.appspot.com",
  messagingSenderId: "1046430308416"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  if(user) {

  }
});


new Vue({

  el: '#noki',
  data:{
   title:'title',
    page:'index',
    player1:'',
    player2:'',
    player3:'',
    player4:'',
    player5:'',
    player6:'',
    house1:'',
    house2:'',
    house3:'',
    house4:'',
    house5:'',
    house6:''
  },
  methods:{

    generate4Houses: function (event){


      var arrayhouses = ['Stark', 'Lannister', 'Baratheon', 'Greyjoy'];

      var a = [];

      function getRandomArray(min,max){
        var A= [];
        while(max>= min) {A.push(max--);}

        A.sort(function(){return .5- Math.random()});

        return A;
      }


      a = getRandomArray(0,3);
      console.log(a[0]);
      console.log(a[1]);
      console.log(a[2]);
      console.log(a[3]);


      var hous1 = arrayhouses[a[0]];
      var hous2 = arrayhouses[a[1]];
      var hous3 = arrayhouses[a[2]];
      var hous4 = arrayhouses[a[3]];

      console.log();

      this.house1=hous1;
      this.house2=hous2;
      this.house3=hous3;
      this.house4=hous4;


    },

    mplayer1: function (event) {
      this.player1 = event.target.value;
    },
    mplayer2: function (event) {
      this.player2 = event.target.value;
    },
    mplayer3: function (event) {
      this.player3 = event.target.value;
    },
    mplayer4: function (event) {
      this.player4 = event.target.value;
    },
    mplayer5: function (event) {
      this.player5 = event.target.value;
    },
    mplayer6: function (event) {
      this.player6 = event.target.value;
    },

    mudaLink: function (event) {
      this.link = event.target.value;

    },
    ranfloat: function (event) {
      this.numero = Math.random();

    },



    contador: function (event) {
      this.cont++;
      if (this.cont > 10) {
        this.cont=this.cont+9;
      }

      if (this.cont > 300) {
        this.title = 'OVER';
        this.cont=0;
      }
    },
    nameAge: function (event) {
      this.name = event.target.value;
    }
  }

});
