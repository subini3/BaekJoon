import sys
sys.stdin = open('input.txt','r')

i = 1
while True:
    L, P, V = map(int, input().split())
    if V + P + L == 0:
        break
    case = (V // P) * L + min(L, V % P)
    print(f'Case {i}: {case}')
    i += 1

