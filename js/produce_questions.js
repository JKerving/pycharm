//获取每个json单元的长度,目的计算选项个数
function getJsonLength(jsonData) {
	var jsonLength = 0;
	for(var item in jsonData) {
		jsonLength++;
	}
	return jsonLength;
}
//生成问卷
$.getJSON("C:/Users/JKerving/Desktop/Questionnaire/Questionnaire/json/subjects.json", function(data) {
	var $questionnaire_content = $("#questionnaire_content");
	var strHtml = '';
	var order = 1;
	$questionnaire_content.empty(); //清空内容
	$.each(data, function(infoIndex, info) {
//		通过if语句进行模板选择
		if(info["templet"] == "radio"){
			var length = getJsonLength(info) - 3;
			var option_header = 65;
			strHtml += '<h2>' + order + '.' + info["question"] + '</h2>';
			strHtml += '<div id="itemgroup" class="form-group">';
			for(var i = 1; i <= length; i++, option_header++) {
				//			生成了A,B,C,D选项
				var option_string = String.fromCharCode(option_header);
				strHtml += '<input style="cursor:pointer" type="radio" value=' + option_string + ' name =' + info["major_key"] + '/>' + option_string + '.' + info[option_string] + '<br/>';
			};
			strHtml += "</div>";
			order++;
		}
		if(info["templet"] == "checkbox"){
			var length = getJsonLength(info) - 3;
			var option_header = 65;
			strHtml += '<h2>' + order + '.' + info["question"] + '</h2>';
			strHtml += '<div id="itemgroup" class="form-group">';
			for(var i = 1; i <= length; i++, option_header++) {
				//			生成了A,B,C,D选项
				var option_string = String.fromCharCode(option_header);
				strHtml += '<input style="cursor:pointer" type="checkbox" value=' + option_string + ' name =' + info["major_key"] + '/>' + option_string + '.' + info[option_string] + '<br/>';
			};
			strHtml += "</div>";
			order++;
		}
	})
//	strHtml += '<button type="submit" class="btn btn-default">提交问卷</button>';
	$questionnaire_content.html(strHtml); //显示处理后的字符串
})
//$("#question_area").html()
//提交表单函数
function mySubmit(){
	$("#questionnaire_content").submit();
}
