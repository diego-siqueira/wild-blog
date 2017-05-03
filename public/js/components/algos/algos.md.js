
import algo1 from './algo1/algo1'
import algo2 from './algo2/algo2'

let algosModule = angular.module('app.algos', [])
    .component('algo1', algo1)
    .component('algo2', algo2)
    .config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('algos', {
                url: '/algos',
                // abstract: true,
                templateUrl: 'js/components/algos/algos.html'
            })
    }])
    .name

export default algosModule
