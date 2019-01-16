import java.io.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class ComputeSHA {
    public static void main(String[] args){

        try {
            FileInputStream inputStream = new FileInputStream(args[0]);
            MessageDigest digest = MessageDigest.getInstance("SHA-1");
            StringBuilder sb=new StringBuilder();
            /*
		Line 17 to Line 23 are worked out with the aid of Internet. 
		URL: https://www.codejava.net/coding/how-to-calculate-md5-and-sha-hash-values-in-java
                Date of Retrieval: 10/4/208
	    */
	    byte[] bytesBuffer = new byte[1024];
            int bytesRead = -1;

            while ((bytesRead = inputStream.read(bytesBuffer)) != -1) {
                digest.update(bytesBuffer, 0, bytesRead);
            }
            byte[] result = digest.digest();
	    //Convert byte to hex
            for(byte bytes:result){
                sb.append(String.format("%02x",bytes & 0xff));
            }
            System.out.println(sb.toString());
        } catch (NoSuchAlgorithmException e){
            e.printStackTrace();
        }catch(IOException e){
            e.printStackTrace();
        }
    }
}

