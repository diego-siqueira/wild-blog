
import algo1 from './algo1/algo1'

let algosModule = angular.module('app.algos', [])
    .component('algo1', algo1)
    .config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('algos', {
                url: '/algos',
                abstract: true,
                templateUrl: 'js/components/algos/algos.html'
            })
            .state('algos.algo1', {
                url: '/algo1',
                template: '<algo1></algo1>'
            })
    }])
    .name

export default algosModule
