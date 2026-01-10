#!/bin/bash

# All-in-One Optimization Script
# Optimizes videos, images, and PDFs for production
# Target: < 2s load time on mobile

echo "🚀 Starting full optimization process..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check dependencies
check_dependencies() {
    echo "📋 Checking dependencies..."
    MISSING=0
    
    if ! command -v ffmpeg &> /dev/null; then
        echo -e "${RED}❌ Error: ffmpeg is not installed${NC}"
        echo "Install it with: brew install ffmpeg"
        MISSING=1
    fi
    
    if ! command -v cwebp &> /dev/null; then
        echo -e "${RED}❌ Error: cwebp is not installed${NC}"
        echo "Install it with: brew install webp"
        MISSING=1
    fi
    
    if ! command -v gs &> /dev/null; then
        echo -e "${YELLOW}⚠️  Warning: ghostscript is not installed (optional for PDF compression)${NC}"
        echo "Install it with: brew install ghostscript"
    fi
    
    if [ $MISSING -eq 1 ]; then
        echo ""
        echo -e "${RED}Please install missing dependencies and try again.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ All required dependencies found${NC}"
    echo ""
}

# Run optimizations
check_dependencies

echo "📹 Step 1/3: Optimizing videos..."
bash scripts/optimize-videos.sh
echo ""

echo "🖼️  Step 2/3: Optimizing images..."
bash scripts/optimize-images.sh
echo ""

echo "📄 Step 3/3: Compressing PDFs..."
if command -v gs &> /dev/null; then
    bash scripts/compress-pdfs.sh
else
    echo -e "${YELLOW}⚠️  Skipping PDF compression (ghostscript not installed)${NC}"
fi
echo ""

echo -e "${GREEN}✅ Full optimization complete!${NC}"
echo ""
echo "📊 Summary:"
echo "   - Videos: Optimized for web (< 2MB target)"
echo "   - Images: Converted to WebP where beneficial"
echo "   - PDFs: Compressed for faster downloads"
echo ""
echo "💡 Next steps:"
echo "   1. Review optimized files"
echo "   2. Test website load times"
echo "   3. Delete backup directories if satisfied"
