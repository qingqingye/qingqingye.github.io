var imgSrcArr = ['pictures/Gan/imp0.png','pictures/Gan/imp1.png','pictures/Gan/imp2.png','pictures/Gan/imp3.png'];
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
