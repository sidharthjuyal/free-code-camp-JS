#include<iostream>
using namespace std;
int main(){
    int a,b,counter=0;
    cin>>a>>b;
    for(int i=a; i<=b; ++i){
        int rem = i%10;
        if(rem==9 || rem==2 || rem ==3)
        counter++;
    }
    cout<<counter;
}