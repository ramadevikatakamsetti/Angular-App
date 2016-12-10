(function(){
    
            function customLogo(){
                
                return{
                
                template:'<a href="#" class="navbar-brand">{{brandName}}</a>',
                restrict:"A,C"
                };
            }
            
            function customHead(){
                
                return{
                    
                    templateUrl :"app/custom/customHeader.html",
                    restrict:"A,E,C",
                   transclude: true
                    
                    
                };
            }
    
            function customClick(){
                
                return {
                    
                    restrict:"A",
                    link:  function(scope,ele,attrs){
//                        console.log(attrs);
//                        console.log(scope);
                        ele.bind("click",function(){
                            var clickfun = attrs["customClick"];
                            scope.$eval(clickfun);
                            $apply
                            
                        });
                    }
                };
            }
    

    angular.module("custom").directive("customLogo",[customLogo])
    .directive("customHead",[customHead])
    .directive("customClick",[customClick]);
})();