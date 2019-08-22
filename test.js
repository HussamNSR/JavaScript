//PARK CLASS

class park {
    
constructor(name, buildYear, trees, area){     
    this.name = name;
    this.buildYear = buildYear;
    this.trees = trees;
    this.area = area;
      
} 
    
treeDensity(){
    return this.trees/this.area;
}
    
}
    
let allParks = [new park('arada', 2005, 2000, 5),new park('baga', 2009, 3000, 10)];


   
 function calc(arr){
    let sum= arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum/arr.length]
}
    
 function parkReports(p){
     const ages =  p.map(el => new Date().getFullYear() - el.buildYear);
     const [totalAge, avgAge] = calc(ages);
     
     //printing average age
     console.log(`our ${p.length} parks have an average age of ${avgAge} years.`)
     
     // printing density
     p.forEach(el => console.log(`${el.name} park has a tree density of ${el.treeDensity()} trees per square km.`))
     
     //more than 1000 tree
     let x = p.map(el => {if(el.trees > 1000)  {return el.trees} })
     x[1] === undefined ? x.pop() : x = x;  
     let i = x.map(el => x.indexOf(el));
     i.forEach(el => (console.log(`${p[el].name} park has more than 1000 trees`)))
     }  

    parkReports(allParks);




/*

// STREET CLASS

let streetNumb = 0;
let totalLength = 0;
class street {
constructor(name, buildYear, length, sizeClass){     
    this.name = name;
    this.buildYear = buildYear;
    this.length = length;
    this.sizeClass = sizeClass;
    streetNumb+=1;
    totalLength+=this.length; 
    
} 
    
static calcAveLength() {
    return totalLength/streetNumb;
}


let a = new street('alburg', '2005', 10, 'normal');
let b = new street('baga', '2009', 300, 10);

*/
