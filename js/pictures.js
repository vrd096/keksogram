var instaComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var instaDescription = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];
var pictureTemplate = document.querySelector('#picture-template');
var instaArray = [];

var randomLike = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var randomString = function (param) {
    var randomParam =  param[Math.floor(Math.random() * param.length)];
    return randomParam;
 };

var CreateObject = function (value) {
    for (var i = 1; i <= value; i++) {
        var instaObject = {
            url: 'photos/' + i + '.jpg',
            likes: randomLike(15, 200),
            comments: randomString(instaComments),
            description: randomString(instaDescription)
        };  
        instaArray.push(instaObject);
    }
    return instaArray;
};
CreateObject(25);

var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;
      };
      return element;
    };

var renderCards = function () {
   var photosLink = document.querySelector('.pictures');
   var fragment = document.createDocumentFragment();

   for (var i = 0; i < instaArray.length; i++) {
    var listItem = makeElement('li', 'good');
   }
};
renderCards();

// console.log(instaArray);