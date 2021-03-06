define([], function () {
    function controller($scope, rdfService) {

        $scope.dialog = {
            'query': '',
            'endpoint': ''
        };

        var rdf = rdfService.create('http://plugins.linkedpipes.com/ontology/e-sparqlEndpoint#');

        $scope.setConfiguration = function (inConfig) {
            rdf.setData(inConfig);
            var resource = rdf.secureByType('Configuration');

            $scope.dialog.query = rdf.getString(resource, 'query');
            $scope.dialog.endpoint = rdf.getString(resource, 'endpoint');
        };

        $scope.getConfiguration = function () {
            var resource = rdf.secureByType('Configuration');

            rdf.setString(resource, 'query', $scope.dialog.query);
            rdf.setString(resource, 'endpoint', $scope.dialog.endpoint);

            return rdf.getData();
        };
    }
    //
    controller.$inject = ['$scope', 'services.rdf.0.0.0'];
    return controller;
});