import java.io.Serializable;
import java.sql.Timestamp;

public class result implements Serializable{
	String title;
	String created;
	String body;
	String modified;
	int postid;
	String username;

	public result(String title,String created,String modified, int postid, String body, String username) {
		this.title=title;
		this.created=created;
		this.modified=modified;
		this.postid=postid;
		this.body=body;
		this.username=username;
	}
	public String getTitle() {
		return this.title;
	}
	public String getCreated() {
		return this.created;
	}
	public String getModified() {
		return this.modified;
	}
	public int getPostid() {
		return this.postid;
	}
	public String getBody() {
		return this.body;
	}
	public String getUsername() {
		return this.username;
	}
	

}
