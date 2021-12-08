// Solving problems using array functions on rest countries data.


// 1.Get all the countries from Asia continent /region using Filter function

var req= new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function()
{
    var result=JSON.parse(req.response);
    //console.log(result);
    
    
        var res=result.filter((element)=>{
            if(element.region==='Asia')
            {
                return element.name;
            }
        })
        console.log(res);   
}


// 2.Get all the countries with a population of less than 2 lakhs using Filter function

var req= new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function()
{
    var result=JSON.parse(req.response);
    //console.log(result);

    var population=result=result.filter((element)=>
    {
        if(element.population<200000)
        {
            return element.name;
        }
    })
    console.log(population);
}

// 3.Print the following details name, capital, flag using forEach function

var req= new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function()
{
    var result=JSON.parse(req.response);
    result.forEach(element => {
        console.log(element.name,element.capital,element.flag);
        
    });
}

//4.Print the total population of countries using reduce function

var req= new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function()
{
    var result=JSON.parse(req.response);
    const pop =result.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(pop);
}

//5.Print the country which uses US Dollars as currency

var req= new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function()
{
    var result=JSON.parse(req.response);
    //console.log(result);
    try
    {
    for(var i=0;result.length;i++)
    {
        if(result[i].currencies[0].code==="USD")
        {
            console.log(result[i].name,result[i].currencies[0].code);
        }
    }
    }
    catch(e)
    {
    console.log("invalid");
    }
}

















