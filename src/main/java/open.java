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
public class open extends HttpServlet {
	public void openPost(HttpServletRequest request, HttpServletResponse response, String username, int postid,String titleGiven, String bodyGiven) throws ServletException, IOException {
		
		try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
           // System.out.println(ex);
            return;
        }
		

		SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Connection c = null;
        ResultSet rs = null;
        PreparedStatement ps = null;
        result resultQuery=null;
        String modified=null;
        String created=null;
       
        try {
        	/* create an instance of a Connection object */
            c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144" ,"cs144", ""); 
           // jdbc:mysql://localhost/db?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
            //c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144?useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT", "root", "121502");
			/* You can think of a JDBC Statement object as a channel
			sitting on a connection, and passing one or more of your
			SQL statements (which you ask it to execute) to the DBMS*/

            PreparedStatement preparedStmt = c.prepareStatement(
            	   "SELECT * FROM Posts WHERE username = ? AND postid= ?"
            );
            int count=0;
            preparedStmt.setString(1,username);
            preparedStmt.setInt(2, postid);
            rs = preparedStmt.executeQuery();
            String title= titleGiven;
            String body=bodyGiven;
            while(rs.next()) {
            	title= rs.getString("title");
            	body=rs.getString("body");
          
                
                modified = f.format(rs.getTimestamp("modified"));
                created=f.format(rs.getTimestamp("created")); 
               count++;
               // System.out.println(resultQuery.username);
               
            }
            if(bodyGiven==null||titleGiven==null) {
            	if(count==0) {
    			response.sendError(HttpServletResponse.SC_NOT_FOUND, "Need title and body" );}
            	else {
            		resultQuery=new result(title,created,modified,postid,body,username);
            		request.setAttribute("result", resultQuery);
            	        
            	    request.getRequestDispatcher("/edit.jsp").forward(request, response);
            	        
            	}
    		}else {
			title= titleGiven;
                	body=bodyGiven;
    			resultQuery=new result(title,created,modified,postid,body,username);
    			request.setAttribute("result", resultQuery);
    		        //System.out.println(resultQuery.username);
    		    request.getRequestDispatcher("/edit.jsp").forward(request, response);
    		        
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
        
        //request.setAttribute("username", username);
      
    }
		
}






