var app = angular.module("SingersList", []);

app.controller("SingersController", function($scope) {

    $scope.pieces = [
        { "pic ": "Photos/Charlie.png", "singer": "Charlie Puth", "title": "We Don't Talk Anymore" },
        { "pic ": "Photos/Charlie.png", "singer": "Charlie Puth", "title": "How Long" },
        { "pic ": "Photos/Charlie.png", "singer": "Charlie Puth", "title": "Attention" },
        { "pic ": "Photos/Charlie.png", "singer": "Charlie Puth", "title": "See You Again" },
        { "pic ": "Photos/Charlie.png", "singer": "Charlie Puth", "title": "The Way I Am" },
        { "pic ": "Photos/Selena.png", "singer": "Selena Gomez", "title": "Back To You" },
        { "pic ": "Photos/Selena.png", "singer": "Selena Gomez", "title": "Wolves" },
        { "pic ": "Photos/Selena.png", "singer": "Selena Gomez", "title": "Taki Taki" },
        { "pic ": "Photos/Selena.png", "singer": "Selena Gomez", "title": "Kill Them With Kindness" },
        { "pic ": "Photos/Selena.png", "singer": "Selena Gomez", "title": "It Ain't Me" },
        { "pic ": "Photos/Shawn.png", "singer": "Shawn Mendes", "title": "Senorita" },
        { "pic ": "Photos/Shawn.png", "singer": "Shawn Mendes", "title": "Treat You Better" },
        { "pic ": "Photos/Shawn.png", "singer": "Shawn Mendes", "title": "There's Nothing Holding Me Back" },
        { "pic ": "Photos/Shawn.png", "singer": "Shawn Mendes", "title": "Stitches" },
        { "pic ": "Photos/Shawn.png", "singer": "Shawn Mendes", "title": "In My Blood" }
    ]
});