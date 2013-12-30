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

cats.service("CatsList", function () {
    var templateUrl = "http://thecatapi.com/api/images/get?format=src&type=jpg"
    var max = 2
    var adding = 2

    var generateName = function () {
        var names = ["Kitty", "Tiger", "Smokey", "Shadow", "Tigger", "Baby", "Princess", "Max", "Oreo", "Angel", "Bella", "Buddy", "Gizmo", "Midnight", "Sassy", "Patches", "Simba", "Precious", "Lucky", "Lucy", "Chloe", "Boots", "Charlie", "Callie", "Sammy", "Jack", "Pepper", "Molly", "Missy", "Kiki", "Fluffy", "Daisy", "Cleo", "Garfield", "Lily", "Cali", "Gracie", "Sophie", "Oliver", "Milo", "Toby", "Sam", "Pumpkin", "Jasper", "Sasha", "Misty", "Bailey", "Rocky", "Jasmine", "Felix", "Oscar", "Bandit", "Ginger", "Mittens", "Simon", "Peanut", "Coco", "Harley", "Lilly", "Boo", "Luna", "Cookie", "Abby", "Mimi", "Snowball", "Salem", "George", "Snickers", "Nala", "Sugar", "Leo", "Casper", "Miss kitty", "Maggie", "Trouble", "Rascal", "Cuddles", "Scooter", "Tinkerbell", "Samantha", "Buster", "Zoey", "Sadie", "Lola", "Bear", "Willow", "Spooky", "Dusty", "Zoe", "Mia", "Whiskers", "Bob", "Muffin", "Socks", "Chester", "Sheba", "Snuggles", "Loki", "Annie", "Jinx"]
        return names[Math.floor(Math.random() * names.length)];
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
    this.all = list;
    this.more = function () {
        min = this.all.length
        for (i = min; i < min + adding; i++) {
            this.all[i] = newCat()
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
