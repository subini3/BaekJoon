n, m = map(int, input().split())

cnt = 0
li = []

for _ in range(m):
    win, blank = map(int, input().split())
    if win >= n:
        cnt += 1
    else:
        li.append(n-win)
li.sort()

if cnt > m - 1:
    print(0)
else:
    print(sum(li[:m-1-cnt]))




