from turtle import Turtle , Screen
import random

ant = Turtle()
screen = Screen()
screen.colormode(255)

ant.speed("fastest")

def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    random_color = (r, g, b)
    return random_color




def draw_spirograph(size_gape):
    for _ in range(360 // size_gape):
        ant.color(random_color())
        ant.circle(100)
        ant.setheading(ant.heading() + size_gape)



draw_spirograph(25)

screen.exitonclick()







# for _ in range(300):
#     ant.color(random_color())
#     ant.circle(150)
#     ant.right(2)


# direction = [0, 90, 180, 270]
# ant.pensize(15)
# ant.speed("fastest")


# for _ in range(1000):
#     ant.color(random_color())
#     ant.forward(30)
#     ant.setheading(random.choice(direction))