"use strict";$(function(){$.when($.ajax("http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&level=1&page=1",{dataType:"json"}),$.ajax("http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&level=1&page=2",{dataType:"json"})).then(function(a,o){var i="<option value='-1'>请选择省份</option>";a[0].showapi_res_body.data.concat(o[0].showapi_res_body.data).forEach(function(a){i+='<option value="'+a.id+'">'+a.areaName+"</option>"}),$("#province").html(i)}),$("#province").on("change",function(){var a="http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&parentId="+$("#province").val();$.getJSON(a,function(a){var o="<option value='-1'>请选择城市</option>";a.showapi_res_body.data.forEach(function(a){o+='<option value="'+a.id+'">'+a.areaName+"</option>"}),$("#city").html(o)})}),$("#city").on("change",function(){var a="http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&parentId="+$("#city").val();$.getJSON(a,function(a){var o="<option value='-1'>请选择区县</option>";a.showapi_res_body.data.forEach(function(a){o+='<option value="'+a.id+'">'+a.areaName+"</option>"}),$("#district").html(o)})})});