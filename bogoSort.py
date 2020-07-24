import random

numbers = [ 2,9,1,4,2,1]

#not a legitimate sorting algorithm

def bogoSort(numbers):
    random.shuffle(numbers)
    if(numbers != sorted(numbers)):
        bogoSort(numbers)
    return numbers

print(bogoSort(numbers))