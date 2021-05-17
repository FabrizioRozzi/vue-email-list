var app = new Vue ({
  
  el : '#app',

  data:{
    arrEmail:[]
  },

  mounted(){
    for(let i = 0; i < 10; i++){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then ( succ =>{
        
        this.arrEmail[i]=succ.data.response;
        
      } )
      .catch ( err =>{
        console.log(err);
      })
      
    }
    
  },

  methods:{

  }
})