var imgSrcArr = ['pictures/Gan/abs0.jfif','pictures/Gan/abs1.png','pictures/Gan/abs2.png','pictures/Gan/abs3.jfif',
    'pictures/Gan/sim0.png','pictures/Gan/sim1.png','pictures/Gan/sim2.png','pictures/Gan/sim3.png'];
var img=[];


function preload(arr){
    for (var i=0; i<arr.length;i++){
        img[i]=new Image();
        img[i].src=arr[i];
    }
}

$(function(){
preload(imgSrcArr);
})
