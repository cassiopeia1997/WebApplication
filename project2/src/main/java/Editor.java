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

import java.util.regex.Pattern;
import java.util.regex.Matcher;


/**
 * Servlet implementation class for Servlet: ConfigurationTest
 *
 */
public class Editor extends HttpServlet {
    /**
     * The Servlet constructor
     * 
     * @see javax.servlet.http.HttpServlet#HttpServlet()
     */
    public Editor() {}
	
	public boolean isNumeric(String str){ 
	try {   
    int num=Integer.valueOf(str);  
     
    return true;  
} catch (Exception e) {  
      
    return false;  
}  
}

	

    public void init() throws ServletException
    {
        /*  write any servlet initialization code here or remove this function */
    }
    
    public void destroy()
    {
        /*  write any servlet cleanup code here or remove this function */
    }

    /**
     * Handles HTTP GET requests
     * 
     * @see javax.servlet.http.HttpServlet#doGet(HttpServletRequest request,
     *      HttpServletResponse response)
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException 
    {
	// implement your GET method handling code here
	// currently we simply show the page generated by "edit.jsp"
      // request.getRequestDispatcher("/edit.jsp").forward(request, response);
    	String action=request.getParameter("action");
	if(action==null){
	response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
	}else{
    	if(action.equals("save")) {
    		response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Action save cannot be issued via GET method" );
    	}
    	if(action.equals("delete")) {
    		response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Action delete cannot be issued via GET method" );
    	}
    	if(action.equals("list")) {
    		String username=request.getParameter("username");
    		//request.getRequestDispatcher("/list.jsp").forward(request, response);
    		if(username==null||username.length()>41) {
    			response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
    		}else {
    		ListPost listall=new ListPost();
    		listall.listpost(request, response, username);}
    	}
    	if(action.equals("open")) {
    		String username=request.getParameter("username");
    		String postidString =request.getParameter("postid");
		System.out.println("openBegin in Editor");
    		if(username==null||postidString==null||username.length()>41||!isNumeric(postidString)) {
    			response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
    		}else {
    		int postid=Integer.parseInt(postidString);
    		String titleGiven=request.getParameter("title");
    		String bodyGiven=request.getParameter("body");
    		open openPost=new open();
    		openPost.openPost(request, response, username, postid,titleGiven,bodyGiven);}
    	}
    	
    	if(action.equals("preview")) {
    		String username=request.getParameter("username");
    		String postidString=request.getParameter("postid");
    		String titleGiven=request.getParameter("title");
    		String bodyGiven=request.getParameter("body");
    		if(username==null||postidString==null||titleGiven==null||bodyGiven==null||username.length()>41||titleGiven.length()>100 ||!isNumeric(postidString)) {
    			response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
    		}else {
    		int postid=Integer.parseInt(postidString);
    		
    		preview pre=new preview();
    		pre.previewPost(request, response, username, postid, titleGiven, bodyGiven);}
    	}
    
    	
     }  
    }
  
    /**
     * Handles HTTP POST requests
     * 
     * @see javax.servlet.http.HttpServlet#doPost(HttpServletRequest request,
     *      HttpServletResponse response)
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException 
    {
    	
    	String action=request.getParameter("action");
    	//String methodName = request.getParameter("methodName");
    	if(action==null){
		response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
	}else{	
    	if(action.equals("delete")) {
    		String username=request.getParameter("username");
    		String postidString=request.getParameter("postid");
    		//request.getRequestDispatcher("/list.jsp").forward(request, response);
    		//System.out.println(username);
    		if(username==null||postidString==null||username.length()>41||!isNumeric(postidString)) {
    			response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
    		}else {
    			delete deList=new delete();
        		int postid=Integer.parseInt(postidString);
        		deList.delete(request, response, username, postid);
    		}
    		
    	}
    	if(action.equals("save")) {
    		String username=request.getParameter("username");
    		String postidString=request.getParameter("postid");
    		String titleGiven=request.getParameter("title");
			String bodyGiven=request.getParameter("body");
    		if(username==null||postidString==null||titleGiven==null||bodyGiven==null||username.length()>41||titleGiven.length()>100||!isNumeric(postidString)) {
    			response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter");
    		}else {
    			int postid=Integer.parseInt(postidString);
    			
    			save savePost=new save();
    			savePost.savePo(request,response,username,postid,titleGiven,bodyGiven);}
    	}
    	if(action.equals("list")) {
    		String username=request.getParameter("username");
    		//request.getRequestDispatcher("/list.jsp").forward(request, response);
    		if(username==null||username.length()>41) {
    			response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
    		}else {
    		ListPost listall=new ListPost();
    		listall.listpost(request, response, username);}
    	}
    	if(action.equals("open")) {
    		String username=request.getParameter("username");
    		String postidString =request.getParameter("postid");
    		if(username==null||postidString==null||username.length()>41||!isNumeric(postidString)) {
    			response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
    		}else {
    		int postid=Integer.parseInt(postidString);
    		String titleGiven=request.getParameter("title");
    		String bodyGiven=request.getParameter("body");
    		open openPost=new open();
    		openPost.openPost(request, response, username, postid,titleGiven,bodyGiven);}
    	}
    	
    	if(action.equals("preview")) {
    		String username=request.getParameter("username");
    		String postidString=request.getParameter("postid");
    		String titleGiven=request.getParameter("title");
    		String bodyGiven=request.getParameter("body");
    		if(username==null||postidString==null||titleGiven==null||bodyGiven==null||username.length()>41||titleGiven.length()>100||!isNumeric(postidString)) {
    			response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid action parameter" );
    		}else {
    		int postid=Integer.parseInt(postidString);
    		
    		preview pre=new preview();
    		pre.previewPost(request, response, username, postid, titleGiven, bodyGiven);}
    	}
 	}
	   }
}



