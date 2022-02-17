import sys
sys.stdin = open('input.txt','r')

n = int(input())
one_round = list(map(int, input().split()))
two_round = list(map(int, input().split()))

one_socre = sum([abs(i) for i in one_round])
two_socre = sum([abs(j) for j in two_round])

print(one_socre + two_socre)