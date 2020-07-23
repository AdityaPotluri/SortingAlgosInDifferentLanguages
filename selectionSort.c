#include<stdio.h>


void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void selection_sort(int arr[],int size) {
    int smallestIndex,i,j;

    for( i = 0; i<size-1;i++ ) {
        smallestIndex = i;
        for(j = i+1; j<size;j++) {
            if(arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }

        swap(&arr[smallestIndex], &arr[i]);
    }
    
    


}

int main() {
    int arr[] = {12, 8, 5, 10, 13, 9};
    int len = sizeof(arr)/sizeof(arr[0]);
    selection_sort(arr,len);


    printf("new Array:: ");
    for(int i=0; i<len; i++) 
        printf("%d ", arr[i]);
    
       
    return 0;
}


