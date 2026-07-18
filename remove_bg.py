from PIL import Image
import sys

img = Image.open(sys.argv[1]).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        # Remove white and near-white pixels
        if r > 220 and g > 220 and b > 220:
            pixels[x, y] = (r, g, b, 0)
        # Remove checkerboard light-gray pixels
        elif r > 190 and g > 190 and b > 190 and abs(r - g) < 15 and abs(g - b) < 15:
            pixels[x, y] = (r, g, b, 0)

img.save(sys.argv[2], "PNG")
print("Done - background removed")
