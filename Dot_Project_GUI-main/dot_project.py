from turtle import Turtle, Screen
import random

dot = Turtle()
dot.hideturtle()


COLOURS = [(244, 243, 240),(244, 245, 248),(236, 240, 238),(202, 159, 107),(242, 233, 237),(133, 169, 186),(49, 110, 138),(138, 92, 68),(138, 179, 149),(225, 204, 120),(197, 140, 162),(138, 73, 95),(52, 125, 88),(166, 154, 58),(78, 162, 105),(211, 89, 66),(188, 88, 115),(165, 207, 188),(227, 168, 178),(48, 157, 177),(10, 105, 74),(30, 52, 70),(158, 206, 212),(226, 173, 165),(116, 118, 158),(134, 32, 49),(12, 94, 104),(22, 59, 52),(127, 40, 34),(42, 59, 96),(67, 42, 54),(186, 185, 207),(247, 209, 5),(76, 69, 45)]


def random_color():
    r, g, b = random.choice(COLOURS)
    return (r/255, g/255, b/255)


def dot_picture(length, largeur):
    start_x = -100
    start_y = 100
    dot.penup()
    dot.goto(start_x, start_y)

    # Taille et espacement
    dot_size = 20
    spacing = 30
    for _ in range(length):# Nombre de point
        for _ in range(largeur):  # Nombre de Lignes
            dot.dot(dot_size, random_color())
            dot.forward(spacing)
        # Retourner à la position de départ en x et descendre en y
        start_y -= spacing
        dot.goto(start_x, start_y)


def main():
    screen = Screen()
    number_of_dot = int(screen.numinput("Admin","How many Dot do you want per line ?: ",default = 5, minval=5 ,maxval=30))
    number_of_line = int(screen.numinput("Admin","How many line do you want? : ", default = 1, minval=1 ,maxval=30))
    dot_picture(number_of_line, number_of_dot)
    screen.exitonclick()



main()

if '__Main__' == '__Main__':
    main()
