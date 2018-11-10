import java.io.IOException;
import java.sql.* ;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.commonmark.node.*;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;

/**
 * Servlet implementation class for Servlet: ConfigurationTest
 *
 */
public class preview extends HttpServlet {
	public void previewPost(HttpServletRequest request, HttpServletResponse response, String username, int postid,String titleGiven,String bodyGiven) throws ServletException, IOException {
		Parser parser = Parser.builder().build();
		Node document = parser.parse(titleGiven);
		Node document2=parser.parse(bodyGiven);
		HtmlRenderer renderer = HtmlRenderer.builder().build();
		//System.out.println(renderer.render(document));  // "<p>This is <em>Sparta</em></p>\n"
        request.setAttribute("title",renderer.render(document));
        request.setAttribute("body", renderer.render(document2));
        request.setAttribute("titleOrigin", titleGiven);
        request.setAttribute("bodyOrigin", bodyGiven);
        request.setAttribute("postid", postid);
        request.setAttribute("username", username);
        request.getRequestDispatcher("/preview.jsp").forward(request, response);
    }
		
}





