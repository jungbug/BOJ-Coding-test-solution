#include <bits/stdc++.h>
using namespace std;
 
int n;
stack<int> a, b, c;
 
int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);
 
    cin >> n;
    for(int i = n; i >= 1; i--)
        a.push(i);
 
    while(c.size() != n) {
        int u, v;
        cin >> u >> v;
        if(u == 1) {
            while(v--) {
                b.push(a.top());
                a.pop();
            }
        }
        else {
            while(v--) {
                c.push(b.top());
                b.pop();
            }
        }
    }
 
    while(!c.empty()) {
        cout << c.top() << '\n';
        c.pop();
    }
    return 0;
}
 
