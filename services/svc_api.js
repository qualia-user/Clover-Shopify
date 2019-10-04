app.service('svcApi', ['$http', '$q', function ($http, $q) {
    this.selectQuery_REPO = function () {
        var d = $q.defer();
        $http.get("api/select_users.php").then(success, error);

        function success(response) {
            d.resolve(response);
        }
        function error(error) {
            d.reject(error);
        }
        return d.promise;
    };
}]);
