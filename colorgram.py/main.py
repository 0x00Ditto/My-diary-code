import colorgram

# Extraire 10 couleurs de 'test.jpg'.
colors = colorgram.extract(r'C:\Users\diffb\Desktop\dot_or_dot.png', 255)

# Pour chaque couleur, imprimer ses valeurs RGB et HSL.
for color in colors:
    rgb = color.rgb  # ou rgb = (color.rgb.r, color.rgb.g, color.rgb.b)
    hsl = color.hsl
    proportion = color.proportion# ou hsl = (color.hsl.h, color.hsl.s, color.hsl.l)
    print(f"{rgb}")
