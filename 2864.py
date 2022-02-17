N = int(input())
seat = input()

cnt = seat.count('LL')

if cnt >= 1:
    print(N-cnt+1)
else:
    print(N)

