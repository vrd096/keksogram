var instaComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var instaDescription = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

var randomLike = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var randomString = function (param) {
    var randomParam =  param[Math.floor(Math.random() * param.length)];
    return randomParam;
 };

var CreateObject = function () {
    var instaObject = {number: 1};
    var instaArray = [];
    for (var i = 1; i <= 25; i++) {
        instaObject.number = 1;
        instaObject.number++;
        // instaObject.url = 'photos/' + i + '.jpg';
        // instaObject.likes = randomLike(15, 200);
        // instaObject.comments = randomString(instaComments);
        // instaObject.description = randomString(instaDescription);
        
        // console.log(instaObject);
        instaArray.push(instaObject.number);
        
    }
    // for (var i = 0; i < instaArray.length; i++) {
    //     instaObject.url = 'photos/' + i + '.jpg';
    //     instaObject.likes = randomLike(15, 200);
    //     instaObject.comments = randomString(instaComments);
    //     instaObject.description = randomString(instaDescription);
    // }
    console.log(instaArray); 
   
};
CreateObject();