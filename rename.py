import os

def rename_images_to_lowercase(directory):
    # Loop through all the files in the directory
    for filename in os.listdir(directory):
        # Check if the file is an image (you can add more extensions as needed)
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            # Get the full path to the file
            old_path = os.path.join(directory, filename)
            new_filename = filename.lower()
            new_path = os.path.join(directory, new_filename)

            # Rename the file if the name is not already in lowercase
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f"Renamed: {filename} -> {new_filename}")

# Provide the path to your image directory
image_directory = 'produceimage/'
rename_images_to_lowercase(image_directory)