#include <iostream>
#include <string>
using namespace std;

int n, m;
string DNA[1000];

int max_num(int a, int c, int g, int t){
    int max;

    max=(a>=c)?a:c;
    max=(max>=g)?max:g;
    max=(max>=t)?max:t;
    
    return max;
}

void hamming_distance(){
    int cnt=0;
    string dna="";
    
    for(int i=0; i<m; i++){
        int a=0, c=0, g=0, t=0;
        for(int j=0; j<n; j++){
            switch(DNA[j][i]){
                case 'A':
                    a++;
                    break;
                case 'C':
                    c++;
                    break;
                case 'G':
                    g++;
                    break;
                case 'T':
                    t++;
                    break;
            }
        }
        
        int max=max_num(a, c, g, t);
        
        if(max==a) dna+='A';
        else if(max==c) dna+='C';
        else if(max==g) dna+='G';
        else dna+='T';
        
        cnt+=(n-max);

    }
    
    cout<<dna<<'\n'<<cnt;
}

int main(){
    cin>>n>>m;
    for(int i=0; i<n; i++)
        cin>>DNA[i];
    
    hamming_distance();
}