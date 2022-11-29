package PlusMinus;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;
import java.text.DecimalFormat;

class PlusMinusHackerrank {

    public static void plusMinus(List<Integer> arr) {
        // Write your code here
        int i;
        int minus=0;
        int positive=0;
        int  zero=0;
        for (i=0; i<arr.size();i++){
            if(arr.get(i)<0){
                minus = minus+1;
            } else if (arr.get(i)>0){
                positive = positive+1;
            } else if (arr.get(i)==0){
                zero=zero+1;
            }

        }
        double positiveRatio, negativeRatio, zeroRatio;
        double arraySize = arr.size();

        DecimalFormat df = new DecimalFormat("#.######");
        positiveRatio = (double)positive/arraySize;
        System.out.println(df.format(positiveRatio));
        negativeRatio = (double)minus/arraySize;
        System.out.println(df.format(negativeRatio));
        zeroRatio = (double)zero/arraySize;
        System.out.println(df.format(zeroRatio));

    }

}

 class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(toList());

        PlusMinusHackerrank.plusMinus(arr);

        bufferedReader.close();
    }
}


