'''
File to extract names from a web response
'''

import bs4

def extract_names(html_file):
  """Extracts all names between specific tags in a local HTML file.

  Args:
    html_file: The path to the local HTML file.

  Returns:
    A list of strings containing the extracted names.
  """
  try:
    with open(html_file, 'r') as f:
      html_content = f.read()
  except FileNotFoundError:
    print(f"Error: File '{html_file}' not found.")
    return []
  
  soup = bs4.BeautifulSoup(html_content, 'html.parser')
  names = []
  tags = soup.find_all('a', class_=["roster_user_name", "student_context_card_trigger"])
  for tag in tags:
    if tag.has_attr('previewlistener') and tag.get('previewlistener') == 'true':
      names.append(tag.text.strip())
  return names

# Example usage
html_file_path = "./Untitled-1.xml"  # Replace with your actual file path
names = extract_names(html_file_path)

if names:
  print("Extracted Names:")
  for name in names:
    print(name)
else:
  print("No names found in the document.")
