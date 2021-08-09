function navbar(){

    return ` <div id="navbar">
    <h3><a href="/">Home</a></h3>
   
    <div class="options">
    <input oninput="returned_function(500,network_request())" type="text" id="inputt" placeholder="search">
        <h3><a href="foodDay.html">Food of the day</a></h3>
        <h3><a href="latest.html">Latest Recipes</a></h3>
        
   
    </div>
   </div>
   <div id="data"></div>`

   
   
   }
   
   export default navbar