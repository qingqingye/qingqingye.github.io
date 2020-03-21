var imgSrcArr = ['pictures/Gan/imp0.jfif','pictures/Gan/imp1.jfif','pictures/Gan/imp2.jfif','pictures/Gan/imp3.jfif'];
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
