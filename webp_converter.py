from PIL import Image
from pathlib import Path
import shutil
folder = Path("./images")

for img in folder.iterdir():
    if img.is_dir() or img.suffix==".webp":
        continue
    print(img)
    im = Image.open(img)
    
    im.save(img.parent/(img.name[:-4]+".webp"), "webp")
    shutil.move(img, img.parent/"source"/img.name)

folder2  = Path("./slides")

for img in folder2.iterdir():
    if img.is_dir() or img.suffix==".webp":
        continue
    print(img)
    im = Image.open(img)
    im.save(img.parent /(img.name[:-4]+".webp"), "webp")
    shutil.move(img, img.parent/"source"/img.name)