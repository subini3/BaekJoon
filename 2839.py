n = int(input())

cnt = 0
while n >= 0:
    if n % 5 != 0:
        n -= 3
        cnt += 1

    else:
        cnt += n // 5
        print(cnt)
        break

else:
    print(-1)












