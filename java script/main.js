function SoTienCoTheTra() {
    var ThuNhap = document.getElementById("ThuNhap").value;
    var SoTienCanVay = document.getElementById("SoTienCanVay").value;
    var LaiXuat1Nam= document.getElementById("LaiXuat1Nam").value;
    var ThoiHanVay = document.getElementById("ThoiHanVay").value;
    //  console.log(toan);
     ThuNhap = Number(ThuNhap);
     SoTienCanVay = Number(SoTienCanVay);
     LaiXuat1Nam = Number(LaiXuat1Nam);
     ThoiHanVay = Number(ThoiHanVay);
     //camel: con lạc đà 
     var SoTienCoTheTraTrong1Thang = ThuNhap * 0.6 ;
    
     
     console.log( SoTienCoTheTraTrong1Thang);
     document.getElementById('result').textContent = "  Số tiền có thể trả trong 1 th " + SoTienCoTheTraTrong1Thang.toFixed(3);
     document.getElementById('result').style.display = " block "
     
    
    }
    console.log();
    var SoTienCanTra = document.createElement("p")
    SoTienCanTra.textContent = "Số Tiền Cần Trả " + SoTienCoTheTraTrong1Thang 
    
    //add the p vao thang cha 
    alerttag.appendchild(SoTienCoTheTra);
    
function SoTienPhaiTra(){
        
        var ThuNhap = document.getElementById("ThuNhap").value;
        var SoTienCanVay = document.getElementById("SoTienCanVay").value;
        var LaiXuat1Nam= document.getElementById("LaiXuat1Nam").value;
        var ThoiHanVay = document.getElementById("ThoiHanVay").value;
        //  console.log(toan);
         ThuNhap = Number(ThuNhap);
         SoTienCanVay = Number(SoTienCanVay);
         LaiXuat1Nam = Number(LaiXuat1Nam);
         ThoiHanVay = Number(ThoiHanVay);
         var SoTienPhaiTraTrong1Thang = ( SoTienCanVay * ( 1 + LaiXuat1Nam )) / ThoiHanVay ;
         console.log( SoTienPhaiTraTrong1Thang) ;
         document.getElementById('result').style.display = " Số T " + SoTienPhaiTraTrong1Thang.toFixed(2);
         document.getElementById('result').style.display = " block "
         
         console.log()
         var SoTienPhaiTra =document.createElement("p")
        
        diemkhoiAP.textContent = "Số Tiền Phải Trả" + SoTienPhaiTraTrong1Thang;
         alerttag.appendchild(SoTienPhaiTra);
    }
    
   