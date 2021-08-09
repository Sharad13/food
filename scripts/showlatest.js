



async function getData(url){

    try{
        let res=await fetch(url)
        let data=res.json();
        return data
    }
     catch(e){
         console.log(e)
     }
     
    }
    
    
    function appendData(food,parent){
      
        let foods=food.meals
        foods.forEach(({strMeal,strInstructions}) => {
            let div=document.createElement("div")

            let img=document.createElement("img")
            img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodo89xKusUDk2OkhqsmZgkMd4AVDY147Hsg&usqp=CAU"
            img.setAttribute("class","imm")


            let div1=document.createElement("div")
            div1.setAttribute("class","div1")

            let name=document.createElement("p")
            name.innerText=strMeal
            name.setAttribute("class","name")

            let p=document.createElement("div")
            p.innerText=strInstructions;
            p.setAttribute("class","p1")

            div1.append(name,p)
    
            div.append(img,div1)
            parent.append(div)
        });
    }
    
    
    export {getData,appendData}