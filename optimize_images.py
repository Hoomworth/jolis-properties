import os
import sys
from PIL import Image

def compress_image(file_path):
    try:
        orig_size = os.path.getsize(file_path)
        img = Image.open(file_path)
        fmt = img.format
        if not fmt:
            return False

        temp_path = file_path + ".tmp"
        
        # Compress based on format
        if fmt in ["JPEG", "MPO"] or file_path.lower().endswith(('.jpg', '.jpeg')):
            # Save as JPEG with 80% quality and optimization
            img.save(temp_path, format="JPEG", quality=80, optimize=True)
        elif fmt == "PNG" or file_path.lower().endswith('.png'):
            # Save optimized PNG
            img.save(temp_path, format="PNG", optimize=True)
        else:
            return False

        new_size = os.path.getsize(temp_path)
        
        # Replace only if new size is smaller
        if new_size < orig_size:
            os.replace(temp_path, file_path)
            reduction = (orig_size - new_size) / orig_size * 100
            print(f"Optimized {os.path.basename(file_path)}: {orig_size/1024:.1f}KB -> {new_size/1024:.1f}KB (-{reduction:.1f}%)")
            return True
        else:
            if os.path.exists(temp_path):
                os.remove(temp_path)
            print(f"Skipped {os.path.basename(file_path)}: Already optimized.")
            return False
            
    except Exception as e:
        print(f"Error optimizing {os.path.basename(file_path)}: {e}")
        return False

def main():
    # If file paths are passed as arguments (e.g. from git hook), optimize only those
    if len(sys.argv) > 1:
        files_to_optimize = sys.argv[1:]
    else:
        # Otherwise, scan the entire images directory
        images_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "images")
        if not os.path.exists(images_dir):
            print(f"Images directory not found: {images_dir}")
            return
        files_to_optimize = [
            os.path.join(images_dir, f) for f in os.listdir(images_dir)
            if f.lower().endswith(('.jpg', '.jpeg', '.png'))
        ]

    optimized_count = 0
    for file_path in files_to_optimize:
        if os.path.exists(file_path):
            if compress_image(file_path):
                optimized_count += 1
                
    print(f"Compression run completed. Optimized {optimized_count} images.")

if __name__ == '__main__':
    main()
