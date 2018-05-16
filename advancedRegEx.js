//Exercises
//1.	Write a function to validate HTML colours. Example #AACCFF
//2.	Given let text = `During today's presentation "Valentine Oragbakosi" presented first followed by "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna", "Ehiogu Chika Josephine" and finally "Chidera Jennifer". "Ebuka " will be presenting tomorrow.`
//Create a RegExp to return an array of all everyone in the text
//3		Given any text, write a RegExp that parses the text and returns the same text but
//		replaces every url in the text with a link.
//		e.g 'Visit http://genesystechhub.com for more information about Genesys'
//		should return 'Visit <a href="http://genesystechhub.com">genesystechub.com</a> form more information about Genesys'
//      For exercise 3  also take into consideration that the url could be ftp and could also be secured i.e `http(s)` or `ftp(s)`

//--------------VISIT https://regexr.com/ AND PASTE THE REGEX THERE FOR THE EXPLANATION OR READ THE README.MD FILE

//1. HTML colours: 
function checkColour(color){
    var pattern = new RegExp("(?:^#[a-fA-F0-9]{3,8})$", "gim");
    if (pattern.test(color)){
        return console.log(`Yeayyy, ${color} is a valid hex value`);
    }else{
        return console.log(`Oh no, ${color} aint a valid hex value`);
    }
}
checkColour('#000000e');

//2.
let text = `During today's presentation "Valentine Oragbakosi" presented first followed by "Nwosu Ifeoma Lucia" and then "Ibe Agwu" after which "Chinonso Williams Junior", "Ndife Uchenna", "Ehiogu Chika Josephine" and finally "Chidera Jennifer". "Ebuka " will be presenting tomorrow.`

var everyone = text.match(/"(?:\w\s*)+"/g);
console.log(everyone);


//3.
var data = `Visit http://genesystechhub.com/ere for more information about Genesys.`
function linkize(data){
    var urlPattern = /((?:https?|ftps?):\/\/(\w+(?:\.\w{2,})+(?:[\/\w%\+]+\/?)*))/gi;
    data = data.replace(urlPattern, `<a href="${'$1'}">${'$2'}</a>` )
    return console.log(data);
}
linkize(data);