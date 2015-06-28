;(function(window) {

angular.module('app', [])

// Define directives hereangular.module('app', [])
.directive('tab', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
    scope: { },
    link: function(scope, elem, attr) {}
  }
})

.directive('tabset', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: { },
    templateUrl: '../Views/tabset.html',
    bindToController: true,
    controllerAs: 'tabset',
    controller: function() {
      var self = this
      self.tabs = []
    }
  }
})

})(window);