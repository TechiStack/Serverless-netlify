
const result = document.querySelector('.result')


fetechData = async() =>{
   try{
    const {data}  = await axios.get('/api/2-basic-api')
    result.textContent = '';
    result.innerHTML = data.map((product,index)=>{
       const {image : {url} , name ,price } = product;
       return (
            `<article class="product">
             <img
                src=${url}
                alt=${name}
            />
            <div class="info">
            <h5>${name}</h5>
            <h5 class="price">${price}</h5>
            </div>
        </article>`
       )
    }).join('')
    console.log(result.innerHTML)
   }catch(err){
       console.log('error')
   }
    
}

fetechData();