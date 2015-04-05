/**
 * Created by MTA on 4/5/2015.
 */


app.service("stdService", function ($http, $q){

    this.saveStudent = function(std){
        var deferred = $q.defer();
        $http.post("/api/addStudent", std)
            .error(function(){
                deferred.reject();
            })
            .success(function(serverResponse){
                if(serverResponse.status == true){
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
            });

        return deferred.promise;
    };
});