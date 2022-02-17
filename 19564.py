import sys
sys.stdin = open('input.txt','r')

S = input()

cnt = 1

for i in range(len(S) - 1):
    if ord(S[i]) < ord(S[i+1]):
        continue
    else:
        cnt += 1

print(cnt)    

