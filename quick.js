var imgSrcArr = ['pictures/Gan/abs0.png','pictures/Gan/abs1.png','pictures/Gan/abs2.png','pictures/Gan/abs3.png',
    'pictures/Gan/sim0.png','pictures/Gan/sim1.png','pictures/Gan/sim2.png','pictures/Gan/sim3.png',
'pictures/Gan/imp0.png','pictures/Gan/imp1.png','pictures/Gan/imp2.png','pictures/Gan/imp3.png'];
var imgWrap=[];


function preload(arr){
    for (var i=0; i<arr.length;i++){
        imgWrap[i]=new Image();
        imgWrap[i].src=arr[i];
    }
}

$(function(){
preload(imgSrcArr);
})
