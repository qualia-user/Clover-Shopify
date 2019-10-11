app.service('svcApi', ['$http', '$q', function ($http, $q) {
    this.selectQuery_REPO = function (_sql, sqltype) {
        var d = $q.defer();
        $http.get("api/select_users.php?interval=" + _sql + "&sqltype=" + sqltype).then(success, error);

        function success(response) {
            d.resolve(response.data);
        }
        function error(error) {
            d.reject(error);
        }
        return d.promise;
    };
}]);
