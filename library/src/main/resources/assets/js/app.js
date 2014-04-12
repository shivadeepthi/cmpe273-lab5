$(":button").click(function() {
	//var isbn = $("#UID").text();
	$(":button").attr("disabled",true);
	this.disabled=true;
	var isbn=$(this).closest("tr").find("td").eq(0).text();
	jQuery.ajax({
	    type: "PUT",
	    url: "http://localhost:8001/library/v1/books/"+isbn+"?status=lost",
	    contentType: "application/json",
	    success : function ()
	    {
	    	
			alert('Success.');
	    	location.reload();
	    },
		failure : function ()
		{
			alert('failure...');
		}
		
	});
    });
   