import sys
sys.stdin = open('input.txt','r')

n, l, k = map(int,input().split())

cnt = []
for _ in range(n):
    sub1, sub2 = map(int, input().split())
    if l >= sub2:
        cnt.append(140)
    elif l >= sub1:
        cnt.append(100)
cnt.sort(reverse = True)
print(sum(cnt[:k]))
    