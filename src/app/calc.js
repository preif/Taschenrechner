/**
 * Created by peter on 13.11.14.
 */

angular.module ('calc', [])
    .controller ("display", ['$scope',
    function ($scope) {
        $scope.editMode=function () {
            $scope.status = 'edit';
        }

        $scope.schreib = function (element) {
//            console.log ('schreib ', element);
            $scope.akku += element.toString ();
            $scope.editMode ();
        };
        $scope.rechne = function () {
            var fehler = false;
            try {
                var result = $scope.$eval ($scope.akku);
            } catch (error) {
                fehler = true;
                $scope.status = 'fehler';
                console.log ('error: ', error)
            }
            if (!fehler) {
                if (angular.isDefined(result)) {
                    $scope.akku = result.toString();
                    $scope.status = 'erfolg';
                } else {
                    console.log ('result is undefined');
                }
            }
        };
        $scope.anzeige=function() {
            return $scope.akku.length ? $scope.akku : '0';
        };
        $scope.akku = '';
        $scope.status = 'edit';
    }]);

