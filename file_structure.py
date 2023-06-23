import os


def generate_file_structure(directory, indent=""):
    items = sorted(os.listdir(directory))
    for item in items:
        path = os.path.join(directory, item)
        if os.path.isfile(path):
            print(indent + "- " + item)
        elif os.path.isdir(path):
            print(indent + "+ " + item)
            generate_file_structure(path, indent + "  ")


# Specify the root directory of your website
root_directory = "/Users/jaimemoreno/Documents/Web Dev/Projects/Personal Sites/Portfolio/xJIsaac.github.io - Latest"

# Generate the file structure
generate_file_structure(root_directory)
