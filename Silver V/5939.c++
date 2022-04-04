#include <bits/stdc++.h>
using namespace std;
 
struct race {
    int h, m, s;
};
int n;
race t[5001];
 
bool cmp(race a, race b) {
    return a.h == b.h ? (a.m == b.m ? a.s < b.s : a.m < b.m) : a.h < b.h;
}
 
int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);
 
    cin >> n;
    for(int i = 0; i < n; i++)
        cin >> t[i].h >> t[i].m >> t[i].s;
    sort(t, t + n, cmp);
 
    for(int i = 0; i < n; i++)
        cout << t[i].h << ' ' << t[i].m << ' ' << t[i].s << '\n';
    return 0;
}