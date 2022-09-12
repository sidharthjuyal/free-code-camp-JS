#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// bool checkPairs(int arr[], int n, int k){
//    if(n%2!=0)
//    return false;

//    int counter=0;
//    vector<int> vec(n,-1);

//    for(int i=0; i<n-1; i++){
//     for(int j=i+1; j<n; j++){
//          if((arr[i]+arr[j])%k==0 && vec[i]==-1 && vec[j]==-1){
//              counter++;
//              vec[i]=1;
//              vec[j]=1;
//          }
//     }
//    }
//    if(counter==n/2)
//    return true;
//    else
//    return false;
// }
// o(n^2)

bool checkPairs(int arr[], int n, int k)
{
    if (n % 2 != 0)
        return false;
        unordered_map<int,int> mp;
    for(int i=0; i<n; i++){
        int rem = (arr[i]%k);
        mp[rem]++;
    }
    for(int i=0; i<n; i++){
        int rem = (arr[i]%k);
        if(2*rem==k && mp[rem]%2!=0)
        {return false;}
         else
         if(rem==0 && mp[rem]%2!=0){
            return false;
         }
         else if(mp[rem]!=mp[k-rem])
         return false;
    }
}

// o(n)

int main()
{
    int arr[] = {92, 75, 65, 48, 45, 35};
    int k = 10;
    int n = sizeof(arr) / sizeof(arr[0]);

    bool check = checkPairs(arr, n, k);
    if (check)
        cout << "true";
    else
        cout << "false";
}