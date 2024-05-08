<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
</head>
<body>
    <h1>Chào mừng, <%= session.getAttribute("username") %>!</h1>
    <a href="logout">Đăng xuất</a>
</body>
</html>
