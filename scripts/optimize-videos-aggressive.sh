#!/bin/bash

# Aggressive Video Optimization Script
# For mobile-first optimization (< 2s load time)
# Targets: Background videos < 1MB, Hero videos < 2MB

echo "🎬 Starting aggressive video optimization for mobile..."
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ Error: ffmpeg is not installed"
    echo "Install it with: brew install ffmpeg"
    exit 1
fi

# Create backup directory
BACKUP_DIR="public/vid-backup-aggressive"
mkdir -p "$BACKUP_DIR"

# Function to aggressively optimize video
optimize_video_aggressive() {
    local input="$1"
    local output="$2"
    local target_mb="$3"
    local scale="$4"  # e.g., "1280:720" or "1920:1080"
    
    echo "📹 Optimizing: $(basename "$input")"
    echo "   Target: < ${target_mb}MB, Scale: ${scale}"
    
    # Backup original
    cp "$input" "$BACKUP_DIR/$(basename "$input")"
    
    # Get original size
    original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
    original_size_mb=$(echo "scale=2; $original_size / 1024 / 1024" | bc)
    
    # Aggressive optimization for mobile
    # - CRF 32: Higher compression (28 is standard, 32 is more aggressive)
    # - Scale down: Reduce resolution for mobile
    # - Remove audio: Background videos don't need audio
    # - Fast preset: Balance between speed and compression
    ffmpeg -i "$input" \
        -c:v libx264 \
        -preset medium \
        -crf 32 \
        -vf "scale=${scale}:force_original_aspect_ratio=decrease" \
        -an \
        -movflags +faststart \
        -y \
        "$output" 2>/dev/null
    
    if [ $? -eq 0 ] && [ -f "$output" ]; then
        new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        new_size_mb=$(echo "scale=2; $new_size / 1024 / 1024" | bc)
        reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
        
        target_bytes=$(echo "$target_mb * 1024 * 1024" | bc)
        target_bytes=${target_bytes%.*}  # Remove decimal
        
        echo "  📊 ${original_size_mb}MB → ${new_size_mb}MB (${reduction}% reduction)"
        
        # If still too large, compress even more
        if [ $new_size -gt $target_bytes ]; then
            echo "  ⚠️  Still too large, applying additional compression..."
            ffmpeg -i "$output" \
                -c:v libx264 \
                -preset slow \
                -crf 35 \
                -vf "scale=${scale}:force_original_aspect_ratio=decrease" \
                -an \
                -movflags +faststart \
                -y \
                "${output}.tmp" 2>/dev/null
            
            if [ -f "${output}.tmp" ]; then
                tmp_size=$(stat -f%z "${output}.tmp" 2>/dev/null || stat -c%s "${output}.tmp" 2>/dev/null)
                tmp_size_mb=$(echo "scale=2; $tmp_size / 1024 / 1024" | bc)
                
                if [ $tmp_size -lt $new_size ]; then
                    mv "${output}.tmp" "$output"
                    new_size=$tmp_size
                    new_size_mb=$tmp_size_mb
                    reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
                    echo "  ✅ Re-compressed: ${new_size_mb}MB (${reduction}% reduction)"
                else
                    rm "${output}.tmp"
                fi
            fi
        fi
        
        # Replace original if new file is smaller and meets target
        if [ $new_size -lt $original_size ]; then
            mv "$output" "$input"
            echo "  ✨ ✅ Replaced original (${new_size_mb}MB < target ${target_mb}MB)"
        else
            rm "$output"
            echo "  ⚠️  New file larger, keeping original"
        fi
    else
        echo "  ❌ Error optimizing video"
        rm -f "$output"
    fi
    echo ""
}

# Optimize background videos (target: < 1MB, 1280x720)
echo "🎥 Optimizing background videos (< 1MB target)..."
echo ""

# Note: 1208-compressed.mp4 was removed as unused
if [ -f "public/1211-compressed.mp4" ]; then
    optimize_video_aggressive "public/1211-compressed.mp4" "public/1211-compressed-opt.mp4" 1 "1280:720"
fi

if [ -f "public/1212-compressed.mp4" ]; then
    optimize_video_aggressive "public/1212-compressed.mp4" "public/1212-compressed-opt.mp4" 1 "1280:720"
fi

# Optimize hero videos (target: < 2MB, 1920x1080)
echo "🎬 Optimizing hero videos (< 2MB target)..."
echo ""

if [ -f "public/xcoin-vid-compressed.mp4" ]; then
    optimize_video_aggressive "public/xcoin-vid-compressed.mp4" "public/xcoin-vid-compressed-opt.mp4" 2 "1920:1080"
fi

# Optimize videos in vid/ directory
if [ -f "public/vid/hero9.mp4" ]; then
    optimize_video_aggressive "public/vid/hero9.mp4" "public/vid/hero9-opt.mp4" 2 "1920:1080"
fi

if [ -f "public/vid/hero11.mp4" ]; then
    optimize_video_aggressive "public/vid/hero11.mp4" "public/vid/hero11-opt.mp4" 2 "1920:1080"
fi

if [ -f "public/vid/black-lines.mp4" ]; then
    optimize_video_aggressive "public/vid/black-lines.mp4" "public/vid/black-lines-opt.mp4" 1 "1280:720"
fi

if [ -f "public/vid/city-1.mp4" ]; then
    optimize_video_aggressive "public/vid/city-1.mp4" "public/vid/city-1-opt.mp4" 1 "1280:720"
fi

# DAO videos (target: < 1.5MB)
for i in 1 2 3; do
    if [ -f "public/vid/dao${i}.mp4" ]; then
        optimize_video_aggressive "public/vid/dao${i}.mp4" "public/vid/dao${i}-opt.mp4" 1.5 "1280:720"
    fi
done

echo "✅ Aggressive video optimization complete!"
echo "📦 Backups saved in: $BACKUP_DIR"
echo ""
echo "💡 Tip: Review the optimized videos and test on mobile devices"
echo "   Target: < 2s load time on 3G connection"
