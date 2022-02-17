N = int(input())
peaks = list(map(int, input().split()))

cnt = 0
highest = 0
res = []

for i in peaks:
    if i < highest:
        cnt += 1
    else:
        highest = i
        res.append(cnt)
        cnt = 0

res.append(cnt)  #내림차순일때?
print(max(res))

