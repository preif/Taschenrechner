/**
 * Created by peter on 13.11.14.
 */

angular.module ('calc', [])
    .controller ("display", ['$scope',
    function ($scope) {
        $scope.schreib = function (element) {
            console.log ('schreib ', element);
            $scope.akku += element.toString ();
        };
        $scope.rechne = function () {
            var result = $scope.$eval ($scope.akku);
            if (angular.isDefined(result)) {
                $scope.akku = result.toString();
            } else {
                console.log ('result is undefined');
            }
        };
        $scope.anzeige=function() {
            return $scope.akku.length ? $scope.akku : '0';
        };
        $scope.akku = '';
    }]);

