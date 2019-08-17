//creating  budgetController module (keeps track for all incomes and expenses)
var budgetController = (function() {
    
    //function constructor (class)
   var Expense = function(id, description, value) {
       this.id = id;
       this.description = description;
       this.value = value;
       this.percentage = -1;
       };
    
   
   Expense.prototype.calcPerc = function(){
       
       if(data.totals.inc > 0){  
       this.percentage = Math.round(this.value/data.totals.inc * 100)
       }
       else{this.percentage = -1}
       };
       
   Expense.prototype.getPerc = function(){
           return this.percentage;
       }
       
    
      
   var Income = function(id, description, value) {
       this.id = id;
       this.description = description;
       this.value = value;
   };
    
    // exactly like a dictionary
   var data = {
        allItems:{
            exp: [],
            inc: [],
        },
        totals:{
            exp: 0,
            inc: 0,
        }
    }
    
    
    return {
        
       addData: function(type, des, val){
            var newItem, ID, len;
            len = data.allItems[type].length;
            
            
            if (len > 0 ){
                ID = data.allItems[type][len - 1].id + 1;
            }
            else {ID = 0;}
            
            if (type === 'inc'){
                var newItem = new Income(ID,des,val);
            }
            
            else if (type === 'exp'){
                var newItem = new Expense(ID,des,val);     
            }
            
                        
            data.allItems[type].push(newItem); 
            data.totals[type] += data.allItems[type][ID].value; 
                     
            return newItem;                             
    },
        
        
       removeData: function(id,type){
           
       var ids =  data.allItems[type].map(function(current){
            return current.id; }); 
           
        // get the real index of the id
         var ind = ids.indexOf(id);
           
        //update total value
           
        if (ind !== -1){
            data.totals[type] -= data.allItems[type][ind].value;
            //remove the deleted item  
            data.allItems[type].splice(ind,1);
        
        }
        },
        
        
       calcExpPerc: function(){
         
         data.allItems.exp.forEach(function(cur){
             cur.calcPerc();
              })
            
         }, 
        
       getExpPerc: function(){
         var percs;
         percs = data.allItems.exp.map(function(cur){
             return cur.getPerc();
              })
            return percs;
         }, 
        
        
       calcbudget: function(){
         
         var budget = data.totals.inc - data.totals.exp;
         
         return budget;
         
     },   
        
        
       calcPerc: function(){
        var perc;
     
        if(data.totals.inc === 0){
                 perc = '---';
             }
             else 
             {
                  perc = Math.round(data.totals.exp/data.totals.inc * 100) + '%';
             }
        return perc;
    
},
                        
                        
       getData: function(){
            
            return data;
            
         }

    
};
    
})(); 



//creating UI module
var UIController = (function() {
    
    // this obj is used to arrange all DOMs 
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn',
        incomeValue: '.budget__income--value',
        expValue: '.budget__expenses--value',
        expPerc: '.budget__expenses--percentage',
        budget: ".budget__value",
        incomeContainer: ".income__list",
        expContainer: ".expenses__list",
        container: ".container",
    }
    
    
     return {
         getInput: function(){
            return {
                
                 type: document.querySelector(DOMstrings.inputType).value,  // will be + or -              
                 discription: document.querySelector(DOMstrings.inputDescription).value,
                 value: parseInt(document.querySelector(DOMstrings.inputValue).value),
         };
         },
         
         
         getDOMstrings: function(){
            return DOMstrings;
         },
         
         
         addListItem: function(obj,perc, type){
             
             var html,newHtml, element
             
            // create HTML string with placeholder in it     
            if(type === 'inc')     
            {
                element = DOMstrings.incomeContainer;
                
                html =  '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn" ><i class="ion-ios-close-outline"></i></button></div></div></div>' ;
            }
             
             else if (type === 'exp')
            {
                element = DOMstrings.expContainer;
               
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">%perc%</div><div class="item__delete"><button class="item__delete--btn" ><i class="ion-ios-close-outline"></i></button></div></div</div>';
            } 
             
             //replace the placeholder text with actual data
             newHtml = html.replace('%id%' , obj.id );
             newHtml = newHtml.replace('%description%' , obj.description);
             newHtml = newHtml.replace('%value%' , obj.value );
             newHtml = newHtml.replace('%perc%' ,perc);
             
             // insert html text to the DOM
           
             document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); // this will insert it as the last chiled of the specified element
             
         },        
         
         
         clearFields: function(){
             var field, arrField;
             
             field = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
             
             arrField = Array.prototype.slice.call(field);
             
             console.log(arrField[0].value);
             
             arrField.forEach(function(current, index, array){
                 current.value = '';
             });
             
             
             //point to desc field when finish
             arrField[0].focus();
             
             
         },
         
         
         addBudjet: function(){
            var DOM = DOMstrings;
            var allData = budgetController.getData();
            var perc = budgetController.calcPerc();
            var budget = budgetController.calcbudget();
            
             
            document.querySelector(DOM.expValue).textContent = allData.totals.exp;
            document.querySelector(DOM.incomeValue).textContent =allData.totals.inc;
            document.querySelector(DOM.expPerc).textContent = perc ;
            document.querySelector(DOM.budget).textContent = budget;
             
        },
         
         removeListItem: function(id){
        element = document.getElementById(id);
        element.parentNode.removeChild(element);
         },
         
         updateExpList: function(cllBack){
             var element;
            
             element = document.querySelectorAll(".item__percentage");
             p = budgetController.getExpPerc();
             
             
             expTrace = function(list, callBack){
                 for (var i= 0 ; i< element.length; i++){
                 callBack(list[i],i);
             }
                 
             }
                expTrace(element, function(current, index){
                    current.textContent = p[index] + '%';
                })
                              
         },
     };
    
    
})(); 




//module to connect the previous two ones
var controller = (function(budgetCntrl,UICntrl) {
    
    //setup event lestiners 
    var setupEventListeners = function ()
        {
        document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13 ){
            console.log('Enter key was pressed');
            cntrlAddItem();
           }
    });
        document.querySelector(DOM.addButton).addEventListener('click',cntrlAddItem);
        document.querySelector(DOM.container).addEventListener('click',deleteItem);
        }
     
    //call this method to use all DOMs
    var DOM = UICntrl.getDOMstrings();
    
    
    var cntrlAddItem = function(){   
        
        // 1. get the field input data
        var inputData = UICntrl.getInput();
        
        // check empty fields
        if(inputData.discription !== '' && !isNaN(inputData.value) && inputData.value > 0)
            {
                
            // 2. add the item to the budget controller UI
            var newItem = budgetCntrl.addData(inputData.type, inputData.discription, inputData.value);

            UICntrl.addBudjet();



             // 3. display itemlist on UI
            budgetCntrl.calcExpPerc();
            var expPerc = budgetCntrl.getExpPerc();
            var item = UICntrl.addListItem( newItem, expPerc[newItem.id], inputData.type);

            //delete button       
            //document.querySelector(DOM.delete).addEventListener('click',deleteItem);


            //clear fields
            UICntrl.clearFields();
                
            //update expense percentage
            UICntrl.updateExpList();
                
            }
        
    }
    
    
    var updateBudget = function(){
        
        budgetCntrl.calcbudget();
        UICntrl.addBudjet();
    }
    
    
    var deleteItem = function(event){
        
         // once we click on delete butn we get the id of the deleted item
        var itemId, splitId, ID, type;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
       
        //extract ID and type from the click 
        if (itemId){
            splitId = itemId.split('-');
            type =  splitId[0];                      
            ID = parseInt(splitId[1]); 
            
        // 1- delete item data     
        budgetCntrl.removeData(ID,type);
           }
        
         // 2- delete item from UI
        UICntrl.removeListItem(itemId);
        
        // 3- update the budjet
        updateBudget();
        
        
        //update expense percentage
        if (type === 'inc'){
            console.log('EXP WILL BE UPDATED')
            
        budgetCntrl.calcExpPerc();
        UICntrl.updateExpList();
    
                                   }
    }
    
    return { 
        init: function(){
                setupEventListeners();
            },
           };

    })(budgetController, UIController); 


controller.init();





















