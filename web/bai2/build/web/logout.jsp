import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // X�a session
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        // Chuy?n h??ng ng??i d�ng v? trang ??ng nh?p
        response.sendRedirect("login.jsp");
    }
}

