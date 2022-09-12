// #include<iostream>
// using namespace std;

// int main(){
//     int n, isPrime=0;
//     cin>>n;
//     if(n==1){
//         cout<<1;
//     }
//     else
//     for(int i=2; i<=n;i++){
//         if(n%i==0){
//             isPrime = 1;
//             for(int j=2; j<=i/2; j++){
//                 if(i%j==0)
//                 {
//                     isPrime = 0;
//                     break;
//                 }
//             }
//             if(isPrime == 1){
//                 cout<<i<<" ";
//             }
//         }
//     }
// }

#include <bits/stdc++.h>
using namespace std;
/* Driver code */
int main()
{
    int n;
    cout<<"ready: ";
    cin>>n;
    set<int> s;
    int c = 2;
    while(n>1){
        if(n%c==0){
            s.insert(c);
            n/=c;
        }
        else 
        c++;
    }
    for(auto i: s){
        cout<<i<<" ";
    }
}

// o(n)