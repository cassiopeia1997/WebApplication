<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<title>Error page</title>
</head>
<body>
	<h1><span class="text-danger ml-2">Invalid Request</span></h1>
	<h3><span class="label label-info ml-2">Request Information</span></h3>
	<br>
	<%
    String queryString = request.getQueryString();
	out.println("&nbsp");
    out.println("<strong>action :</strong>");
    out.println(request.getParameter("action"));
    out.println("<br>");
	out.println("&nbsp");
    out.println("<strong>username :</strong>");
    out.println(request.getParameter("username"));
    out.println("<br>");
	out.println("&nbsp");
    out.println("<strong>postid: </strong>");
    out.println(request.getParameter("postid"));
    out.println("<br>");
	out.println("&nbsp");
    out.println("<strong>title: </strong>");
    out.println(request.getParameter("title"));
    out.println("<br>");
	out.println("&nbsp");
    out.println("<strong>body: </strong>");
    out.println(request.getParameter("body"));
    out.println("<br>");
	%>
	
	<h3><span class="label label-info ml-2">Reason of Error</span></h3>
	<%
	out.println("&nbsp");
	out.println(request.getAttribute("javax.servlet.error.message"));
	%>
	<h3><span class="label label-info ml-2">Status Code</span></h3>
	<%
	out.println("&nbsp");
	out.println(request.getAttribute("javax.servlet.error.status_code"));
	%>
</body>
</html>
