R = int(input())
answer = input()
n = int(input())
f_answer = [input() for _ in range(n)]

win = 0
max_win = 0
for i in range(R):
    r = s = p = 0
    for j in f_answer:
        if j[i] == 'S':
            s += 1
            r += 2
        elif j[i] == 'P':
            s += 2
            p += 1
        elif j[i] == 'R':
            r += 1
            p += 2
    if answer[i] == 'S':
        win += s
    elif answer[i] == 'P':
        win += p
    elif answer[i] == 'R':
        win += r
    max_win += max(r, s, p)
print(win)
print(max_win)







