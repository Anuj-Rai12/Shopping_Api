package relevl;

import java.util.ArrayList;
import java.util.Scanner;

public class Testing {

    public static void main(String[] args) {

        final int module = 998244353;
        Scanner sc = new Scanner(System.in);
        Scanner obj = new Scanner(System.in);
        int testCase = sc.nextInt();

        while (testCase != 0) {
            int size = obj.nextInt(), max = obj.nextInt(), sum = 0, count = 0;
            int[] arr = new int[size];
            for (int i = 0; i < size; i++) {
                arr[i] = obj.nextInt();
            }
            ArrayList<ArrayList<Integer>> getData = getMyData(arr);
            for (ArrayList<Integer> data : getData) {

                if (max == data.size()) {
                    int remSum = 0;
                    for (Integer item : data) {
                        remSum = (remSum + item) % module;
                    }
                    if (remSum >= sum) {
                        sum = remSum;
                        count++;
                    }
                }

            }
            if (count==0)
                System.out.println(-1);
            else
                System.out.println(count);

            testCase--;
        }

    }

    private static ArrayList<ArrayList<Integer>> getMyData(int[] arr) {
        ArrayList<ArrayList<Integer>> outer = new ArrayList<>();
        outer.add(new ArrayList<>());

        for (int num : arr) {
            int size = outer.size();
            for (int i = 0; i < size; i++) {
                ArrayList<Integer> inner = new ArrayList<>(outer.get(i));
                inner.add(num);
                outer.add(inner);
            }
        }
        return outer;
    }


    private static ArrayList<ArrayList<Integer>> getArrayList(int[] arr) {
        ArrayList<ArrayList<Integer>> arrayOuter = new ArrayList<>();
        arrayOuter.add(new ArrayList<>());

        for (int num : arr) {
            int size = arrayOuter.size();
            for (int i = 0; i < size; i++) {
                ArrayList<Integer> inner = new ArrayList<>(arrayOuter.get(i));
                inner.add(num);
                arrayOuter.add(inner);
            }
        }
        return arrayOuter;
    }


}