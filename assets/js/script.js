var app = new Vue ({
  
  el : '#app',

  data:{
    arrEmail:[]
  },

  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .that ( succ =>{
      console.log(succ);
    } )
  },

  methods:{
    
  }
})