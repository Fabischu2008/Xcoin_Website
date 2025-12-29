#!/bin/bash

# Image Optimization Script
# Converts JPG/PNG to WebP and optimizes images
# Requires: cwebp (install with: brew install webp)
#           optipng (install with: brew install optipng)
#           jpegoptim (install with: brew install jpegoptim)

echo "🖼️  Starting image optimization..."
echo ""

# Check dependencies
MISSING_DEPS=0

if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp is not installed"
    echo "Install it with: brew install webp"
    MISSING_DEPS=1
fi

if ! command -v optipng &> /dev/null; then
    echo "⚠️  Warning: optipng is not installed (optional for PNG optimization)"
    echo "Install it with: brew install optipng"
fi

if ! command -v jpegoptim &> /dev/null; then
    echo "⚠️  Warning: jpegoptim is not installed (optional for JPG optimization)"
    echo "Install it with: brew install jpegoptim"
fi

if [ $MISSING_DEPS -eq 1 ]; then
    exit 1
fi

# Create backup directory
BACKUP_DIR="public/img-backup"
mkdir -p "$BACKUP_DIR"

# Function to optimize JPG/JPEG
optimize_jpg() {
    local file="$1"
    local webp_file="${file%.*}.webp"
    
    echo "📸 Optimizing: $file"
    
    # Backup original
    cp "$file" "$BACKUP_DIR/$(basename "$file")"
    
    # Get original size
    original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    original_size_kb=$(echo "scale=2; $original_size / 1024" | bc)
    
    # Optimize JPG with jpegoptim (if available)
    if command -v jpegoptim &> /dev/null; then
        jpegoptim --max=85 --strip-all --preserve --force "$file" 2>/dev/null
    fi
    
    # Convert to WebP
    cwebp -q 85 -m 6 "$file" -o "$webp_file" 2>/dev/null
    
    if [ -f "$webp_file" ]; then
        webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
        webp_size_kb=$(echo "scale=2; $webp_size / 1024" | bc)
        reduction=$(echo "scale=1; (1 - $webp_size / $original_size) * 100" | bc)
        
        echo "  ✅ WebP: ${original_size_kb}KB → ${webp_size_kb}KB (${reduction}% reduction)"
        
        # Keep WebP if significantly smaller
        if [ $webp_size -lt $original_size ]; then
            echo "  ✨ WebP version created: $webp_file"
        else
            rm "$webp_file"
            echo "  ⚠️  WebP larger, keeping original"
        fi
    fi
    echo ""
}

# Function to optimize PNG
optimize_png() {
    local file="$1"
    local webp_file="${file%.*}.webp"
    
    echo "🖼️  Optimizing: $file"
    
    # Backup original
    cp "$file" "$BACKUP_DIR/$(basename "$file")"
    
    # Get original size
    original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    original_size_kb=$(echo "scale=2; $original_size / 1024" | bc)
    
    # Optimize PNG with optipng (if available)
    if command -v optipng &> /dev/null; then
        optipng -o7 -strip all -quiet "$file" 2>/dev/null
    fi
    
    # Convert to WebP
    cwebp -q 85 -m 6 "$file" -o "$webp_file" 2>/dev/null
    
    if [ -f "$webp_file" ]; then
        webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
        webp_size_kb=$(echo "scale=2; $webp_size / 1024" | bc)
        reduction=$(echo "scale=1; (1 - $webp_size / $original_size) * 100" | bc)
        
        echo "  ✅ WebP: ${original_size_kb}KB → ${webp_size_kb}KB (${reduction}% reduction)"
        
        # Keep WebP if significantly smaller
        if [ $webp_size -lt $original_size ]; then
            echo "  ✨ WebP version created: $webp_file"
        else
            rm "$webp_file"
            echo "  ⚠️  WebP larger, keeping original"
        fi
    fi
    echo ""
}

# Find and optimize large images (>500KB)
echo "Finding large images (>500KB)..."
echo ""

find public -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -size +500k | while read file; do
    optimize_jpg "$file"
done

find public -type f -iname "*.png" -size +500k | while read file; do
    optimize_png "$file"
done

# Optimize specific large files
echo "Optimizing known large files..."
echo ""

# Large PNG files
if [ -f "public/Validator.png" ]; then
    optimize_png "public/Validator.png"
fi

if [ -f "public/img/xcoin_grid/screens/SAsP6Lv.png" ]; then
    optimize_png "public/img/xcoin_grid/screens/SAsP6Lv.png"
fi

if [ -f "public/whitepapers_grid/world.png" ]; then
    optimize_png "public/whitepapers_grid/world.png"
fi

# Large JPG files in learning_center_grid
for file in public/learning_center_grid/*.jpg; do
    if [ -f "$file" ]; then
        optimize_jpg "$file"
    fi
done

# Large images in xcoin_grid/screens
for file in public/img/xcoin_grid/screens/*.jpg public/img/xcoin_grid/screens/*.jpeg public/img/xcoin_grid/screens/*.png; do
    if [ -f "$file" ] 2>/dev/null; then
        if [[ "$file" == *.jpg ]] || [[ "$file" == *.jpeg ]]; then
            optimize_jpg "$file"
        elif [[ "$file" == *.png ]]; then
            optimize_png "$file"
        fi
    fi
done

echo "✅ Image optimization complete!"
echo "📦 Backups saved in: $BACKUP_DIR"
echo ""
echo "💡 Next steps:"
echo "   1. Review the WebP versions"
echo "   2. Update code to use .webp files where available"
echo "   3. Delete backups if satisfied"

