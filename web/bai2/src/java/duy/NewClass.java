package duy;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/login")
public class NewClass extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Kiểm tra thông tin đăng nhập
        if (password.equals("123456")) {
            // Lưu username vào session
            HttpSession session = request.getSession();
            session.setAttribute("username", username);
            // Chuyển hướng người dùng đến trang dashboard.jsp
            response.sendRedirect("dashboard.jsp");
        } else {
            // Trường hợp thông tin đăng nhập không chính xác, chuyển hướng người dùng đến trang đăng nhập lại
            response.sendRedirect("login.jsp");
        }
    }
}
