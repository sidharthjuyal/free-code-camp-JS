#include<bits/stdc++.h>
using namespace std;

int main(){
    string s;
    getline(cin,s);

    for(int i=0; i<s.size();i++) s[i] = tolower(s[i]);

    vector<int> freq(123,0);

    for(int i=0; i<s.size(); i++){
        if(s[i]>='a' && s[i]<='z'){
            freq[(int)s[i]]+=1;
        }
    }

    int max = INT_MIN;
    int index;
    for(int i=99; i<=122; ++i){
         if(freq[i]>max)
         {
            max = freq[i];
            index = i;
         }
    }

    cout<<(char)index<<"->"<<max<<" times.";

}
