cats = angular.module("cats", [])

cats.directive("enter", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function () {
            element.addClass(attrs.enter)
        })
        element.bind("mouseleave", function () {
            element.removeClass(attrs.enter)
        })
    }
})

cats.directive("more", function() {
    return function(scope, element, attrs) {
        element.bind("mouseover", function () {
            scope.more()
        })
    }
})

cats.factory("CatsList", function () {
    var templateUrl = "http://thecatapi.com/api/images/get?format=src&type=jpg"
    var max = 2
    var adding = 2

    var generateName = function () {
        return "Tom"
    }
    var generateImage = function () {
        return templateUrl + "&random=" + Math.floor(Math.random() * 1000)
    }
    var newCat = function() {
        return {
            name: generateName(),
            avatar: generateImage()
        }
    }
    var list = []
    for (i = 0; i < max; i++) {
        list[i] = newCat()
    }
    return {
        all : list,
        more : function () {
            min = list.length
            for (i = min; i < min + adding; i++) {
                list[i] = newCat()
            }
        }
    }
})

CatsController = function($scope, CatsList) {
    this.list = CatsList
    $scope.more = function() {
        $scope.$apply(function() {
            CatsList.more()
        })
    }
}
