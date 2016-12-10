(function(){
    
    function phoneFilter(){
        
        
        function IndianFormat(input){
            
            var str=input.toString();
            var firstStr=str.substring(0,5);
            var secondStr=str.substring(5,10);
            
            return firstStr+ '-' +secondStr;
        }
        
        function UsFormat(input)
        {
            var phone=input.toString();
            return phone.substring(0,3)+"-"+phone.substring(3,6)+"-"+phone.substring(6,10);
        }
        return function(input,criteria){
            if(input && input.toString().length==10){
                if(criteria == 'IN'){
                    return IndianFormat(input);
                }
                else
                    return UsFormat(input);
            }
            return input;
                
        }
    }
    
    angular.module("custom").filter("phoneFilter",[phoneFilter]);
})();