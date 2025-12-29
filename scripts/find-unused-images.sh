#!/bin/bash

# Script to find unused images in the project
# Compares files in public/ with references in code

echo "🔍 Finding unused images..."
echo ""

# Get all image files in public/
ALL_IMAGES=$(find public -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.svg" \) ! -path "*/node_modules/*" | sort)

# Get all image references in code
USED_IMAGES=$(grep -r -h -oE '["\047]/[^"\047]*\.(jpg|jpeg|png|webp|svg|gif|avif)' app components --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" 2>/dev/null | sed 's/["\047]//g' | sed 's|^/||' | sort -u)

echo "📊 Analysis:"
echo "  Total images: $(echo "$ALL_IMAGES" | wc -l | tr -d ' ')"
echo "  Referenced in code: $(echo "$USED_IMAGES" | wc -l | tr -d ' ')"
echo ""

# Find unused images
UNUSED_IMAGES=""
for img in $ALL_IMAGES; do
    img_name=$(basename "$img")
    img_path="${img#public/}"
    
    # Check if image is referenced
    found=0
    for used in $USED_IMAGES; do
        if [[ "$img_path" == *"$used"* ]] || [[ "$used" == *"$img_path"* ]] || [[ "$img_name" == "$(basename "$used")" ]]; then
            found=1
            break
        fi
    done
    
    if [ $found -eq 0 ]; then
        UNUSED_IMAGES="$UNUSED_IMAGES$img\n"
    fi
done

if [ -n "$UNUSED_IMAGES" ]; then
    echo "⚠️  Potentially unused images:"
    echo -e "$UNUSED_IMAGES" | while read -r img; do
        if [ -n "$img" ]; then
            size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
            size_kb=$(echo "scale=2; $size / 1024" | bc)
            echo "  $img (${size_kb}KB)"
        fi
    done
else
    echo "✅ All images appear to be used"
fi

echo ""
echo "💡 Note: This is a heuristic check. Review manually before deleting!"

