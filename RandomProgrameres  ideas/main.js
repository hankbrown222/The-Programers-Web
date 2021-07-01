const siteButton = document.querySelector('.clickMeBtn')
const listOfSites = ['https://bit.ly/2TatnFD', 'https://bit.ly/2U5WIRz', 
'https://bit.ly/3y6O4Rv', 'https://bit.ly/2SBXV2L', 'https://bit.ly/3hkGVX6' ]
let counter = 0;
const randomNumberGen = Math.floor(Math.random()* listOfSites.length)
const randomSite = listOfSites[Math.floor(Math.random()* listOfSites.length)]

const restingSite = setInterval(function(){
    const randomNumberGen = Math.floor(Math.random()* listOfSites.length)
    if(counter > 4){
        counter = 0;
    }
    counter ++;
}, 4000);

setTimeout(function(){
    window.location.reload(1);
 }, 5000);

function openSites(){
    if(randomNumberGen === 0){
        window.open('https://bit.ly/2TatnFD')
    } else if(randomNumberGen === 1){
        window.open('https://bit.ly/2U5WIRz')
    } else if(randomNumberGen === 2){
        window.open('https://bit.ly/3y6O4Rv')
    } else if(randomNumberGen === 3){
        window.open('https://bit.ly/2SBXV2L')
    } else if(randomNumberGen === 4){
        window.open('https://bit.ly/3hkGVX6')
    }
}
siteButton.addEventListener('click', openSites);
