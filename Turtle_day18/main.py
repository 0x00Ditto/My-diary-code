from turtle import Turtle , Screen

timmy_the_turtle = Turtle()
timmy_the_turtle.color("dark violet")


def triangle_turtle():
    for _ in range(3):
        timmy_the_turtle.forward(100)
        timmy_the_turtle.right(120)

def square_turtle():
    for _ in range(4):
        timmy_the_turtle.forward(100)
        timmy_the_turtle.right(90)

def pentagon_turtle():
    for _ in range(5):
        timmy_the_turtle.forward(100)
        timmy_the_turtle.right(72)

def hexagon_turtle():
    for _ in range(6):
        timmy_the_turtle.forward(100)
        timmy_the_turtle.right(60)

def heptagon_turtle():
    for _ in range(7):
        timmy_the_turtle.forward(100)
        timmy_the_turtle.right(51.42)

def octagon_turtle():
    for _ in range(8):
        timmy_the_turtle.forward(100)
        timmy_the_turtle.right(45)

def nonagon_turtle():
    for _ in range(9):
        timmy_the_turtle.forward(100)
        timmy_the_turtle.right(40)

def decagon_turtle():
    for _ in range(10):
        timmy_the_turtle.forward(100)
        timmy_the_turtle.right(36)


triangle_turtle()
square_turtle()
pentagon_turtle()
hexagon_turtle()
heptagon_turtle()
octagon_turtle()
nonagon_turtle()
decagon_turtle()



screen = Screen()
screen.exitonclick()
