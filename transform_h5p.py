import json
import os
import shutil

modules_map = {
    "module1-overview.h5p.json": "modules/overview",
    "module2-photography.h5p.json": "modules/photography",
    "module3-consent-branching.h5p.json": "modules/consent",
    "module4-privacy.h5p.json": "modules/privacy",
    "module5-safeguarding.h5p.json": "modules/safeguarding",
    "final-assessment.h5p.json": "modules/assessment"
}

def transform():
    for src, dest_dir in modules_map.items():
        if not os.path.exists(src):
            print(f"Skipping {src}, not found.")
            continue
            
        print(f"Processing {src}...")
        os.makedirs(os.path.join(dest_dir, "content"), exist_ok=True)
        
        with open(src, 'r') as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError as e:
                print(f"Error in {src}: {e}")
                continue
            
        # Create h5p.json
        # Format: H5P.CoursePresentation 1.25 -> machineName: H5P.CoursePresentation, majorVersion: 1, minorVersion: 25
        lib_parts = data['library'].split(' ')
        machine_name = lib_parts[0]
        version_parts = lib_parts[1].split('.')
        
        h5p_manifest = {
            "title": src.replace('.h5p.json', ''),
            "machineName": machine_name,
            "majorVersion": int(version_parts[0]),
            "minorVersion": int(version_parts[1]),
            "preloadedDependencies": [] # Minimal, player usually handles this
        }
        
        with open(os.path.join(dest_dir, "h5p.json"), 'w') as f:
            json.dump(h5p_manifest, f, indent=2)
            
        # Create content/content.json
        with open(os.path.join(dest_dir, "content", "content.json"), 'w') as f:
            json.dump(data['jsonContent'], f, indent=2)

if __name__ == "__main__":
    transform()
