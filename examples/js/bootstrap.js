import angular from 'angular';
import angularMessages from 'angular-messages';
import Joi from 'asilluron/joi-browserify';
window.Joi = Joi;
import lion from 'lionjs';



export function bootstrap() {
    System.import('../model.json!').then(function (json) {
        var lionModule = lion(json);
        angular.module('lionApp', ['ngMessages', 'textForms'])
            .controller('AppCtrl', ['$scope', function ($scope) {
                $scope.firstName = "";
                $scope.lastName = "";
            }]);

        angular.element(document).ready(function () {
            angular.bootstrap(document, ['lionApp']);
        });
    });
}
