

class BubbleSort {
    public static void main(String[] args) {
       int[] arr = {3,2,1,57,7,1};
       bubbleSort(arr);
       printArr(arr);
   }
  
   public static void bubbleSort(int[] arr) {
        
        for(int i = 0;i < arr.length-1; i++) {
            for(int j = 0;j<arr.length -1;j++) {
                if(arr[j] > arr[j+1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
            }
           
        }
   }

   public static void printArr(int[] arr) {
       for(int i:arr) {
           System.out.print(i+" ");
       }
   }
}