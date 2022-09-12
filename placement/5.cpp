#include<bits/stdc++.h>
using namespace std;

// void printTriangle(int arr[], int n){
//    if(n<1)
//    return;

//    int temp[n-1];
//    for(int i=0; i<n-1;i++){
//     temp[i] = arr[i]+arr[i+1];
//    }
//    printTriangle(temp,n-1);
//    for(int i=0; i<n; i++){
//     cout<<arr[i]<<" ";
//    }
//    cout<<endl;
// }

void printTriangle(int arr[], int n){
     int arr2[n][n];

    //  fill last row
    for(int i=0; i<n; i++){
        arr2[n-1][i] = arr[i]; 
    }

    // fill rest rows
    for(int i=n-2; i>=0; i--){
        for(int j=0; j<=i; j++){
            arr2[i][j] = arr2[i+1][j] + arr2[i+1][j+1];
        }
    }

    // print array
     for(int i=0; i<n; i++){
        for(int j=0; j<=i; j++){
            cout<< arr2[i][j]<<" ";
        }
        cout<<endl;
    }   
}


int main() {
   int arr[] = { 3,5,7,8,9};
   int n = sizeof(arr) / sizeof(arr[0]);
   printTriangle(arr, n);
}

/*

.           for 1 = 1+0     diff. = 1
. .         for 2 = 2+1     diff. = 2
. . .       for 3 = 3+3     diff. = 3
. . . .     for 4 = 4+6     diff. = 4
. . . . .   for 5 = 5+10    


i + (n-i);
*/