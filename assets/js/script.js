var app = new Vue ({
  
  el : '#app',

  data:{
    arrEmail:[]
  },

  mounted(){
    for(let i = 0; i < 10; i++){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then ( succ =>{
        
        this.arrEmail.push(succ.data.response);
        console.log(arrEmail);
      } )
      .catch ( err =>{
        console.log(err);
      })
      
    }
    
  },

  methods:{

  }
})