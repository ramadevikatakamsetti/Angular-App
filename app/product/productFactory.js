(function(){
    
    function productFactory($q,$http)
    {
        return{
            vehicles : function(){
            
            var dfd = $q.defer();
            $http.get("app/api/vehicle.json")
        
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
            
            
        };
        
    }
    
    angular.module("product").factory("productFactory",["$q","$http",productFactory])
})();