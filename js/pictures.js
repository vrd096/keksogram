var randomLike = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var randomComment = function () {
    
};

var CreateObject = function () {
    var instaObject = {};

    for (var i = 0; i <= 25; i++) {
        
        instaObject.url = 'photos/' + i + '.jpg';
        instaObject.likes = randomLike(15, 200);
        console.log(instaObject); 
    }
    
   
};
CreateObject();