// cau 1
function nhap(num){
    var giaithua= 1
    for ( var i = 1 ; i<= num ; i++){
        giaithua = giaithua * i
        
    }
console.log(giaithua)
}
nhap(6)
//bai 2
function cappa(n){
  
  for (var i = 1 ; i <= n; i++){
    for(var j = 1 ; j<= i  ; j++ ){
      document.write("*")
    }
    
    document.write("<br />")
  }
  
}
cappa(5)