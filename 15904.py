import sys
import re
sys.stdin = open('input.txt','r')

ucpc = input()


if (re.match('.*U.*C.*P.*C.*', ucpc)): 
    print('I love UCPC')
else: 
    print('I hate UCPC')

    

