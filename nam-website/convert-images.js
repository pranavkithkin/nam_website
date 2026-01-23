const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

// Images to convert
const imagesToConvert = [
    'corporate-gifts.png',
    'custom-uniforms.png',
    'digital-printing.png',
    'hero-background.png',
    'portfolio-1.png',
    'portfolio-2.png',
    'portfolio-3.png'
];

async function convertToWebP() {
    console.log('Starting image conversion to WebP...\n');

    for (const imageName of imagesToConvert) {
        const inputPath = path.join(imagesDir, imageName);
        const outputPath = path.join(imagesDir, imageName.replace('.png', '.webp'));

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${imageName} - file not found`);
            continue;
        }

        try {
            const inputStats = fs.statSync(inputPath);
            const inputSizeKB = (inputStats.size / 1024).toFixed(2);

            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const outputSizeKB = (outputStats.size / 1024).toFixed(2);
            const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`✅ ${imageName}`);
            console.log(`   ${inputSizeKB} KB → ${outputSizeKB} KB (${savings}% reduction)\n`);
        } catch (error) {
            console.error(`❌ Error converting ${imageName}:`, error.message);
        }
    }

    console.log('Image conversion complete!');
}

convertToWebP().catch(console.error);
