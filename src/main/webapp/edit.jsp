<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Edit Post</title>
</head>
<body>
    <div class= "text-info ml-3"><h1> Edit Post</h1></div>
	<br>
    <form method="post" action="./post">
        <div class="btn-group btn-group-lg">
        	
        	<input type="hidden" name="postid" value='${result.postid}'>
			<input type="hidden" name="username" value='${result.username}'>
            <button type="submit" name="action" value="save" class="btn btn-info btn-lg ml-3">Save</button>
            <button type="submit" name="action" value="list" class="btn btn-info btn-lg ">Close</button>
            <button type="submit" name="action" value="preview" class="btn btn-info btn-lg ">Preview</button>
           	<button type="submit" name="action" value="delete" class="btn btn-info btn-lg ">Delete</button>
           	
        </div>
		<br>
		<br>
        <div>
            <label class="text-info ml-3" for="title"> Title </label> <br>
            <input class ="w-50 ml-3"type="text" id="text" name="title" value='${result.title}' placeholder="Type your title here...">
        </div>
		<br>
        <div>
            <label class="text-info ml-3" for="body">Body</label> <br>
            <textarea class= "w-75 ml-3" style="height: 20rem;" name="body" id="body">${result.body} </textarea>
        </div>
    </form>
</body>
</html>
