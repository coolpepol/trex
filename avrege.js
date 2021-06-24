var raj = {
    iscool:true,
    fingers:20,
    head:3,
    nose:false,
    gills:17
}


var num = [1,2,3,4,5,67,34,9,0,45,200] 
var sum = 0
var sprites
var s1 ,s2,s3,s4,s5  

function setup (){
console.log(raj.gills)
console.log(raj)



for(var i =0;i<num.length;i+=1){
    sum+=num[i]

}
s1 = createSprite(200,200,20,20)
s2 = createSprite(260,200,20,20)
s3 = createSprite(320,200,20,20)
s4 = createSprite(380,200,20,20)
s5 = createSprite(460,200,20,20)
sprites=[s1,s2,s3,s4,s5]
for(var e =0 ;e<sprites.length;e+=1){
console.log(sprites[e].x)




}
console.log (sum/num.length)


}