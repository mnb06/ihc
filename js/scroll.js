$.scrollify({
	section : ".box",
	scrollbars:"false",
	interstitialSection : "#header,#footer",
	easing: "swing",  
    scrollSpeed: 300,  


	//以下、ページネーション設定
	before:function(i,panels) {
		var ref = panels[i].attr("data-section-name");
		  $(".pagination .active").removeClass("active");
		  $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
		},
		afterRender:function() {
		  var pagination = "<ul class=\"pagination\">";
		  var activeClass = "";
		  $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
			activeClass = "";
			if(i===$.scrollify.currentIndex()) {
			  activeClass = "active";
			}
			pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
		  });
		  pagination += "</ul>";
	
		  $("#box1").append(pagination);//はじめのエリアにページネーションを表示
		  $(".pagination a").on("click",$.scrollify.move);
		}
	
	  });