import sys
import os
import fitz

pdf_dir = r'c:\Users\liamg\Desktop\china'
files = os.listdir(pdf_dir)
pdf_file = [f for f in files if f.startswith('Documento sin') and f.endswith('.pdf')][0]
pdf_path = os.path.join(pdf_dir, pdf_file)

doc = fitz.open(pdf_path)
with open(os.path.join(pdf_dir, 'website', 'pdf_output.txt'), 'w', encoding='utf-8') as out:
    for i, page in enumerate(doc):
        out.write(f'--- PAGE {i+1} ---\n')
        out.write(page.get_text() + '\n')

# Extract images
img_dir = os.path.join(pdf_dir, 'website', 'public', 'images')
os.makedirs(img_dir, exist_ok=True)
count = 0
for i, page in enumerate(doc):
    for img in page.get_images(full=True):
        xref = img[0]
        base_image = doc.extract_image(xref)
        with open(os.path.join(img_dir, f'new_img_{count}.{base_image["ext"]}'), 'wb') as f:
            f.write(base_image['image'])
        count += 1
print(f'Extracted {count} images.')
