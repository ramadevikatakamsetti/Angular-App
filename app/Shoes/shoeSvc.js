(function(){
    
    
angular.module("shoes").service("shoeSvc",["$q","$http",function($q,$http){
    
    this.shoes=function(){
        
        var dfd = $q.defer();
            
            $http.get("app/api/shoeProducts.json")
            .then(function(response)
            {
            dfd.resolve(response)
            })
                .catch(function(error)
            {
            dfd.reject(error)
            });
        return dfd.promise;
    }
}]);
    
})();

