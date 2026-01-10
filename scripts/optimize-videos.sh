#!/bin/bash

# Video Optimization Script
# Compresses all MP4 videos in the public directory
# Requires: ffmpeg (install with: brew install ffmpeg)

echo "🎬 Starting video optimization..."
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ Error: ffmpeg is not installed"
    echo "Install it with: brew install ffmpeg"
    exit 1
fi

# Create backup directory
BACKUP_DIR="public/vid-backup"
mkdir -p "$BACKUP_DIR"

# Function to optimize video
optimize_video() {
    local input="$1"
    local output="$2"
    local max_size_mb="$3"
    
    echo "📹 Optimizing: $input"
    
    # Get original size
    original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
    original_size_mb=$(echo "scale=2; $original_size / 1024 / 1024" | bc)
    
    # Backup original
    cp "$input" "$BACKUP_DIR/$(basename "$input")"
    
    # Optimize with ffmpeg
    # Target: 1-2 Mbps bitrate, H.264 codec, optimized for web
    ffmpeg -i "$input" \
        -c:v libx264 \
        -preset slow \
        -crf 28 \
        -maxrate 2M \
        -bufsize 4M \
        -vf "scale='if(gt(iw,1920),1920,-1)':'if(gt(ih,1080),1080,-1)'" \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -y \
        "$output" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        new_size_mb=$(echo "scale=2; $new_size / 1024 / 1024" | bc)
        reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
        
        echo "  ✅ Optimized: ${original_size_mb}MB → ${new_size_mb}MB (${reduction}% reduction)"
        
        # Replace original if new file is smaller
        if [ $new_size -lt $original_size ]; then
            mv "$output" "$input"
            echo "  ✨ Replaced original"
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

# Optimize videos in public directory
echo "Optimizing videos in public/ directory..."

# Main videos (1208-compressed.mp4 was removed as unused)
if [ -f "public/1211-compressed.mp4" ]; then
    optimize_video "public/1211-compressed.mp4" "public/1211-compressed-opt.mp4" 3
fi

if [ -f "public/1212-compressed.mp4" ]; then
    optimize_video "public/1212-compressed.mp4" "public/1212-compressed-opt.mp4" 1
fi

if [ -f "public/xcoin-vid-compressed.mp4" ]; then
    optimize_video "public/xcoin-vid-compressed.mp4" "public/xcoin-vid-compressed-opt.mp4" 3
fi

# Videos in vid/ directory
if [ -f "public/vid/hero9.mp4" ]; then
    optimize_video "public/vid/hero9.mp4" "public/vid/hero9-opt.mp4" 5
fi

if [ -f "public/vid/dao1.mp4" ]; then
    optimize_video "public/vid/dao1.mp4" "public/vid/dao1-opt.mp4" 3
fi

if [ -f "public/vid/dao2.mp4" ]; then
    optimize_video "public/vid/dao2.mp4" "public/vid/dao2-opt.mp4" 3
fi

if [ -f "public/vid/dao3.mp4" ]; then
    optimize_video "public/vid/dao3.mp4" "public/vid/dao3-opt.mp4" 3
fi

echo "✅ Video optimization complete!"
echo "📦 Backups saved in: $BACKUP_DIR"
echo ""
echo "💡 Tip: Review the optimized videos and delete backups if satisfied"

