window.onload = function() {
	var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS5cA7AWBwSFHvwu71M5W46l7TXQDaopy9AVAsqHosRfDLfvyJQp5OFQcmWkhebGRWqbFqon-px9sKv/pub?output=csv";
	$.ajax({
		url: url
		,success: function(data) {
			var list = $.csv.toObjects(data);
			var htmls = [];
			for (var i=0,len=list.length;i<=len;i++) {
				var l = list[i];
				if (l) {
					htmls.push(`
								<div class="col-md-2">
									<div class="text-center">
									<h6>${l.date}</h6>
										<p class="text-muted">Open ${l.open} Start ${l.start}</p>
									</div>
								</div>
								<div class="col-md-10">
									<h5>${l.name}</h5>
									<p class="text-muted">@${l.place}<br>${l.act}<br>${l.price}<br></p>
									<br> <br>
								</div>
						`
					);
				}
			}
		$("#schedule").html(htmls.join(""));
		}
	})
}
