# Optimization Scripts

Diese Skripte helfen dabei, die Größe der Website zu reduzieren, indem Videos und Bilder optimiert werden.

## 📊 Aktuelle Dateigrößen-Analyse

### Größte Dateien:
- `public/vid/hero9.mp4` - **26MB** ⚠️
- `public/vid/dao2.mp4` - **13MB** ⚠️
- `public/vid/dao1.mp4` - **6.7MB**
- `public/vid/dao3.mp4` - **6.3MB**
- `public/xcoin-vid-compressed.mp4` - **6.9MB**
- `public/Validator.png` - **2.7MB**
- `public/1211-compressed.mp4` - **4.0MB**
- `public/1208-compressed.mp4` - **2.0MB**

### Verzeichnis-Größen:
- `public/vid/` - **52MB** (größtes Verzeichnis!)
- `public/img/` - **4.3MB**
- `public/learning_center_grid/` - **4.1MB**

## 🎬 Video-Optimierung

### Voraussetzungen:
```bash
brew install ffmpeg
```

### Verwendung:
```bash
./scripts/optimize-videos.sh
```

### Was macht das Skript?
- Komprimiert alle MP4-Videos mit H.264 Codec
- Reduziert Bitrate auf 1-2 Mbps
- Skaliert Videos auf max. 1920x1080
- Erstellt Backups in `public/vid-backup/`
- Zeigt Größenreduktion an

### Erwartete Ergebnisse:
- `hero9.mp4`: 26MB → ~5-8MB (70-80% Reduktion)
- `dao2.mp4`: 13MB → ~3-5MB (60-70% Reduktion)
- Andere Videos: 50-70% Reduktion

## 🖼️ Bild-Optimierung

### Voraussetzungen:
```bash
brew install webp        # Für WebP-Konvertierung
brew install optipng    # Optional: PNG-Optimierung
brew install jpegoptim   # Optional: JPG-Optimierung
```

### Verwendung:
```bash
./scripts/optimize-images.sh
```

### Was macht das Skript?
- Konvertiert große JPG/PNG zu WebP (30-50% kleiner)
- Optimiert Original-Dateien
- Findet automatisch Dateien >500KB
- Erstellt Backups in `public/img-backup/`
- Zeigt Größenreduktion an

### Erwartete Ergebnisse:
- JPG → WebP: 30-50% Reduktion
- PNG → WebP: 40-60% Reduktion
- `Validator.png`: 2.7MB → ~1-1.5MB WebP

## 📝 Nach der Optimierung

### 1. WebP-Dateien verwenden
Nach der Bildoptimierung müssen die WebP-Versionen im Code verwendet werden:

```tsx
// Statt:
<img src="/img/example.jpg" />

// Verwende:
<picture>
  <source srcSet="/img/example.webp" type="image/webp" />
  <img src="/img/example.jpg" alt="..." />
</picture>
```

Oder mit Next.js Image-Komponente (automatische WebP-Unterstützung):
```tsx
<Image src="/img/example.jpg" alt="..." />
```

### 2. Backups löschen
Wenn alles funktioniert:
```bash
rm -rf public/vid-backup
rm -rf public/img-backup
```

### 3. Git commit
```bash
git add public/
git commit -m "Optimize videos and images for smaller bundle size"
```

## ⚠️ Wichtige Hinweise

1. **Backups**: Die Skripte erstellen automatisch Backups. Prüfe die optimierten Dateien vor dem Löschen der Backups.

2. **Qualität**: Die Optimierung reduziert die Dateigröße, kann aber auch die Qualität leicht reduzieren. Teste die optimierten Dateien im Browser.

3. **Videos**: Große Videos (wie `hero9.mp4`) können mehrere Minuten zum Optimieren brauchen.

4. **WebP-Browser-Support**: WebP wird von allen modernen Browsern unterstützt. Für ältere Browser sollte ein Fallback (JPG/PNG) bereitgestellt werden.

## 🎯 Erwartete Gesamtreduktion

Nach beiden Optimierungen:
- **Videos**: ~52MB → ~15-20MB (60-70% Reduktion)
- **Bilder**: ~4.3MB → ~2-3MB (30-50% Reduktion)
- **Gesamt**: ~925MB → ~400-500MB (45-55% Reduktion)

