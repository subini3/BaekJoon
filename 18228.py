n = int(input())

answer = [1,2] * (n//2) + ([3] if n % 2 == 1 else [])

print(*answer)







