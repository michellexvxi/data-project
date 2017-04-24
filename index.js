function getLADataFromAPI(){
    var endpoint = 'https://controllerdata.lacity.org/resource/f3p3-3myx.json'
    
    fetch(endpoint)
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log (json)
        var resultDiv= document.getElementById('result')
        
        var finalHTML = ''
        
        json.forEach(function(item){
            var card = 
            `
            <div class="col s6 m4">
              <div class="card">
                <div class="card-image">
                  <img class="image-for-card" src="http://i2.cdn.turner.com/money/dam/assets/141027150129-gender-gap-infographic-1024x576.jpg">
                  <span class="card-title">${item.department_title}</span>
                </div>
                <div class="card-content">
                  <p>
                    Men earn an average salary of ${item.male_average_salary} and females earn an average salary of ${item.female_average_salary} 
        // }      
                  </p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>            
            `
            finalHTML += card
        })
        
        
        
       // resultDiv.innerHTML =JSON.stringify(json,undefined,2)
        // var wantedData = json.map(function (item){
        //     var title = item.department_title
        //     var fSalary = item.female_average_salary
        //     var mSalary = item.male_average_salary
        //     return 'For the '+ title +'department, men earn an average salary of '+mSalary +'and females earn an average salary of '+ fSalary + "."
        // })
        // var htmlForWantedData= wantedData.map(function(string){
        //     return '<li>'+ string + '</li>'
        // })
        // var finalhtml= ''
        // htmlForWantedData.forEach(function(listItem){
        //     finalhtml += listItem
        // })
        resultDiv.innerHTML = finalHTML
    })
    
    .catch (function(error) {
        console.log(error)
    })
    
}