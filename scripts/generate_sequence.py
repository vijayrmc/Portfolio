from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs('public/sequence', exist_ok=True)

# Generate 50 frames
for i in range(1, 51):
    img = Image.new('RGB', (1920, 1080), color = (int(15 + i*2), int(15 + i*2), int(15 + i*2)))
    d = ImageDraw.Draw(img)
    # Just a simple text or shape
    d.text((900, 500), f"Frame {i}", fill=(200, 200, 200))
    
    # Save as webp
    img.save(f'public/sequence/{i:04d}.webp', 'WEBP')

print("Generated 50 frames.")
