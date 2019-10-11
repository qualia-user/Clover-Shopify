app.service('svcApi', ['$http', '$q', function ($http, $q) {
    this.selectQuery_REPO = function (interval, intervaltype) {
        var d = $q.defer();
        $http.get("api/select_users.php?interval=" + interval + "&intervaltype=" + intervaltype).then(success, error);

        function success(response) {
            d.resolve(response.data);
        }
        function error(error) {
            d.reject(error);
        }
        return d.promise;
    };
}]);
