import java.io.IOException;
import java.sql.* ;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;
import java.text.SimpleDateFormat;

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
public class save extends HttpServlet {
	public void savePo(HttpServletRequest request, HttpServletResponse response, String username, int postid,String titleGiven, String bodyGiven) throws ServletException, IOException {
		
		try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
           // System.out.println(ex);
            return;
        }
        Connection c = null;
        ResultSet rs = null;
        PreparedStatement ps = null;
        result resultQuery=null;
        Timestamp timestampModified=null;
        Timestamp timestampCreated=null;
        SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        
        int postidGiven=0;
        System.out.println(postid);
        if(postid<=0) {
        	try {
        	 c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144","cs144","");
 		    PreparedStatement preparedStmt = c.prepareStatement(
             	   "INSERT INTO Posts(username,postid,title,body,created,modified) VALUES(?,?,?,?,?,?)"
 		    		
             );
 		    PreparedStatement preparedStmt2 = c.prepareStatement(
           	   "SELECT * FROM Posts WHERE username = ? ORDER BY postid"
            );
 		    //System.out.println(username);;
 		    preparedStmt2.setString(1,username);
 		    rs = preparedStmt2.executeQuery();
 		    while(rs.next()) {
 		    	postidGiven=rs.getInt("postid");
 		    }
 		    //System.out.println(postidGiven);
 		    postidGiven++;
 		     Date date = new Date();       
 		     String timeString=f.format(date);
 		   	 timestampCreated =Timestamp.valueOf(timeString);
             preparedStmt.setString(1,username);
             preparedStmt.setInt(2, postidGiven);
             preparedStmt.setString(3,titleGiven);
             preparedStmt.setString(4,bodyGiven);
             preparedStmt.setTimestamp(5,timestampCreated);
             preparedStmt.setTimestamp(6,timestampCreated);
             preparedStmt.executeUpdate();
             resultQuery=new result(titleGiven,f.format(timestampCreated),f.format(timestampCreated),postid,bodyGiven,username);}
        	catch (SQLException ex){
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
        	
        }
        else {
        try {
        
            c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "cs144", ""); 
           // jdbc:mysql://localhost/db?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
         //   c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144?useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT", "root", "121502");
		    PreparedStatement preparedStmt = c.prepareStatement(
            	   "SELECT * FROM Posts WHERE username = ? AND postid= ?"
            );
            
            preparedStmt.setString(1,username);
            preparedStmt.setInt(2, postid);
            rs = preparedStmt.executeQuery();
            String title= titleGiven;
            String body=bodyGiven;
            if(rs.next())
            {
            	//title= rs.getString("title");
            	//body=rs.getString("body");
            	timestampModified = rs.getTimestamp("modified");
            	timestampCreated=rs.getTimestamp("created"); 
                
                Date date = new Date();   
                String timeString=f.format(date);
                //System.out.println(timeString);
                timestampModified =Timestamp.valueOf(timeString);
                //System.out.println(df.format(new Date()));
                PreparedStatement preparedStmt2=c.prepareStatement(
                		"UPDATE Posts SET title=?, body=?,modified=? WHERE username=? AND postid=?"
                );
                preparedStmt2.setString(1, titleGiven);
                preparedStmt2.setString(2, bodyGiven);
                preparedStmt2.setTimestamp(3, timestampModified);
                preparedStmt2.setString(4, username);
                preparedStmt2.setInt(5, postid);
                preparedStmt2.executeUpdate();
              //  System.out.println(body);
            }
            //System.out.println(timestampModified);
           // resultQuery=new result(title,f.format(timestampCreated),f.format(timestampModified),postid,body,username);
            
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
        
    }
        ListPost listPo=new ListPost();
        listPo.listpost(request, response, username); 
        
	}
		
	
}





