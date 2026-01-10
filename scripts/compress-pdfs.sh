#!/bin/bash

# Script to compress PDF files
# Requires: ghostscript (install with: brew install ghostscript)

echo "📄 Compressing PDF files..."
echo ""

# Check if ghostscript is installed
if ! command -v gs &> /dev/null; then
    echo "❌ Error: ghostscript is not installed"
    echo "Install it with: brew install ghostscript"
    exit 1
fi

# Create backup directory
BACKUP_DIR="public/pdf-backup"
mkdir -p "$BACKUP_DIR"

# Function to compress PDF
compress_pdf() {
    local input="$1"
    local output="${input%.pdf}-compressed.pdf"
    
    echo "📄 Compressing: $(basename "$input")"
    
    # Backup original
    cp "$input" "$BACKUP_DIR/$(basename "$input")"
    
    # Get original size
    original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
    original_size_kb=$(echo "scale=2; $original_size / 1024" | bc)
    
    # Compress with ghostscript
    gs -sDEVICE=pdfwrite \
       -dCompatibilityLevel=1.4 \
       -dPDFSETTINGS=/screen \
       -dNOPAUSE \
       -dQUIET \
       -dBATCH \
       -sOutputFile="$output" \
       "$input" 2>/dev/null
    
    if [ -f "$output" ]; then
        new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        new_size_kb=$(echo "scale=2; $new_size / 1024" | bc)
        reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
        
        echo "  ✅ Compressed: ${original_size_kb}KB → ${new_size_kb}KB (${reduction}% reduction)"
        
        # Replace original if new file is smaller
        if [ $new_size -lt $original_size ]; then
            mv "$output" "$input"
            echo "  ✨ Replaced original"
        else
            rm "$output"
            echo "  ⚠️  Compressed file larger, keeping original"
        fi
    else
        echo "  ❌ Error compressing PDF"
    fi
    echo ""
}

# Compress PDFs in downloads directory
if [ -f "public/downloads/Xcoin Whitepaper 1.pdf" ]; then
    compress_pdf "public/downloads/Xcoin Whitepaper 1.pdf"
fi

if [ -f "public/downloads/Xcoin Whitepaper 2.pdf" ]; then
    compress_pdf "public/downloads/Xcoin Whitepaper 2.pdf"
fi

if [ -f "public/downloads/Xcoin Whitepaper 3.pdf" ]; then
    compress_pdf "public/downloads/Xcoin Whitepaper 3.pdf"
fi

# Legacy PDFs in root
if [ -f "public/XCoin_Whitepaper.pdf" ]; then
    compress_pdf "public/XCoin_Whitepaper.pdf"
fi

if [ -f "public/XXX DAO Governace.pdf" ]; then
    compress_pdf "public/XXX DAO Governace.pdf"
fi

echo "✅ PDF compression complete!"
echo "📦 Backups saved in: $BACKUP_DIR"

