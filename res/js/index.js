var btnPre = 0;
var btnPro = 0;
var btnNeu = 0;
var btnPar = 0;
var btnEdi = 0;
var zindex = 0;

//tu peut modifier la taille des box avec "height" et "width"

$(document).ready(function () {
    var pos;

    $('#btn-pre').on('click', function () {
        pos = $("#btn-pre").offset().left;
        pos = Math.round(pos);
        if (btnPre == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#pre-text").attr("style", "position: absolute;height: 330px;left:" + pos.toString() + "px;top:200px;width:275px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnPre = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#pre-text").attr("style", "display:none;");
            btnPre = 0;
        }
    });
    $('#btn-pro').on('click', function () {
        pos = $("#btn-pro").offset().left;
        pos = Math.round(pos); 
        if (btnPro == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#pro-text").attr("style", "position: absolute;height: 730px;left:" + pos.toString() + "px;top:70px;width:240px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnPro = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#pro-text").attr("style", "display:none;");
            btnPro = 0;
        }
    });
    $('#btn-neu').on('click', function () {
        pos = $("#btn-neu").offset().left;
        pos = Math.round(pos);
        if (btnNeu == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#neu-text").attr("style", "position: absolute;height: 700px;left:" + pos.toString() + "px;top:50px;width:280px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnNeu = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#neu-text").attr("style", "display:none;");
            btnNeu = 0;
        }
    });
    $('#btn-par').on('click', function () {
        pos = $("#btn-par").offset().left;
        pos = Math.round(pos);
        if (btnPar == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#par-text").attr("style", "position: absolute;height: 450px;left:" + pos.toString() + "px;top:60px;width:208px;padding: 20px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnPar = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#par-text").attr("style", "display:none;");
            btnPar = 0;
        }
    });
    $('#btn-edi').on('click', function () {
        pos = $("#btn-edi").offset().left;
        pos = Math.round(pos);
        if (btnEdi == 0) {
            zindex++;
            $(this).attr("style", "color: #333;background-color: #FFF;border-color: #000;");
            $("#edi-text").attr("style", "position: absolute;height: 110px;left:" + pos.toString() + "px;top:300px;width:100px;padding: 10px;border: 3px solid;background-color: #FFF;font-size:12px;z-index:" + zindex.toString() + ";");
            btnEdi = 1;
        }
        else {
            $(this).attr("style", "color: #FFF;background-color: #000;border-color: #000;");
            $("#edi-text").attr("style", "display:none;");
            btnEdi = 0;
        }
    });
});