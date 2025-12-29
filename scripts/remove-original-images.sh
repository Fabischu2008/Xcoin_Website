#!/bin/bash

# Script to remove original JPG/PNG files that have WebP versions
# Only removes if WebP exists and is smaller

echo "🗑️  Removing original images with WebP versions..."
echo ""

REMOVED_COUNT=0
SAVED_SPACE=0

# Function to check and remove original if WebP exists
remove_if_webp_exists() {
    local original="$1"
    local webp="${original%.*}.webp"
    
    if [ -f "$webp" ]; then
        original_size=$(stat -f%z "$original" 2>/dev/null || stat -c%s "$original" 2>/dev/null)
        webp_size=$(stat -f%z "$webp" 2>/dev/null || stat -c%s "$webp" 2>/dev/null)
        
        if [ $webp_size -lt $original_size ]; then
            original_size_kb=$(echo "scale=2; $original_size / 1024" | bc)
            echo "  ✅ Removing: $(basename "$original") (${original_size_kb}KB) - WebP exists"
            rm "$original"
            REMOVED_COUNT=$((REMOVED_COUNT + 1))
            SAVED_SPACE=$((SAVED_SPACE + original_size))
        fi
    fi
}

# Process learning_center_grid
echo "Processing learning_center_grid..."
for file in public/learning_center_grid/*.jpg; do
    if [ -f "$file" ]; then
        remove_if_webp_exists "$file"
    fi
done

# Process specific files
echo "Processing specific files..."
remove_if_webp_exists "public/Validator.png"
remove_if_webp_exists "public/whitepapers_grid/world.png"
remove_if_webp_exists "public/img/xcoin_grid/screens/SAsP6Lv.png"
remove_if_webp_exists "public/validators_grid/earn_xcoin_effortlessly.jpg"

# Process screens directory
echo "Processing screens directory..."
for file in public/img/xcoin_grid/screens/*.jpg public/img/xcoin_grid/screens/*.jpeg public/img/xcoin_grid/screens/*.png; do
    if [ -f "$file" ] 2>/dev/null && [[ "$file" != *.webp ]]; then
        remove_if_webp_exists "$file"
    fi
done

SAVED_SPACE_MB=$(echo "scale=2; $SAVED_SPACE / 1024 / 1024" | bc)

echo ""
echo "✅ Removed $REMOVED_COUNT original files"
echo "💾 Saved: ${SAVED_SPACE_MB}MB"

