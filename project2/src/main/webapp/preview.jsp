<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Preview Post</title>
</head>
<body>
    <div class= "text-info ml-3"><h1>Preview Post</h1></div>
	<br>
    	<form method="post" action="./post">
    		<input type="hidden" name="postid" value='${postid}'>
			<input type="hidden" name="username" value='${username}'>
			<input type="hidden" name="title" value='${titleOrigin}'>
			<input type="hidden" name="body" value='${bodyOrigin}'>
    		<button type="submit" name="action" value="open" class="btn btn-info btn-lg ml-3">Close Preview</button>
    	</form>
		<br>
		<label class="text-info ml-3" for="title1"> Title: </label> <br>
         <label class="ml-3" for="title"> ${title}</label>
		 <br>
		 <label class="text-info ml-3" for="body1">Body:</label> <br>
         <label class="ml-3" for="body"> ${body}</label>       
</body>
</html>
