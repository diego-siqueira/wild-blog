let algo2 = {
  templateUrl: 'js/components/algos/algo2/algo2.tp.html',
  controller: ['$stateParams', '$state', function($stateParams, $state) {
    'use  strict'

    this.numberTest = 14928418679754190000

    let times = 0
    let paper = 0.0001

    function foldTo(distance) {
      if (distance <= 0) {
        return null
      }
      while (paper < distance) {
        paper = paper * 2
        times++
      }
    }

    foldTo(this.numberTest);
    this.timesFold = times

  }]
}

export default algo2
