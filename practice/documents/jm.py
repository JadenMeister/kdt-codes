with open("style1.html", "w", encoding="utf-8") as file:
    
    for height in range(1, 101):
        file.write(f".height-{height}vh {{ height: {height}vh; }}\n")