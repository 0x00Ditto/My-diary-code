from turtle import Turtle, Screen

tim = Turtle()
screen = Screen()


def move_forwards():
    tim.forward(10)


def move_left():
    tim.left(10)

def move_right():
    tim.right(10)

def move_down():
    tim.backward(10)
def clear():
    tim.clear()
    tim.penup()
    tim.home()
    tim.pendown()


screen.onkey(key="w", fun=move_forwards)
screen.onkey(key="a", fun=move_left)
screen.onkey(key="d", fun=move_right)
screen.onkey(key="s", fun=move_down)
screen.onkey(key="c", fun=clear)

screen.listen()
screen.exitonclick()
