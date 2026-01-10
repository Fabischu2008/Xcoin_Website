#!/bin/bash

# Script to move unused assets to backup directory
# Safely moves unused files instead of deleting them

echo "🗑️  Removing unused assets..."
echo ""

# Create backup directory with timestamp
BACKUP_DIR="public/unused-assets-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

MOVED_COUNT=0
TOTAL_SIZE=0

# Function to move file if it exists
move_file() {
    local file="$1"
    local description="$2"
    
    if [ -f "$file" ] || [ -d "$file" ]; then
        local size=$(du -sk "$file" 2>/dev/null | cut -f1 || echo "0")
        TOTAL_SIZE=$((TOTAL_SIZE + size))
        
        # Create directory structure in backup
        local backup_path="$BACKUP_DIR/$file"
        mkdir -p "$(dirname "$backup_path")"
        
        mv "$file" "$backup_path" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Moved:${NC} $file ($description)"
            MOVED_COUNT=$((MOVED_COUNT + 1))
        else
            echo -e "${RED}❌ Error moving:${NC} $file"
        fi
    else
        echo -e "${YELLOW}⚠️  Not found:${NC} $file"
    fi
}

# Videos
echo "📹 Moving unused videos..."
move_file "public/vid/hero6.mp4" "Unused video"
move_file "public/1208-compressed.mp4" "Unused video (only in scripts)"
move_file "public/videos/pdf_download_video.mp4" "Unused video"
echo ""

# Images - Learning Center Grid (duplicates)
echo "🖼️  Moving unused learning center grid images..."
move_file "public/learning_center_grid/core_concepts.webp" "Duplicate (using .jpg version)"
move_file "public/learning_center_grid/cryptographic_foundations.webp" "Duplicate (using .jpg version)"
move_file "public/learning_center_grid/getting_involved.webp" "Duplicate (using .jpg version)"
move_file "public/learning_center_grid/governance_dao.webp" "Duplicate (using .jpg version)"
move_file "public/learning_center_grid/technology_architecture.webp" "Duplicate (using .jpg version)"
move_file "public/learning_center_grid/use_cases_benefits.webp" "Duplicate (using .jpg version)"
echo ""

# Images - Members Grid (unused)
echo "🖼️  Moving unused members grid images..."
move_file "public/members_grid/empty_tile.jpg" "Unused image"
move_file "public/members_grid/xcoin_businessman.jpeg" "Unused image"
move_file "public/members_grid/xcoin_logo_slogan.png" "Unused image"
move_file "public/members_grid/xcoin_logo_white.png" "Unused image"
move_file "public/members_grid/xcoin_privacy_is_power.jpeg" "Unused image"
echo ""

# Images - Other unused
echo "🖼️  Moving other unused images..."
move_file "public/whitepapers_grid/world.webp" "Unused image"
move_file "public/img/community/sep.jpg" "Unused image"
move_file "public/img/xcoin_grid/screens/ai-agents-1.webp" "Unused screen image"
move_file "public/img/xcoin_grid/screens/blockchain-development-companies-1.webp" "Unused screen image"
echo ""

# PDFs - Legacy versions
echo "📄 Moving legacy PDFs..."
move_file "public/XCoin_Whitepaper.pdf" "Legacy PDF (using /downloads/ version)"
move_file "public/XXX DAO Governace.pdf" "Legacy PDF (using /downloads/ version)"
echo ""

# Summary
TOTAL_SIZE_MB=$(echo "scale=2; $TOTAL_SIZE / 1024" | bc)
echo ""
echo -e "${GREEN}✅ Cleanup complete!${NC}"
echo "   Files moved: $MOVED_COUNT"
echo "   Total size: ~${TOTAL_SIZE_MB}MB"
echo "   Backup location: $BACKUP_DIR"
echo ""
echo "💡 Review the backup directory and delete it if satisfied:"
echo "   rm -rf $BACKUP_DIR"
