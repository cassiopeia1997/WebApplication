import java.io.IOException;
import java.sql.* ;
import java.text.SimpleDateFormat;
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
public class ListPost extends HttpServlet {
	public void listpost(HttpServletRequest request, HttpServletResponse response, String username) throws ServletException, IOException {
		List<result> results=new ArrayList();
		SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
           // System.out.println(ex);
            return;
        }
        Connection c = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
 

        try {
        	/* create an instance of a Connection object */
           // c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "root", "121502"); 
           // jdbc:mysql://localhost/db?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
            c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144" ,"cs144", "");
			/* You can think of a JDBC Statement object as a channel
			sitting on a connection, and passing one or more of your
			SQL statements (which you ask it to execute) to the DBMS*/

            PreparedStatement preparedStmt = c.prepareStatement(
            	   "SELECT * FROM Posts WHERE username = ? ORDER BY postid"
            );
            preparedStmt.setString(1,username);
            rs = preparedStmt.executeQuery();
            while( rs.next() ){
                 String title= rs.getString("title");
                 Timestamp modified = rs.getTimestamp("modified");
                 Timestamp created=rs.getTimestamp("created"); 
                 int postid=rs.getInt("postid");
                 String body=rs.getString("body");
                 //System.out.println(username);
                 result resultQuery=new result(title,f.format(created),f.format(modified),postid,body,username);
                 results.add(resultQuery);
            }
        } catch (SQLException ex){
            System.out.println("SQLException caught");
            System.out.println("---");
            while ( ex != null ) {
                System.out.println("Message   : " + ex.getMessage());
                System.out.println("SQLState  : " + ex.getSQLState());
                System.out.println("ErrorCode : " + ex.getErrorCode());
                System.out.println("---");
                ex = ex.getNextException();
            }
        } finally {
            try { rs.close(); } catch (Exception e) { /* ignored */ }
            try { c.close(); } catch (Exception e) { /* ignored */ }
        }
       // request.setAttribute("username", username);
        request.setAttribute("results", results);
        request.setAttribute("username", username);
        request.getRequestDispatcher("/list.jsp").forward(request, response);
        
    }
		
}





