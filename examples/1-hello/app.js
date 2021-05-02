const result  = document.querySelector('.result');

fetechData  = async()=>{
    try{
      const { data }  = await axios.get('/api/1-hello');
      result.textContent = data;
      console.log(data);
    }catch(err){
        console.log(err);
    }
}


//Axios made a callout to function
fetechData();