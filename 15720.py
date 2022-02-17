import sys
sys.stdin = open('input.txt','r')

b, c, d = map(int, input().split())
buger = list(map(int, input().split()))
side = list(map(int, input().split()))
drink = list(map(int, input().split()))

buger.sort(reverse = True)
side.sort(reverse = True)
drink.sort(reverse = True)

price = 0
min_menu = min(b, c, d)
for i in range(min_menu):
    price += int((buger[i] + side[i] + drink[i]) * 0.9)

price += sum(buger[min_menu:]) + sum(side[min_menu:]) + sum(drink[min_menu:])

print(sum(buger) + sum(side) + sum(drink))
print(price)

