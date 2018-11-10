<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>List Post</title>
</head>
<body>
	<form method="post" action="./post">
		<input type="hidden" name="username" value='${username}'>
		<input type="hidden" name="postid" value='0'>
		<input type="hidden" name="title" value="">
		<input type="hidden" name="body" value="">
    	<button type="submit" name="action" value="open" class="btn btn-info">New Post</button>
    </form>
    <table class="table">
		<tr>
			<th>Title</th>
			<th>Created</th>
			<th>Modified</th>
			<th></th>
			
		</tr>
		<c:forEach items="${results}" var="emp">
			<input type="hidden" name="postid" value='${emp.postid}'>
			<tr>
			<td>${emp.title}</td>
			<td>${emp.created}</td>
			<td>${emp.modified}</td>
			<td>
				<div class="btn-group" role="group" aria-label="Basic example">
  					<form method="post" action="./post">
						<input type="hidden" name="postid" value='${emp.postid}'>
						<input type="hidden" name="username" value='${emp.username}'>
					<input type="hidden" name="title" value='${emp.title}'>
					<input type="hidden" name="body" value='${emp.body}'>
					<button type="submit" name="action" value="open" class="btn btn-success">Open</button>
				</form>
				&nbsp;
				<form method="post" action="./post">
					<input type="hidden" name="postid" value='${emp.postid}'>
					<input type="hidden" name="username" value='${emp.username}'>
					<button type="submit" name="action" value="delete" class="btn btn-danger">Delete</button>
				</form>
				</div>
			</td>
			</tr>
		</c:forEach>
    </table>
</body>
</html>
