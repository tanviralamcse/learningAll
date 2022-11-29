package Xor;
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class XorOperation {
    public static void main(String args[] ) throws Exception {
        BufferedReader in = new BufferedReader(
                new InputStreamReader(System.in));
        String s;
        String p;

        s = in.readLine();
        p = in.readLine();
        int d=s.length();
        String[] a =  new String[d];
        String[] b =  new String[d];
        String[] result = new String[d];
        for(int i=0;i<s.length();i++){
            a[i] = String.valueOf(s.charAt(i));
            System.out.print(a[i]);
        }
        System.out.println();
        for(int j = 0;j<p.length();j++){
            b[j] = String.valueOf(p.charAt(j));
            System.out.print(b[j]);
        }
        for(int k = 0; k<a.length;k++){
            if(a[k].equals(b[k])){
                result[k] = "0";
            }  else{
                result[k] = "1";
            }
        }
        System.out.print("\n");
        for(String t:result){
            System.out.print(t);
        }

    }
}
