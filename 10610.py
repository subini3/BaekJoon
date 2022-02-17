import sys
sys.stdin = open('input.txt','r')

s= input()

zero = s.split('1')
one = s.split('0')

zero_count = zero.count('')
one_count = one.count('')

print(min(len(one) - one_count, len(zero) - zero_count))