#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#define MAX 100

using namespace std;

int main() 
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;
    vector<pair<pair<int, int>, pair<int, string>>> v(n + 1);
                                                        
    for (int i = 1; i <= n; i++)
    {
        cin >> v[i].second.second >> v[i].second.first >> v[i].first.second >> v[i].first.first;
        // name, dd, mm, yy;

    }
    sort(v.begin(), v.end());

    cout << v[n].second.second << endl << v[1].second.second << endl;

    return 0;

}