new Vue({

  el: '#exercise',
  data:{
    arrayhouses:['Stark', 'Lannister', 'Baratheon', 'Greyjoy', 'Martel', 'Tyrel'],
    array4houses:['Stark', 'Lannister', 'Baratheon', 'Greyjoy'],
    title:'title',
    jogo:'',
    resultads:[''],
    buttonColor4:'',
    buttonColor6:'',
    buttonColor3:'',
    buttonColor5:'',
    quatroplayer1:'',
    quatroplayer2:'',
    quatroplayer3:'',
    quatroplayer4:'',
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
    generate3Houses: function (event){


      var arrayhouses = ['Stark', 'Lannister', 'Baratheon'];

      var a = [];

      function getRandomArray(min,max){
        var A= [];
        while(max>= min) {A.push(max--);}

        A.sort(function(){return .5- Math.random()});

        return A;
      }


      a = getRandomArray(0,2);

      console.log();

      this.house1=arrayhouses[a[0]];
      this.house2=arrayhouses[a[1]];
      this.house3=arrayhouses[a[2]];



    },

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

    generate5Houses: function (event){


      var arrayhouses = ['Stark', 'Lannister', 'Baratheon', 'Greyjoy','Tyrel'];

      var a = [];

      function getRandomArray(min,max){
        var A= [];
        while(max>= min) {A.push(max--);}

        A.sort(function(){return .5- Math.random()});

        return A;
      }


      a = getRandomArray(0,4);
      console.log(a[0]);
      console.log(a[1]);
      console.log(a[2]);
      console.log(a[3]);

      console.log();

      this.house1=arrayhouses[a[0]];
      this.house2=arrayhouses[a[1]];
      this.house3=arrayhouses[a[2]];
      this.house4=arrayhouses[a[3]];
      this.house5=arrayhouses[a[4]];

    },

    generateHouses: function (event){


      var arrayhouses = ['Stark', 'Lannister', 'Baratheon', 'Greyjoy', 'Martel', 'Tyrel'];

      var a = [];

      function getRandomArray(min,max){
        var A= [];
        while(max>= min) {A.push(max--);}

        A.sort(function(){return .5- Math.random()});

        return A;
      }


      a = getRandomArray(0,5);
      console.log(a[0]);
      console.log(a[1]);
      console.log(a[2]);
      console.log(a[3]);
      console.log(a[4]);
      console.log(a[5]);

      var hous1 = arrayhouses[a[0]];
      var hous2 = arrayhouses[a[1]];
      var hous3 = arrayhouses[a[2]];
      var hous4 = arrayhouses[a[3]];
      var hous5 = arrayhouses[a[4]];
      var hous6 = arrayhouses[a[5]];

      console.log();


      this.house1=hous1;
      this.house2=hous2;
      this.house3=hous3;
      this.house4=hous4;
      this.house5=hous5;
      this.house6=hous6;


    },
    quatromplayer1: function (event) {
      this.player1 = event.target.value;
    },
    quatromplayer2: function (event) {
      this.player2 = event.target.value;
    },
    quatromplayer3: function (event) {
      this.player3 = event.target.value;
    },
    quatromplayer4: function (event) {
      this.player4 = event.target.value;
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
    jogo3: function (jogo) {
      return this.jogo = '3',this.buttonColor3 = 'green',this.buttonColor4 = 'grey',this.buttonColor5 = 'grey',this.buttonColor6 = 'grey';

    },

    jogo4: function (jogo) {
      return this.jogo = '4',this.buttonColor4 = 'green',this.buttonColor3 = 'grey',this.buttonColor5 = 'grey',this.buttonColor6 = 'grey';

    },

    jogo5: function (jogo) {
      return this.jogo = '5',this.buttonColor5 = 'green',this.buttonColor3 = 'grey',this.buttonColor4 = 'grey',this.buttonColor6 = 'grey';

    },

    jogo6: function (jogo) {
      return this.jogo = '6',this.buttonColor6 = 'green',this.buttonColor4 = 'grey',this.buttonColor3 = 'grey',this.buttonColor5 = 'grey';

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
