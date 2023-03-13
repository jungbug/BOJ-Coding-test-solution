import sys
from collections import defaultdict
from datetime import datetime, timedelta


def si(): return sys.stdin.readline()


def msis(): return map(str, si().split())


n, l, f = msis()
n, f, maximum = int(n), int(f), timedelta(days=int(l[:3]), hours=int(l[4:6]), minutes=int(l[7:]))
minute = timedelta(minutes=1)
table = defaultdict(dict)
p_table = defaultdict()
for _ in range(n):
    line = si()
    now = datetime.strptime(line[:16], '%Y-%m-%d %H:%M')
    part, name = line[16:].split()
    if not p_table.get(name):
        p_table[name] = 0
    if table[name].get(part):
        period = now - table[name][part]
        if period > maximum:
            p_table[name] += ((period - maximum) // minute) * f
        del table[name][part]
    else:
        table[name][part] = now

ret = [(k, v) for k, v in p_table.items() if v]
if ret:
    for name, val in sorted(ret, key=lambda x: x[0]):
        print(name, val)
else:
    print(-1)



# n,l,f = input().split()

# endOfMonth = [None, 31, 27, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

# d = {}

# d_money = {}

# day = int(l.split("/")[0])
# hour = int(l.split("/")[1].split(":")[0])
# min = int(l.split("/")[1].split(":")[1])

# Btimeout = day * 24 * 60 + hour * 60 + min


# for i in range(int(n)):
#     Sday, Stime, Smac, Sname = input().split()
#     Month = 0
#     if d.get(Sname):
#         Month += int(Sday.split("-")[1]) - int(d[Sname][0].split("-")[1])
#         if Month > 0:
#             BMonthToDay = 0
#             for j in range(Month):
#                 BMonthToDay += endOfMonth[int(d[Sname][0].split("-")[1])+j]
#                 # BMonthToDay += endOfMonth[int(Sday.split("-")[1])+j+1]
#                 # 일단 보류
#             BMonthToDay -= int(d[Sname][0].split("-")[2])
#             BMonthToDay += int(Sday.split("-")[2])
#             BMonthToDay = BMonthToDay * 24 * 60
#             BDayToMin = 0
#             BDayToMin -= int(d[Sname][1].split(":")[0]) * 60 + int(d[Sname][1].split(":")[1])
#             BDayToMin += int(Stime.split(":")[0]) * 60 + int(Stime.split(":")[1])
#             k = BMonthToDay + BDayToMin
#             if k > Btimeout:
#                 if d_money.get(Sname):
#                     d_money[Sname] += k - Btimeout
#                 else:
#                     d_money[Sname] = k - Btimeout
#         else:  #이 경우는 같은 달로 날짜가 무조건 새로운 input이 높음
#             BAllTime = 0
#             Bday = (int(Sday.split("-")[2]) - int(d[Sname][0].split("-")[2])) * 24 * 60
#             BHour = (int(Stime.split(":")[0]) - int(d[Sname][1].split(":")[0])) * 60
#             Bmin = int(Stime.split(":")[1]) - int(d[Sname][1].split(":")[1])
#             BAllTime += Bday + BHour + Bmin
#             if BAllTime > Btimeout:
#                 if d_money.get(Sname):
#                     d_money[Sname] += BAllTime - Btimeout
#                 else:
#                     d_money[Sname] = BAllTime - Btimeout
#         d.pop(Sname)
#     else:
#         d[Sname] = [Sday, Stime, Smac]

# if len(d_money):
#     sorted_dict = sorted(d_money.items(), key = lambda item: item[0])
#     for key, value in sorted_dict:
#         print(key, int(value) * int(f))
# else:
#     print(-1)

