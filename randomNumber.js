async function getRandomNumber(){
    let result = await Math.floor((Math.random() * 100) + 1);
return new Promise(function (resolve, reject)
{
    setTimeout(function(){
        console.log(result)}, 500);
    });
};
getRandomNumber();
