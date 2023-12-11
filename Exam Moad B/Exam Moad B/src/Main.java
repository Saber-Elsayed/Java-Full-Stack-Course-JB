import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int input = scanner.nextInt();
        while(input<=0 ||input%1!=0){
            System.out.print("Enter a number: ");
            input = scanner.nextInt();
        }
        int res=getReverseNatural(input);
        System.out.println("***************************Exercise 1***************************");
        System.out.println("The reverse number is: "+res);

        System.out.println("***************************Exercise 2***************************");
        System.out.println("The digits of the number is: "+getNumberOfDigits(input));

        System.out.println("***************************Exercise 3***************************");
        int[] arr=naturalToArray(input);
        System.out.print("The array is:"+"[");
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+ ",");
        }
        System.out.println("]");
        System.out.println("***************************Exercise 4***************************");
        System.out.println("The number is palindrom");

        System.out.println("***************************Exercise 5***************************");
        if(Distinct(input)==true){
            System.out.println("The number is palindrom");
        }



        }

        /*Exercise 1*/
    static public int getReverseNatural(int Natural){
        int NewNumber=0;
        while(Natural>0){
            int digit=Natural%10;
            NewNumber=NewNumber*10+digit;
            Natural=Natural/10;
        }
        return NewNumber;
    }

    /*Exercise 2*/
    static public int getNumberOfDigits(int Natural){
        int count=0;
        while(Natural!=0){
            int dig=Natural%10;
            Natural=Natural/10;
            count++;
        }
        return count;
    }
    /*Exercise 3*/
    static public int[] naturalToArray(int Natural){
        int i=0;
        int length=getNumberOfDigits(Natural);
        int[] array=new int[length];
        while(Natural>0){
            array[i]=Natural%10;
            Natural=Natural/10;
            i++;
        }
        return array;
    }

    /*Exercise 4*/
    static public boolean isPalindrom (int Natural){

        if(Natural==getReverseNatural(Natural)){
            return true;
        }
        return false;
    }


    /*Exercise 5*/
    static public boolean Distinct (int Natural){

        int newnum = Natural + getReverseNatural(Natural);
        System.out.println(newnum);
        if(isPalindrom(newnum)==false){
            return true;
        }

        else {
            Distinct(newnum);
        }
        System.out.println(newnum);
        return false;

    }



    }
