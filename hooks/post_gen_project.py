#!/usr/bin/env python3
"""Post-generation hook for cookiecutter template."""

import os
import shutil

def remove_file_if_exists(filepath):
    """Remove file if it exists."""
    if os.path.exists(filepath):
        os.remove(filepath)
        print(f"Removed {filepath}")

def remove_empty_directories():
    """Remove empty directories recursively."""
    for root, dirs, files in os.walk('.', topdown=False):
        for directory in dirs:
            dir_path = os.path.join(root, directory)
            try:
                if not os.listdir(dir_path):
                    os.rmdir(dir_path)
                    print(f"Removed empty directory {dir_path}")
            except OSError:
                pass

def main():
    """Clean up files based on configuration choices."""
    include_docker = '{{ cookiecutter.include_docker }}' == 'y'
    include_testing = '{{ cookiecutter.include_testing }}' == 'y'
    
    if not include_docker:
        remove_file_if_exists('Dockerfile')
        remove_file_if_exists('.dockerignore')
    
    if not include_testing:
        remove_file_if_exists('vitest-setup-client.ts')
        remove_file_if_exists('src/demo.spec.ts')
        remove_file_if_exists('src/routes/page.svelte.spec.ts')
    
    # Remove empty directories
    remove_empty_directories()
    
    print("✅ Template generation completed successfully!")
    print(f"📁 Project created: {{ cookiecutter.project_slug }}")
    print()
    print("🚀 Next steps:")
    print("   cd {{ cookiecutter.project_slug }}")
    print("   bun install")
    print("   bun dev")

if __name__ == '__main__':
    main()